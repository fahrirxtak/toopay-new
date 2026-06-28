/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { useEffect } from "react";

export default function NotFound() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Soft background accent */}
      <div className="absolute -top-32 -right-32 size-[420px] rounded-full bg-prime-accent/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 size-[420px] rounded-full bg-blue-500/10 blur-3xl" />

      <motion.div
        className="relative z-10 max-w-3xl text-center"
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* Big error code */}
        <h1 className="text-[120px] md:text-[160px] font-semibold tracking-tighter leading-none text-zinc-500">
          404
        </h1>

        <p className="mt-6 text-xl md:text-2xl font-light text-zinc-600">
          {t.notFound.title}
        </p>

        <p className="mt-4 text-base md:text-lg font-light text-zinc-500 leading-relaxed max-w-xl mx-auto">
          {t.notFound.text}
        </p>

        {/* Action */}
        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-zinc-200 text-sm font-medium transition
                       hover:bg-prime-accent hover:text-zinc-900 hover:border-transparent"
          >
            {t.notFound.goHome}
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium text-zinc-500 transition
                       hover:text-zinc-900"
          >
            {t.notFound.goBack}
          </button>
        </div>
      </motion.div>
    </motion.main>
  );
}
