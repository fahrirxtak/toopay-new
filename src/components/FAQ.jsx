import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { splitWords, revealWords, revealFade } from "../utils/gsapReveal";

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const itemsRef = useRef([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      if (headingRef.current) {
        const words = splitWords(headingRef.current);
        revealWords(words, { trigger: headingRef.current, stagger: 0.06 });
      }

      // Items fade in
      itemsRef.current.forEach((item, i) => {
        if (item) {
          revealFade(item, {
            trigger: item,
            delay: i * 0.1,
            duration: 0.8,
            y: 30,
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white text-brand-navy">
      <div className="container mx-auto px-6 lg:px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-zinc-500 mb-4">
            {t.faq.sectionTag}
          </p>
          <h2
            ref={headingRef}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-brand-navy"
          >
            {t.faq.title}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {t.faq.items.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="border border-zinc-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 transition-colors"
              >
                <span className="text-lg font-semibold pr-8">{item.question}</span>
                <div
                  className={`shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown size={20} />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0 text-zinc-600 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
