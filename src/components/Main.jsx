"use client";

import { useEffect, useState } from "react";

export default function MainItems(){
  const Menu = [
    { text:"Home", href:"#" },
    { text:"About", href:"#About" },
    { text:"Services", href:"#Services" },
    { text:"Contact", href:"#Contact" },
  ];

  const [open, setOpen] = useState(false);

  // глобально включаем плавный скролл
  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => { document.documentElement.style.scrollBehavior = prev; };
  }, []);

  // Esc + блок скролла при открытом меню
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // хелпер плавного скролла с учётом верхнего отступа
  const smoothScrollTo = (hash) => {
    if (!hash || hash === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(hash);
    if (!el) return;

    // примерная высота возможной шапки/отступа
    const headerOffset = 80;
    const rect = el.getBoundingClientRect();
    const targetY = window.pageYOffset + rect.top - headerOffset;

    window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });

    // доступность: переведём фокус в секцию (без скачка)
    let added = false;
    if (!el.hasAttribute("tabindex")) { el.setAttribute("tabindex", "-1"); added = true; }
    setTimeout(() => {
      try { el.focus({ preventScroll: true }); } catch {}
      if (added) el.removeAttribute("tabindex");
    }, 350);
  };

  const onNavClick = (e, href) => {
    e.preventDefault();
    smoothScrollTo(href);
    setOpen(false);
  };

  return (
    <div
      id="Home"
      className="
        scroll-smooth
        w-full h-[850px] bg-[url(/Main/MainBanner.svg)] bg-cover bg-no-repeat flex flex-col
        max-[1440px]:h-[760px] max-[1440px]:bg-center
        max-[1280px]:h-[680px]
        max-[1024px]:h-[560px]
        max-[840px]:h-[500px]
        max-[640px]:h-[460px]
        max-[480px]:h-[440px]
      "
    >
      {/* Шапка */}
      <div
        className="
          w-[1430px] h-[40px] flex items-center justify-between mx-auto mt-[40px]
          max-[1440px]:w-[92%] max-[1440px]:mt-[28px]
          max-[1200px]:w-[94%]
          max-[1024px]:mt-[20px] max-[1024px]:h-[36px]
          max-[840px]:h-[34px]
          max-[640px]:h-[32px]
          max-[480px]:h-[30px]
        "
      >
        <img
          src="/Main/MainLogo.svg"
          alt="Logo"
          className="
            w-[80px] h-[35.71px] gap-[7,14px]
            max-[1440px]:w-[74px] max-[1440px]:h-[32px]
            max-[1024px]:w-[68px] max-[1024px]:h-[29px]
            max-[640px]:w-[60px] max-[640px]:h-[26px]
            max-[480px]:w-[54px] max-[480px]:h-[24px]
          "
        />

        {/* Десктоп-меню */}
        <nav
          className="
            w-[304px] h-[25px] flex justify-between items-center gap-[30px]
            max-[1440px]:w-[300px]
            max-[1280px]:w-[280px] max-[1280px]:gap-[24px]
            max-[1024px]:w-[250px] max-[1024px]:gap-[20px]
            max-[840px]:hidden
          "
          aria-label="Primary"
        >
          {Menu.map((m, i) => (
            <div key={i} className="relative group w-[75px] h-[22px] max-[1440px]:w-auto">
              <a
                href={m.href}
                onClick={(e) => onNavClick(e, m.href)}
                className="
                  block font-semibold text-[16px] text-[#9E9E9E]
                  transition-colors duration-300 ease-in-out group-hover:text-white
                  max-[1440px]:text-[15px]
                  max-[1280px]:text-[14px]
                  max-[1024px]:text-[13px]
                  whitespace-nowrap
                "
              >
                {m.text}
              </a>
              <span
                className="
                  pointer-events-none absolute left-0 -bottom-[2px] h-[2px] w-0 bg-white
                  transition-all duration-300 ease-in-out group-hover:w-full
                  max-[1024px]:-bottom-[1px] max-[1024px]:h-[1px]
                "
              />
            </div>
          ))}
        </nav>

        {/* CTA (скрыт на мобилке) */}
        <div
          className="
            w-[113px] h-[40px] flex justify-center items-center rounded-[8px] bg-[#FFFFFF]
            max-[1440px]:w-[110px] max-[1440px]:h-[38px]
            max-[1024px]:w-[104px] max-[1024px]:h-[34px]
            max-[640px]:w-[100px] max-[640px]:h-[32px]
            max-[840px]:hidden
          "
        >
          <a
            href="#"
            className="
              font-semibold text-[14px] text-[#000000]
              max-[1440px]:text-[13px]
              max-[1024px]:text-[12px]
            "
          >
            Join Now
          </a>
        </div>

        {/* Бургер (только <840px) */}
        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="
            hidden max-[840px]:flex relative items-center justify-center
            w-[40px] h-[40px] rounded-[8px] bg-white/90
            transition-colors
          "
        >
          {/* Анимированные линии */}
          <span
            className={`
              absolute block h-[2px] w-6 bg-[#111] transition-transform duration-300 ease-in-out
              ${open ? "rotate-45 translate-y-0" : "-translate-y-[6px]"}
            `}
          />
          <span
            className={`
              absolute block h-[2px] w-6 bg-[#111] transition-opacity duration-200 ease-in-out
              ${open ? "opacity-0" : "opacity-100"}
            `}
          />
          <span
            className={`
              absolute block h-[2px] w-6 bg-[#111] transition-transform duration-300 ease-in-out
              ${open ? "-rotate-45 translate-y-0" : "translate-y-[6px]"}
            `}
          />
        </button>
      </div>

      {/* Контент */}
      <div
        className="
          w-full max-w-[512px] h-[396.56px] flex flex-col gap-[64px] mt-auto ml-[60px] mb-[226.44px]
          max-[1440px]:ml-[40px] max-[1440px]:mb-[140px] max-[1440px]:gap-[48px]
          max-[1280px]:ml-[32px] max-[1280px]:mb-[120px]
          max-[1024px]:ml-[24px] max-[1024px]:mb-[64px] max-[1024px]:gap-[32px] max-[1024px]:h-auto
          max-[840px]:w-[82%] max-[840px]:ml-[20px] max-[840px]:mb-[56px]
          max-[640px]:w-[88%] max-[640px]:ml-[18px] max-[640px]:mb-[48px]
          max-[480px]:w-[92%] max-[480px]:ml-[16px] max-[480px]:mb-[40px] max-[480px]:gap-[24px]
        "
      >
        <div
          className="
            w-full h-[238px] flex flex-col justify-between items-start
            max-[1440px]:h-auto max-[1440px]:gap-[16px]
          "
        >
          <h1
            className="
              font-bold text-[#E0E0E0] text-[72px] leading-[110%] tracking-[0%]
              max-[1440px]:text-[64px]
              max-[1280px]:text-[56px]
              max-[1024px]:text-[40px]
              max-[840px]:text-[36px]
              max-[640px]:text-[32px]
              max-[480px]:text-[28px]
            "
          >
            Elevate your workout
          </h1>

          <p
            className="
              text-[#BDBDBD] text-[20px] tracking-[0.2%] font-normal leading-[140%]
              max-[1440px]:text-[18px]
              max-[1280px]:text-[17px]
              max-[1024px]:text-[15px]
              max-[840px]:text-[14px]
              max-[640px]:text-[14px]
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>
        </div>

        <div
          className="
            w-[131px] h-[94.56px] flex flex-col gap-[32px] justify-between items-center
            max-[1440px]:w-[140px] max-[1440px]:gap-[24px]
            max-[1024px]:w-[150px] max-[1024px]:gap-[20px]
            max-[640px]:w-[160px]
          "
        >
          <a
            href="#"
            className="
              rounded-[8px] w-full h-[44px] font-semibold text-[14px] flex justify-center items-center
              bg-[#FFFFFF] text-[#212121] tracking-[0.2px] leading-[140%]
              max-[1440px]:h-[42px]
              max-[1280px]:h-[40px]
              max-[1024px]:h-[38px] max-[1024px]:text-[13px]
              max-[640px]:text-[14px] max-[640px]:h-[42px]
            "
          >
            Get Started
          </a>

          <div
            className="
              w-[103.69px] h-[18.56px] flex items-center justify-between gap-[24px]
              max-[1440px]:w-[120px]
              max-[1280px]:w-[132px]
              max-[1024px]:w-[140px]
              max-[640px]:w-[160px]
              max-[480px]:w-full max-[480px]:justify-start max-[480px]:gap-[20px]
            "
          >
            <img src="/Icons/Twitter.svg" alt="Twitter" className="w-[18.56px] h-[18.56px] max-[1440px]:w-[18px] max-[1440px]:h-[18px] max-[1024px]:w-[20px] max-[1024px]:h-[20px] max-[640px]:w-[22px] max-[640px]:h-[22px]" />
            <img src="/Icons/Facebook.svg" alt="Facebook" className="w-[18.56px] h-[18.56px] max-[1440px]:w-[18px] max-[1440px]:h-[18px] max-[1024px]:w-[20px] max-[1024px]:h-[20px] max-[640px]:w-[22px] max-[640px]:h-[22px]" />
            <img src="/Icons/Instagram.svg" alt="Instagram" className="w-[18.56px] h-[18.56px] max-[1440px]:w-[18px] max-[1440px]:h-[18px] max-[1024px]:w-[20px] max-[1024px]:h-[20px] max-[640px]:w-[22px] max-[640px]:h-[22px]" />
          </div>
        </div>
      </div>

      {/* ====== MOBILE MENU (drawer) ====== */}
      {/* Подложка */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />
      {/* Панель */}
      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`
          fixed right-0 top-0 z-50 h-full w-[78%] max-w-[340px]
          bg-white text-[#111] shadow-2xl
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
          max-[840px]:block
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-black/10">
          <img src="/Main/MainLogo.svg" alt="Logo" className="w-[74px] h-[32px]" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="w-9 h-9 rounded-[8px] bg-black/5 flex items-center justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="#111" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="px-5 py-4">
          <ul className="flex flex-col gap-2">
            {Menu.map((m, i) => (
              <li key={i}>
                <a
                  href={m.href}
                  onClick={(e) => onNavClick(e, m.href)}
                  className="
                    block px-3 py-3 rounded-[10px]
                    text-[16px] font-semibold text-[#212121]
                    hover:bg-black/5 transition
                  "
                >
                  {m.text}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA в мобильном меню */}
          <div className="mt-6">
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="
                w-full inline-flex items-center justify-center
                h-[44px] rounded-[10px] bg-[#111] text-white font-semibold text-[14px]
                hover:opacity-90 transition
              "
            >
              Join Now
            </a>
          </div>

          {/* Соцсети */}
          <div className="mt-6 flex items-center gap-4">
            <img src="/Icons/Twitter.svg" alt="Twitter" className="w-6 h-6" />
            <img src="/Icons/Facebook.svg" alt="Facebook" className="w-6 h-6" />
            <img src="/Icons/Instagram.svg" alt="Instagram" className="w-6 h-6" />
          </div>
        </nav>
      </aside>
      {/* ====== /MOBILE MENU ====== */}
    </div>
  );
}
