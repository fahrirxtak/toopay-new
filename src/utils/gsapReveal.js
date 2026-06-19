import gsap from "gsap";

/**
 * Awwwards-style easing & defaults
 */
export const REVEAL_EASE = "expo.out";
export const REVEAL_DURATION = 1.2;
export const REVEAL_STAGGER = 0.06;

/**
 * Split a text element into word spans wrapped in an overflow-hidden mask.
 * Returns the inner span elements ready to be animated.
 */
export function splitWords(el) {
  if (!el) return [];
  // If already split, return existing words
  if (el.dataset.split === "1") {
    return Array.from(el.querySelectorAll("[data-word]"));
  }

  const text = (el.textContent || "").replace(/\s+/g, " ").trim();
  if (!text) return [];

  el.textContent = "";
  el.dataset.split = "1";

  const words = text.split(" ");
  const inner = [];

  words.forEach((w, i) => {
    const mask = document.createElement("span");
    mask.style.display = "inline-block";
    mask.style.overflow = "hidden";
    mask.style.verticalAlign = "top";
    mask.style.lineHeight = "inherit";
    mask.style.padding = "0.3em 0.1em";
    mask.style.margin = "-0.3em -0.1em";

    const word = document.createElement("span");
    word.style.display = "inline-block";
    word.style.willChange = "transform";
    word.dataset.word = "1";
    word.textContent = w;

    mask.appendChild(word);
    el.appendChild(mask);

    if (i < words.length - 1) {
      el.appendChild(document.createTextNode(" "));
    }
    inner.push(word);
  });

  return inner;
}

/**
 * Awwwards-style mask reveal for split words.
 * Defaults: animation runs immediately (no scroll trigger) so it works above the fold.
 */
export function revealWords(targets, opts = {}) {
  const {
    trigger,
    start = "top 90%",
    duration = REVEAL_DURATION,
    stagger = REVEAL_STAGGER,
    delay = 0,
    ease = REVEAL_EASE,
    once = true,
    immediate = false,
  } = opts;

  if (!targets || (Array.isArray(targets) && targets.length === 0)) return;

  const config = {
    yPercent: 0,
    rotate: 0,
    duration,
    stagger,
    delay,
    ease,
  };

  if (trigger && !immediate) {
    config.scrollTrigger = { trigger, start, once };
  }

  return gsap.fromTo(targets, { yPercent: 140, rotate: 4 }, config);
}

/**
 * Clip-path reveal for images / cards.
 */
export function revealClip(target, opts = {}) {
  const {
    trigger,
    start = "top 90%",
    duration = 1.4,
    delay = 0,
    ease = REVEAL_EASE,
    direction = "up",
    once = true,
  } = opts;

  if (!target) return;

  const fromMap = {
    up: "inset(100% 0% 0% 0%)",
    down: "inset(0% 0% 100% 0%)",
    left: "inset(0% 100% 0% 0%)",
    right: "inset(0% 0% 0% 100%)",
  };

  const fromVal = fromMap[direction];

  return gsap.fromTo(
    target,
    { clipPath: fromVal, webkitClipPath: fromVal },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      webkitClipPath: "inset(0% 0% 0% 0%)",
      duration,
      delay,
      ease,
      scrollTrigger: trigger ? { trigger, start, once } : undefined,
    }
  );
}

/**
 * Soft fade + slide up for generic blocks.
 */
export function revealFade(target, opts = {}) {
  const {
    trigger,
    start = "top 90%",
    duration = 1,
    delay = 0,
    y = 40,
    ease = REVEAL_EASE,
    stagger = 0,
    once = true,
  } = opts;

  if (!target) return;

  return gsap.fromTo(
    target,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease,
      stagger,
      scrollTrigger: trigger ? { trigger, start, once } : undefined,
    }
  );
}
