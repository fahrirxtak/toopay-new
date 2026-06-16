import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import gsap from "gsap";
import { splitTextToChars } from "../../../utils/textUtils";
import { useLanguage } from "../../../i18n/LanguageContext";
import LanguageToggle from "../../../i18n/LanguageToggle";

const MobileMenu = ({ isOpen, onClose, isAnimating, setIsAnimating }) => {
    const { t, lang } = useLanguage();
    const [visible, setVisible] = useState(false);

    const mobileMenuRef = useRef(null);
    const overlayRef = useRef(null);
    const navLinksRef = useRef([]);
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname;

    // Mobile Menu Animation with GSAP
    useLayoutEffect(() => {
        const mobileMenu = mobileMenuRef.current;
        const overlay = overlayRef.current;

        if (!mobileMenu || !overlay) return;

        if (isOpen) {
            // Open animation
            if (setIsAnimating) setIsAnimating(true);

            // Tampilkan menu terlebih dahulu dengan opacity 0
            setVisible(true);

            // Gunakan requestAnimationFrame untuk sinkronisasi dengan paint browser
            requestAnimationFrame(() => {
                // Kill existing animations
                gsap.killTweensOf([mobileMenu, overlay]);

                // Set initial state - INVISIBLE
                gsap.set(mobileMenu, {
                    x: "100%",
                    opacity: 0,
                    display: "flex",
                    visibility: "visible"
                });

                gsap.set(overlay, {
                    opacity: 0,
                    display: "block"
                });

                // Animate overlay first
                gsap.to(overlay, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });

                // Animate menu sliding in
                const tl = gsap.timeline({
                    onComplete: () => {
                        if (setIsAnimating) setIsAnimating(false);
                    }
                });

                tl.to(mobileMenu, {
                    x: "0%",
                    opacity: 1,
                    duration: 0.7,
                    ease: "power3.out"
                })
                    .fromTo(mobileMenu.querySelectorAll(".mobile-nav-link"),
                        {
                            opacity: 0,
                            x: -20,
                            visibility: "hidden"
                        },
                        {
                            opacity: 1,
                            x: 0,
                            visibility: "visible",
                            duration: 0.5,
                            stagger: 0.08,
                        },
                        "-=0.4"
                    )
                    .fromTo(mobileMenu.querySelectorAll(".mobile-content > *"),
                        {
                            opacity: 0,
                            y: 10,
                            visibility: "hidden"
                        },
                        {
                            opacity: 1,
                            y: 0,
                            visibility: "visible",
                            duration: 0.4,
                            stagger: 0.05,
                        },
                        "-=0.3"
                    );

                // Store timeline for cleanup
                mobileMenu._animation = tl;
            });

        } else if (visible) {
            // Close animation - hanya jika menu sedang visible
            if (setIsAnimating) setIsAnimating(true);

            // Kill existing animations
            gsap.killTweensOf([mobileMenu, overlay]);

            if (mobileMenu._animation) {
                mobileMenu._animation.kill();
            }

            const tl = gsap.timeline({
                onComplete: () => {
                    // Sembunyikan menu setelah animasi selesai
                    gsap.set(mobileMenu, {
                        x: "100%",
                        opacity: 0,
                        display: "none",
                        visibility: "hidden"
                    });

                    gsap.set(overlay, {
                        opacity: 0,
                        display: "none"
                    });

                    if (setIsAnimating) setIsAnimating(false);
                    setVisible(false);
                }
            });

            tl.to(mobileMenu.querySelectorAll(".mobile-nav-link, .mobile-content > *"), {
                opacity: 0,
                y: 10,
                duration: 0.2,
                stagger: -0.05,
            })
                .to(mobileMenu, {
                    x: "100%",
                    opacity: 0,
                    duration: 0.5,
                    ease: "power3.in",
                }, "-=0.1")
                .to(overlay, {
                    opacity: 0,
                    duration: 0.3,
                }, "-=0.3");
        }
    }, [isOpen, visible, setIsAnimating]);

    // Mobile Nav Links Hover Animation
    useEffect(() => {
        const mobileMenu = mobileMenuRef.current;
        if (!isOpen || !mobileMenu || isAnimating) return;

        const mobileNavLinks = mobileMenu.querySelectorAll(".mobile-nav-link-item");
        if (mobileNavLinks.length === 0) return;

        const mobileHoverTimelines = new Map();

        const applyMobileHoverAnimation = (element) => {
            const initialEl = element.querySelector(".text-initial");
            const hoverEl = element.querySelector(".text-hover");

            if (!initialEl || !hoverEl) return;

            splitTextToChars(initialEl);
            splitTextToChars(hoverEl);

            const charsInitial = initialEl.querySelectorAll(".char");
            const charsHover = hoverEl.querySelectorAll(".char");

            gsap.set(charsInitial, { yPercent: 0 });
            gsap.set(charsHover, { yPercent: 120 });

            const handleMouseEnter = () => {
                const existingTl = mobileHoverTimelines.get(element);
                if (existingTl) existingTl.kill();

                const tlHover = gsap.timeline();
                mobileHoverTimelines.set(element, tlHover);

                tlHover
                    .to(charsInitial, {
                        yPercent: -120,
                        duration: 0.5,
                        ease: "power2.out",
                        stagger: 0.02,
                    })
                    .to(
                        charsHover,
                        {
                            yPercent: 0,
                            duration: 0.5,
                            ease: "power2.out",
                            stagger: 0.02,
                        },
                        "<0.1"
                    );
            };

            const handleMouseLeave = () => {
                const existingTl = mobileHoverTimelines.get(element);
                if (existingTl) existingTl.kill();

                const tlHover = gsap.timeline();
                mobileHoverTimelines.set(element, tlHover);

                tlHover
                    .to(charsHover, {
                        yPercent: 120,
                        duration: 0.5,
                        ease: "power2.out",
                        stagger: 0.02,
                    })
                    .to(
                        charsInitial,
                        {
                            yPercent: 0,
                            duration: 0.5,
                            ease: "power2.out",
                            stagger: 0.02,
                        },
                        "<0.1"
                    );
            };

            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseleave", handleMouseLeave);

            element._mobileHoverHandlers = {
                enter: handleMouseEnter,
                leave: handleMouseLeave,
            };
        };

        mobileNavLinks.forEach((link) => applyMobileHoverAnimation(link));

        return () => {
            mobileHoverTimelines.forEach((timeline) => timeline.kill());
            mobileHoverTimelines.clear();

            mobileNavLinks.forEach((link) => {
                if (link._mobileHoverHandlers) {
                    link.removeEventListener("mouseenter", link._mobileHoverHandlers.enter);
                    link.removeEventListener("mouseleave", link._mobileHoverHandlers.leave);
                    delete link._mobileHoverHandlers;
                }
            });
        };
    }, [isOpen, isAnimating, lang]);

    // Manage body overflow
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handleNavClick = (e, targetId) => {
        if (e) e.preventDefault();
        onClose();

        if (location.pathname === "/") {
            const element = document.getElementById(targetId);
            if (element) element.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/");
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) element.scrollIntoView({ behavior: "smooth" });
            }, 300);
        }
    };

    return (
        <div className="fixed inset-0 z-[9999]" style={{ display: visible ? "block" : "none" }}>
            {/* Overlay */}
            <div
                ref={overlayRef}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
                style={{ display: "none" }}
            />

            {/* Menu Content */}
            <div
                ref={mobileMenuRef}
                className="absolute top-0 right-0 h-full w-full max-w-md bg-blue-800 text-white flex flex-col justify-between p-8 md:p-12"
                style={{ display: "none", visibility: "hidden" }}
            >
                {/* Head */}
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" onClick={onClose}>
                        <div className="text-2xl font-medium tracking-tighter space-font">
                            Toopay <sup className="text-xs">TM</sup>
                        </div>
                    </Link>

                    {/* Toggle + Close Button */}
                    <div className="flex items-center gap-3">
                        <LanguageToggle />
                        <button
                            onClick={onClose}
                            disabled={isAnimating}
                            className="size-12 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/10 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* NAVLINKS */}
                <div className="flex flex-col gap-4 mt-8">
                    {t.nav.items.map((item, index) => {
                        const anchor = t.nav.anchors[index];
                        const isActive = pathname === `/${anchor}`;

                        return (
                            <div
                                key={`${lang}-${index}`}
                                className="mobile-nav-link"
                                ref={el => navLinksRef.current[index] = el}
                            >
                        <a
                                    href={`#${anchor}`}
                                    onClick={(e) => handleNavClick(e, anchor)}
                                    className={`mobile-nav-link-item relative inline-block overflow-hidden leading-none cursor-pointer text-5xl text-pretty md:text-7xl font-light tracking-tight h-fit ${isActive ? "text-prime-accent" : "text-white"
                                        }`}
                                    style={{ lineHeight: "1" }}
                                >
                                    <span className="block text-initial" style={{ lineHeight: "1" }}>
                                        {item}
                                    </span>
                                    <span
                                        className="block absolute top-0 left-0 text-hover w-full"
                                        style={{ lineHeight: "1" }}
                                    >
                                        {item}
                                    </span>
                                </a>
                            </div>
                        );
                    })}
                </div>

                {/* BOTTOM */}
                <div className="mobile-content space-y-8">
                    {/* Part A */}
                    <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                        {/* 1 */}
                        <div className="location-info">
                            <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-3 font-bold">
                                {t.mobileMenu.locationLabel}
                            </h4>
                            <p className="text-sm font-medium leading-relaxed">
                                Bandung <br /> Jawa Barat, Indonesia
                            </p>
                        </div>

                        {/* 2 */}
                        <div className="contact-info">
                            <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-3 font-bold">
                                {t.mobileMenu.contactLabel}
                            </h4>
                            <p className="text-sm font-medium leading-relaxed">
                                +62 878 7698 2219 <br />
                                tooopayy@gmail.com
                            </p>
                        </div>
                    </div>

                    {/* PART B */}
                    <div className="footer-content flex flex-col md:flex-row justify-between items-end md:items-center gap-4 border-t border-white/10 pt-6">
                        <p className="copyright text-[10px] uppercase tracking-[2em] text-white/40">
                            &copy; {new Date().getFullYear()}. {t.mobileMenu.copyright}
                        </p>

                        {/* Socials */}
                        <div className="social-links flex gap-6 text-[10px] uppercase tracking-widest font-bold">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer hover:text-white/60 transition"
                            >
                                Instagram
                            </a>
                            <a
                                href="https://tiktok.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer hover:text-white/60 transition"
                            >
                                Tiktok
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
