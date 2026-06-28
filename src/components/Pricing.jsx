import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { revealWords, splitWords, revealFade } from "../utils/gsapReveal";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      if (headingRef.current) {
        const words = splitWords(headingRef.current);
        revealWords(words, { trigger: headingRef.current, stagger: 0.06 });
      }

      // Cards fade in
      cardsRef.current.forEach((card, i) => {
        if (card) {
          revealFade(card, {
            trigger: card,
            delay: i * 0.15,
            duration: 1,
            y: 40,
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-white text-brand-navy"
    >
      <div className="container mx-auto px-6 lg:px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-zinc-500 mb-4">
            {t.pricing.sectionTag}
          </p>
          <h2
            ref={headingRef}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-brand-navy"
          >
            {t.pricing.title}
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.pricing.plans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`border rounded-3xl p-8 flex flex-col ${
                index === 1
                  ? "border-brand-navy bg-brand-navy/5"
                  : "border-zinc-200 hover:border-zinc-300"
              }`}
            >
              {/* Plan Name */}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-zinc-500 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <p className="text-zinc-500 text-sm mb-1 font-medium">{t.pricing.startingFrom}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl lg:text-5xl font-bold tracking-tighter">
                    {plan.price}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="size-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-green-600" />
                    </div>
                    <span className="text-sm text-zinc-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Setup Fee */}
              <div className="pt-6 border-t border-zinc-200 mb-8">
                <p className="text-xs text-zinc-500 mb-2">{t.pricing.setupFee}</p>
                <p className="text-lg font-semibold">{plan.setupFee}</p>
              </div>

              {/* Action Button */}
              <Link 
                to="/contact"
                className={`w-full py-4 px-6 rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 ${
                  index === 1 
                    ? "bg-brand-navy text-white hover:bg-brand-navy/90" 
                    : "bg-prime-accent text-zinc-950 hover:bg-[#cbe635]"
                }`}
              >
                {t.pricing.buttonText}
              </Link>
            </div>
          ))}
        </div>

        {/* Maintenance Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-500">
            {t.pricing.maintenance}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
