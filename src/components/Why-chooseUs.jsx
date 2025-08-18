export default function WhyUs() {
  const chosen = [
    { img: "/Icons/Icon-1.svg", head: "Lorem Ipsum amid", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" },
    { img: "/Icons/Icon-2.svg", head: "Lorem Ipsum amid", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" },
    { img: "/Icons/Icon-3.svg", head: "Lorem Ipsum amid", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" },
    { img: "/Icons/Icon-4.svg", head: "Lorem Ipsum amid", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" },
  ];

  return (
    <section
      aria-labelledby="why-title"
      className="
        w-full h-[850px] bg-[#FFFFFF] flex justify-center items-center
        max-[1440px]:h-auto max-[1440px]:py-[80px]
        max-[1024px]:py-[60px]
        max-[640px]:py-[40px]
      "
    >
      <div
        className="
          w-[1386.05px] max-w-[1386.05px] h-[607px] gap-[60px]
          flex flex-col justify-between items-center
          max-[1440px]:w-[92%] max-[1440px]:h-auto max-[1440px]:gap-[40px]
        "
      >
        {/* Заголовок */}
        <div
          className="
            w-[704px] max-w-[704px] h-[137px] items-center mx-auto mb-[60px]
            flex flex-col gap-[16px]
            max-[1440px]:w-[80%] max-[1440px]:mb-[40px]
            max-[1024px]:w-[90%]
            max-[640px]:w-full max-[640px]:gap-[12px] max-[640px]:mb-[28px]
          "
        >
          <h2
            id="why-title"
            className="
              text-[#424242] leading-[110%] text-[48px] font-bold text-center
              max-[1440px]:text-[42px] max-[1280px]:text-[36px]
              max-[1024px]:text-[32px] max-[640px]:text-[28px]
            "
          >
            Why Choose Us
          </h2>
          <p
            className="
              text-[#9E9E9E] tracking-[0.2px] leading-[140%] text-[24px] font-normal text-center
              max-[1440px]:text-[20px] max-[1280px]:text-[18px]
              max-[1024px]:text-[16px] max-[640px]:text-[14px]
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </p>
        </div>

        {/* Контент */}
        <div
          className="
            w-full h-[410px] gap-x-[48px] flex justify-between items-center
            max-[1440px]:h-auto max-[1440px]:gap-x-[32px]
            max-[1024px]:flex-col max-[1024px]:gap-y-[40px]
          "
        >
          {/* Текстовые пункты */}
          <div
            className="
              w-[764px] max-w-[764px] h-[302px] gap-x-[60px] gap-y-[60px]
              flex flex-wrap
              max-[1440px]:w-[60%] max-[1440px]:gap-x-[40px] max-[1440px]:gap-y-[40px]
              max-[1024px]:w-full max-[1024px]:justify-center max-[1024px]:order-1 max-[1024px]:h-auto
              max-[640px]:gap-y-[24px]
            "
          >
            {chosen.map((choose, index) => (
              <div
                key={index}
                className="
                  w-[333px] h-[121px] gap-[24px] flex justify-between items-start
                  max-[1440px]:w-[45%] max-[1440px]:h-auto
                  max-[1024px]:w-[48%]
                  max-[640px]:w-full max-[640px]:gap-[16px]
                "
              >
                <img
                  src={choose.img}
                  alt=""
                  width={40}
                  height={40}
                  loading="lazy"
                  className="shrink-0 max-[640px]:w-[32px] max-[640px]:h-[32px]"
                />
                <div className="w-[269px] h-full flex flex-col justify-between items-start max-[640px]:w-full">
                  <h4
                    className="
                      font-medium text-[24px] leading-[140%] tracking-[0.2px] text-[#424242] opacity-90
                      max-[1440px]:text-[22px] max-[1024px]:text-[20px] max-[640px]:text-[18px]
                    "
                  >
                    {choose.head}
                  </h4>
                  <p
                    className="
                      text-[#9E9E9E] leading-[140%] text-[18px] font-normal
                      max-[1440px]:text-[16px] max-[1024px]:text-[15px] max-[640px]:text-[14px]
                    "
                  >
                    {choose.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Картинки */}
          <div
            className="
              w-[574.05px] h-[410px] flex gap-[25.05px]
              max-[1220px]:gap-[0px]
              max-[1440px]:w-[40%]
              max-[1280px]:h-[380px]
              max-[1024px]:w-full max-[1024px]:h-auto max-[1024px]:order-2 max-[1024px]:flex-col max-[1024px]:gap-[20px]
            "
          >
            {/* Левая колонна (2 фото) — выше на планшете + скругление 16px ниже 1024px */}
            <div
              className="
                w-[264.52px] h-full flex flex-col gap-[25.05px] opacity-90
                max-[1024px]:w-full
              "
            >
              <img
                src="/Images/topImage.svg"
                alt="Top training moment"
                loading="lazy"
                className="
                  w-full rounded-[16px] object-cover object-center
                  h-[192.48px]
                  max-[1280px]:h-[220px]
                  max-[1024px]:h-[360px] max-[1024px]:rounded-[16px]
                  max-[840px]:h-[320px]
                  max-[640px]:h-[260px]
                "
              />
              <img
                src="/Images/bottonImage.svg"
                alt="Community snapshot"
                loading="lazy"
                className="
                  w-full rounded-[16px] object-cover object-center
                  h-[192.48px]
                  max-[1280px]:h-[220px]
                  max-[1024px]:h-[360px] max-[1024px]:rounded-[16px]
                  max-[840px]:h-[320px]
                  max-[640px]:h-[260px]
                "
              />
            </div>

            {/* Правая высокая — тоже 16px ниже 1024px */}
            <img
              src="/Images/high-poster.svg"
              alt="Facility highlight"
              loading="lazy"
              className="
                w-[284.49px] h-full rounded-[16px] object-cover object-center
                max-[1280px]:h-[380px]
                max-[1024px]:w-full max-[1024px]:h-[360px] max-[1024px]:rounded-[16px]
                max-[840px]:h-[320px]
                max-[640px]:h-[240px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
