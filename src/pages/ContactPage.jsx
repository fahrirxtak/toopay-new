import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../i18n/LanguageContext";
import { MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ─── EmailJS config ───────────────────────────────────────────

const EMAILJS_SERVICE_ID = "service_4tqsejq";
const EMAILJS_TEMPLATE_ID = "template_j8xbbpp";
const EMAILJS_PUBLIC_KEY = "S-jy8IisCQT_kFy2j";

// ──────────────────────────────────────────────────────────────

const serviceIcons = ["✦", "◈", "⌥", "+"];

const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "IDR", symbol: "Rp", name: "Indonesian Rupiah" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
  { code: "MYR", symbol: "RM", name: "Malaysian Ringgit" },
];

const ContactPage = () => {
  const { t } = useLanguage();
  const services = t.contact.services.map((label, i) => ({
    label,
    icon: serviceIcons[i],
  }));
  const steps = t.contact.steps;
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    currency: "IDR",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  // Hero refs
  const sectionRef = useRef(null);
  const brandTextRef = useRef(null);
  const subTitleRef = useRef(null);
  const titleRef = useRef(null);
  const actionRef = useRef(null);

  // Section refs
  const formSectionRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const brandText = brandTextRef.current;
    const section = sectionRef.current;
    if (!brandText || !section) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 1024;
      gsap.set(brandText, { force3D: true, willChange: "transform" });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 1.5 })
        .fromTo(
          brandText,
          { opacity: 0, scale: 1.2, filter: "blur(10px)" },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 2,
            ease: "expo.out",
          },
          0.2,
        )
        .fromTo(
          subTitleRef.current,
          { opacity: 0, y: 30, letterSpacing: "1rem" },
          { opacity: 0.6, y: 0, letterSpacing: "0.3rem", duration: 1.2 },
          0.5,
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 40, skewY: 2 },
          { opacity: 1, y: 0, skewY: 0, duration: 1.2 },
          0.7,
        )
        .fromTo(
          actionRef.current,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.7)" },
          0.9,
        );

      if (isMobile) {
        gsap.fromTo(
          brandText,
          { y: 100, force3D: true },
          {
            y: -150,
            ease: "none",
            force3D: true,
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          },
        );
      } else {
        gsap.to(brandText, {
          x: 200,
          rotate: 2,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      gsap.fromTo(
        formSectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formSectionRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, section);

    return () => {
      ctx.revert();
      if (brandText) gsap.set(brandText, { willChange: "auto" });
    };
  }, []);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    // Format budget with currency symbol
    const selectedCurrency = currencies.find((c) => c.code === form.currency);
    const formattedBudget = form.budget
      ? `${selectedCurrency?.symbol || ""} ${Number(form.budget).toLocaleString()}`
      : "—";

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          company: form.company || "—",
          service: form.service || "—",
          budget: formattedBudget,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch (err) {
      setError(t.contact.errorText);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-brand-navy">
      {/* ── HERO ── */}
      <section
        ref={sectionRef}
        className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden text-white bg-gradient-to-tr from-zinc-950 via-blue-700 to-indigo-300"
      >
        <div
          style={{
            backgroundImage: "url(/images/grain.jpg)",
            backgroundSize: "cover",
            mixBlendMode: "overlay",
          }}
          className="absolute inset-0 bg-zinc-600 pointer-events-none opacity-40 z-0"
        />
        <div
          style={{
            backgroundImage: "url(/images/squirrel_mascot.png)",
            backgroundSize: "contain",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
          }}
          className="absolute inset-0 pointer-events-none opacity-[0.06] z-0 translate-x-[18%] scale-150 rotate-12"
        />

        <div className="container mx-auto px-8 lg:px-4 relative z-10 mb-45">
          <div className="max-w-4xl">
            <p
              ref={subTitleRef}
              className="uppercase text-prime-white lg:text-sm 2xl:text-base font-bold tracking-[0.3rem] mb-8"
            >
              {t.contact.eyebrow}
            </p>
            <h1
              ref={titleRef}
              className="text-4xl lg:text-5xl 2xl:text-7xl max-w-2xl lg:max-w-4xl font-medium tracking-tighter leading-tight"
            >
              {t.contact.title}
            </h1>
            <div
              ref={actionRef}
              className="mt-12 flex items-center gap-4 flex-wrap"
            >
              <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm font-medium">
                <span className="size-2 rounded-full bg-prime-accent animate-pulse" />
                {t.contact.available}
              </div>
              <p className="text-white/50 text-sm">{t.contact.responseTime}</p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-full pointer-events-none overflow-visible">
          <div
            ref={brandTextRef}
            style={{ willChange: "transform" }}
            aria-hidden="true"
            className="absolute top-1/2 -translate-y-1/2 text-white font-black tracking-tighter leading-[0.85] select-none text-[20vw] -rotate-90 lg:rotate-0 whitespace-nowrap z-0 right-0 translate-x-[30%] lg:translate-x-0 [-webkit-text-stroke:1px_rgba(255,255,255,0.4)] lg:[-webkit-text-stroke:0px] drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] opacity-0"
          >
            Contact
          </div>
          <div className="absolute right-14 -top-40 text-[10px] uppercase font-bold tracking-[0.2rem] opacity-60 hidden lg:block">
            {t.contact.scroll}
          </div>
        </div>
      </section>
      {/* ── FORM + INFO ── */}
      <section className="bg-white text-brand-navy">
        <div className="container mx-auto px-6 lg:px-4">
          <div className="grid lg:grid-cols-12 gap-0">
            {/* ── LEFT: FORM ── */}
            <div
              ref={formSectionRef}
              className="lg:col-span-7 py-16 lg:py-20 lg:pr-16 lg:border-r lg:border-zinc-100 border-b border-zinc-100 lg:border-b-0 opacity-0"
            >
              {submitted ? (
                <div className="flex flex-col items-start gap-8 py-16">
                  <div className="size-20 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
                    <CheckCircle size={36} className="text-green-500" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-semibold tracking-tight mb-3">
                      {t.contact.successTitle}
                    </h2>
                    <p className="text-zinc-500 text-lg leading-relaxed max-w-md">
                      {t.contact.successText}
                    </p>
                  </div>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-3 px-7 py-3.5 bg-brand-navy text-white rounded-full font-bold hover:bg-blue-700 transition-all hover:scale-105"
                  >
                    {t.contact.seeWork} <ArrowRight size={18} />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-12">
                  {/* Step 01 */}
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-[10px] font-bold text-zinc-300 tracking-widest uppercase">
                        01
                      </span>
                      <div className="h-px flex-1 bg-zinc-100" />
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                        {t.contact.sectionAboutYou}
                      </span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {[
                        {
                          name: "name",
                          label: t.contact.fieldName,
                          placeholder: t.contact.fieldNamePlaceholder,
                          required: true,
                        },
                        {
                          name: "email",
                          label: t.contact.fieldEmail,
                          placeholder: t.contact.fieldEmailPlaceholder,
                          type: "email",
                          required: true,
                        },
                      ].map(({ name, label, placeholder, type, required }) => (
                        <div key={name} className="relative">
                          <label
                            className={`absolute -top-2.5 left-0 text-[10px] font-bold uppercase tracking-widest transition-colors duration-200 ${focused === name ? "text-prime-accent" : "text-zinc-400"}`}
                          >
                            {label}
                            {required && " *"}
                          </label>
                          <input
                            required={required}
                            name={name}
                            type={type || "text"}
                            value={form[name]}
                            onChange={handleChange}
                            onFocus={() => setFocused(name)}
                            onBlur={() => setFocused("")}
                            placeholder={placeholder}
                            className={`w-full bg-transparent border-b pt-4 pb-3 text-lg text-brand-navy outline-none transition-colors duration-200 placeholder:text-zinc-300 ${focused === name ? "border-prime-accent" : "border-zinc-200"}`}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="relative mt-8">
                      <label
                        className={`absolute -top-2.5 left-0 text-[10px] font-bold uppercase tracking-widest transition-colors duration-200 ${focused === "company" ? "text-prime-accent" : "text-zinc-400"}`}
                      >
                        {t.contact.fieldCompany}
                      </label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        onFocus={() => setFocused("company")}
                        onBlur={() => setFocused("")}
                        placeholder={t.contact.fieldCompanyPlaceholder}
                        className={`w-full bg-transparent border-b pt-4 pb-3 text-lg text-brand-navy outline-none transition-colors duration-200 placeholder:text-zinc-300 ${focused === "company" ? "border-prime-accent" : "border-zinc-200"}`}
                      />
                    </div>
                  </div>

                  {/* Step 02 */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] font-bold text-zinc-300 tracking-widest uppercase">
                        02
                      </span>
                      <div className="h-px flex-1 bg-zinc-100" />
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                        {t.contact.sectionService}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {services.map(({ label, icon }) => {
                        const isActive = form.service === label;
                        return (
                          <button
                            key={label}
                            type="button"
                            onClick={() =>
                              setForm((p) => ({ ...p, service: label }))
                            }
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-semibold transition-all duration-200 ${
                              isActive
                                ? "bg-brand-navy border-prime-accent text-prime-accent"
                                : "border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:text-zinc-800"
                            }`}
                          >
                            <span
                              className={isActive ? "text-prime-accent" : ""}
                            >
                              {icon}
                            </span>
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 03 */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] font-bold text-zinc-300 tracking-widest uppercase">
                        03
                      </span>
                      <div className="h-px flex-1 bg-zinc-100" />
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                        {t.contact.sectionBudget}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      {/* Currency Selector */}
                      <div className="relative w-40">
                        <label
                          className={`absolute -top-2.5 left-0 text-[10px] font-bold uppercase tracking-widest transition-colors duration-200 ${focused === "currency" ? "text-prime-accent" : "text-zinc-400"}`}
                        >
                          Currency
                        </label>
                        <select
                          name="currency"
                          value={form.currency}
                          onChange={handleChange}
                          onFocus={() => setFocused("currency")}
                          onBlur={() => setFocused("")}
                          className={`w-full bg-transparent border-b pt-4 pb-3 text-lg text-brand-navy outline-none transition-colors duration-200 cursor-pointer ${focused === "currency" ? "border-prime-accent" : "border-zinc-200"}`}
                        >
                          {currencies.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.code} ({c.symbol})
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* Budget Input */}
                      <div className="flex-1 relative">
                        <label
                          className={`absolute -top-2.5 left-0 text-[10px] font-bold uppercase tracking-widest transition-colors duration-200 ${focused === "budget" ? "text-prime-accent" : "text-zinc-400"}`}
                        >
                          {t.contact.fieldBudget}
                        </label>
                        <input
                          name="budget"
                          type="number"
                          value={form.budget}
                          onChange={handleChange}
                          onFocus={() => setFocused("budget")}
                          onBlur={() => setFocused("")}
                          placeholder="0"
                          className={`w-full bg-transparent border-b pt-4 pb-3 text-lg text-brand-navy outline-none transition-colors duration-200 placeholder:text-zinc-300 ${focused === "budget" ? "border-prime-accent" : "border-zinc-200"}`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 04 */}
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-[10px] font-bold text-zinc-300 tracking-widest uppercase">
                        04
                      </span>
                      <div className="h-px flex-1 bg-zinc-100" />
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                        {t.contact.sectionDetails}
                      </span>
                    </div>
                    <div className="relative">
                      <label
                        className={`absolute -top-2.5 left-0 text-[10px] font-bold uppercase tracking-widest transition-colors duration-200 ${focused === "message" ? "text-prime-accent" : "text-zinc-400"}`}
                      >
                        {t.contact.fieldMessage} *
                      </label>
                      <textarea
                        required
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused("")}
                        rows={5}
                        placeholder={t.contact.fieldMessagePlaceholder}
                        className={`w-full bg-transparent border-b pt-4 pb-3 text-lg text-brand-navy outline-none transition-colors duration-200 resize-none placeholder:text-zinc-300 ${focused === "message" ? "border-prime-accent" : "border-zinc-200"}`}
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-zinc-100">
                    <p className="text-zinc-400 text-sm">
                      {t.contact.requiredFields}
                    </p>
                    <button
                      type="submit"
                      disabled={sending}
                      className="flex items-center gap-4 p-3 px-6 bg-prime-accent text-zinc-950 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-yellow-500/10 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {sending ? t.contact.sending : t.contact.send}
                      <div className="size-10 bg-zinc-950 rounded-full flex items-center justify-center">
                        <ArrowRight size={18} className="text-prime-accent" />
                      </div>
                    </button>
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                  )}
                </form>
              )}
            </div>

            {/* ── RIGHT: INFO ── */}
            <div
              ref={infoRef}
              className="lg:col-span-5 py-16 lg:py-20 lg:pl-16 flex flex-col gap-14 opacity-0"
            >
              {/* Contact details */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-8">
                  {t.contact.getInTouch}
                </p>
                <div className="flex flex-col gap-6">
                  <a
                    href="mailto:tooopayy@gmail.com"
                    className="group flex items-start gap-4 hover:text-blue-600 transition-colors"
                  >
                    <div className="size-10 rounded-full border border-zinc-200 flex items-center justify-center shrink-0 group-hover:border-blue-600 transition-colors">
                      <Mail
                        size={16}
                        className="text-zinc-400 group-hover:text-blue-600 transition-colors"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">
                        {t.contact.emailLabel}
                      </p>
                      <p className="text-brand-navy font-medium">
                        tooopayy@gmail.com
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full border border-zinc-200 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-zinc-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">
                        {t.contact.locationLabel}
                      </p>
                      <p className="text-brand-navy font-medium">
                        {t.contact.locationValue}
                        <br />
                        Indonesia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full border border-zinc-200 flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-zinc-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">
                        {t.contact.timezoneLabel}
                      </p>
                      <p className="text-brand-navy font-medium">WIB — GMT+7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-8">
                  {t.contact.ourProcess}
                </p>
                <div className="flex flex-col gap-0">
                  {steps.map(({ step, title, text }, i) => (
                    <div key={step} className="flex gap-5 group">
                      <div className="flex flex-col items-center">
                        <div className="size-8 rounded-full border border-zinc-200 flex items-center justify-center shrink-0 group-hover:border-blue-600 group-hover:bg-blue-50 transition-all">
                          <span className="text-[10px] font-bold text-zinc-400 group-hover:text-blue-600 transition-colors">
                            {step}
                          </span>
                        </div>
                        {i < steps.length - 1 && (
                          <div className="w-px flex-1 bg-zinc-100 my-2" />
                        )}
                      </div>
                      <div className="pb-8">
                        <p className="text-brand-navy font-semibold mb-1">
                          {title}
                        </p>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-6">
                  {t.contact.followUs}
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Instagram", "Twitter (X)", "LinkedIn", "TikTok"].map(
                    (s) => (
                      <a
                        key={s}
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 text-zinc-500 text-xs font-semibold hover:border-brand-navy hover:text-brand-navy transition-all"
                      >
                        {s} <ArrowUpRight size={12} />
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <a
        href="https://wa.me/6287876982219"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={38} />
      </a>
    </div>
  );
};

export default ContactPage;
