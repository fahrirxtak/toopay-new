import { useLanguage } from "./LanguageContext";

const langs = ["id", "en"];

const LanguageToggle = ({ className = "" }) => {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`flex items-center gap-1 text-[10px] lg:text-xs font-bold uppercase tracking-widest ${className}`}
    >
      {langs.map((code, i) => (
        <span key={code} className="flex items-center">
          {i > 0 && <span className="text-white/30 mr-1">/</span>}
          <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={`cursor-pointer transition-opacity duration-200 ${
              lang === code ? "text-white" : "text-white/40 hover:text-white/70"
            }`}
          >
            {code.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
};

export default LanguageToggle;
