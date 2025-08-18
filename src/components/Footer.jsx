export default function Footer() {
  const menu = [
    {
      Name: "Quick Links",
      items: [{ link: "Home" }, { link: "About Us" }, { link: "Services" }, { link: "Contact" }],
    },
    {
      Name: "Quick Links",
      items: [{ link: "Home" }, { link: "About Us" }, { link: "Services" }, { link: "Contact" }],
    },
    {
      Name: "Quick Links",
      items: [{ link: "Home" }, { link: "About Us" }, { link: "Services" }, { link: "Contact" }],
    },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-white">
      {/* Верхняя часть */}
      <div
        className="
          w-full h-[425px] flex justify-center items-center
          max-[1024px]:h-auto max-[1024px]:py-[40px]
          max-[768px]:py-[30px]
        "
      >
        <div
          className="
            w-[1346px] max-w-[92%] mx-auto
            grid grid-cols-[minmax(280px,333px)_repeat(3,minmax(100px,180px))]
            justify-between items-start gap-x-[48px] gap-y-[40px]
            max-[1024px]:grid-cols-2 max-[1024px]:gap-x-[32px]
            max-[768px]:grid-cols-1 max-[768px]:text-center
          "
        >
          {/* Brand + About */}
          <div className="flex flex-col gap-y-[24px] items-start max-[768px]:items-center">
            <img
              src="/Main/LogoDark.svg"
              alt="Logo"
              className="w-[100px] h-[51.85px]"
              loading="lazy"
            />
            <p className="opacity-80 text-[#212121] tracking-[0.2px] leading-[140%] text-[18px] font-normal max-[768px]:text-[16px] max-[480px]:text-[14px]">
              Recusandae quos nesciunt veniam eum quia
            </p>
            <a
              href="mailto:shaikhsaad256@gmail.com"
              className="
                opacity-80 text-[#212121] tracking-[0.2px] leading-[140%] text-[16px] font-normal
                hover:opacity-100 transition-opacity
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#212121] focus-visible:ring-offset-2 rounded
                max-[480px]:text-[14px]
              "
            >
              shaikhsaad256@gmail.com
            </a>

            {/* Social */}
            <div className="flex items-center gap-x-[27px] opacity-80 max-[768px]:justify-center">
              <a href="#" aria-label="Facebook" className="w-[24px] h-[24px] flex items-center justify-center hover:opacity-100 transition-opacity">
                <img src="/Icons/FacebookDark.svg" alt="" className="w-full h-full object-contain" />
              </a>
              <a href="#" aria-label="Twitter" className="w-[24px] h-[24px] flex items-center justify-center hover:opacity-100 transition-opacity">
                <img src="/Icons/TwitterDark.svg" alt="" className="w-full h-full object-contain" />
              </a>
              <a href="#" aria-label="Instagram" className="w-[24px] h-[24px] flex items-center justify-center hover:opacity-100 transition-opacity">
                <img src="/Icons/DarkInstagram.svg" alt="" className="w-full h-full object-contain" />
              </a>
            </div>
          </div>

          {/* Menus */}
          {menu.map((menuItem, index) => (
            <nav
              key={index}
              aria-label={menuItem.Name}
              className="flex flex-col gap-y-[16px] items-start max-[768px]:items-center"
            >
              <h3 className="text-[#212121] font-semibold text-[16px]">{menuItem.Name}</h3>
              <ul className="flex flex-col gap-y-[12px] opacity-60">
                {menuItem.items.map((links, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="
                        hover:text-[#000000] transition-colors
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#212121] focus-visible:ring-offset-2 rounded
                      "
                    >
                      {links.link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Нижняя плашка */}
      <div className="w-full border-t border-[#EEEEEE]">
        <div className="w-[1346px] max-w-[92%] mx-auto py-4 text-center text-[14px] text-[#757575]">
          © {year} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
