"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!show) return null;

  return (
    <button
      aria-label="Back to top"
      onClick={scrollTop}
      className="fixed bottom-5 right-5 z-[60]
                 rounded-full p-3 bg-white/90 shadow-lg
                 ring-1 ring-black/10 hover:bg-white focus:outline-none
                 focus:ring-2 focus:ring-offset-2 focus:ring-black/30"
    >
      {/* стрелка вверх (белая на чёрном фоне/фон сайта) */}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 5l-7 7h4v7h6v-7h4l-7-7z" fill="currentColor"/>
      </svg>
    </button>
  );
}
