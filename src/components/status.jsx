"use client";

import { useEffect, useRef, useState } from "react";

export default function Status() {
  const stats = [
    { number: "5+",   text: "Years of Service" },
    { number: "10+",  text: "Certified Trainers" },
    { number: "786+", text: "Happy Members" },
    { number: "95%",  text: "Customer Satisfaction" },
  ];

  return (
    <div
      className="
        bg-[#111111] w-full h-[155px] px-[180px] py-[48px]
        grid grid-cols-4 items-center justify-items-center
        max-[1440px]:px-[120px] max-[1440px]:h-[140px]
        max-[1280px]:px-[80px]  max-[1280px]:h-[130px]
        max-[1024px]:px-[40px]  max-[1024px]:h-auto max-[1024px]:py-[32px]
        max-[1024px]:grid-cols-2 max-[1024px]:gap-y-[32px]
        max-[640px]:px-[20px]   max-[640px]:py-[28px]
        max-[640px]:grid-cols-1 max-[640px]:gap-y-[20px]
      "
    >
      {stats.map((item, i) => (
        <StatItem key={i} number={item.number} text={item.text} />
      ))}
    </div>
  );
}

/* === Элемент статистики с анимацией === */
function StatItem({ number, text }) {
  const { elRef, value, suffix } = useCountUp(number, { duration: 1200 });

  return (
    <div className="h-[59px] flex flex-col items-center text-center">
      <h3
        ref={elRef}
        className="
          text-[#EEEEEE] leading-[110%] text-[32px] font-bold
          max-[1440px]:text-[28px]
          max-[1280px]:text-[26px]
          max-[1024px]:text-[24px]
          max-[640px]:text-[22px]
        "
        aria-label={`${value}${suffix}`}
      >
        {formatInt(value)}
        <span>{suffix}</span>
      </h3>
      <p
        className="
          text-[#EEEEEE] tracking-[0.2px] leading-[140%] text-[14px] font-medium
          max-[1280px]:text-[13px]
          max-[1024px]:text-[12px]
          max-[640px]:text-[12px]
        "
      >
        {text}
      </p>
    </div>
  );
}

/* === Хук подсчёта от 0 до целевого значения при появлении в вьюпорте === */
function useCountUp(targetStr, { duration = 1200, once = true } = {}) {
  const elRef = useRef(null);
  const [val, setVal] = useState(0);

  const { target, suffix } = parseTarget(targetStr);

  useEffect(() => {
    const node = elRef.current;
    if (!node) return;

    // Respect prefers-reduced-motion
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduceMotion) {
      setVal(Math.round(target));
      return;
    }

    let started = false;
    let raf = 0;
    let t0 = 0;

    const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);

    const animate = (t) => {
      if (!t0) t0 = t;
      const p = Math.min((t - t0) / duration, 1);
      const eased = easeOutCubic(p);
      setVal(Math.round(eased * target));
      if (p < 1) {
        raf = requestAnimationFrame(animate);
      }
    };

    const start = () => {
      if (started) return;
      started = true;
      t0 = 0;
      raf = requestAnimationFrame(animate);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            start();
            if (once) io.disconnect();
          }
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(node);

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target, duration, once]);

  return { elRef, value: Math.min(val, Math.round(target)), suffix };
}

/* === Разбор числа и суффикса (например '786+' → 786 и '+') === */
function parseTarget(str) {
  const s = String(str ?? "");
  const m = s.trim().match(/^(\d+(?:[.,]\d+)?)(.*)$/);
  if (!m) return { target: 0, suffix: "" };
  const num = parseFloat(m[1].replace(",", "."));
  const suffix = (m[2] || "").trim();
  return { target: Number.isFinite(num) ? num : 0, suffix };
}

/* Форматер целых с разделителями (на будущее, если будут тысячи) */
function formatInt(n) {
  try {
    return Number(n).toLocaleString();
  } catch {
    return String(n);
  }
}
