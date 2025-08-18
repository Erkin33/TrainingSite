export default function Coaches() {
  return (
    <div
      className="
        w-full h-[510px] flex justify-center items-center px-[80px] py-[80px]
        max-[1440px]:h-auto max-[1440px]:py-[60px]
        max-[1024px]:px-[40px]
        max-[640px]:px-[20px] max-[640px]:py-[40px]
      "
    >
      <div
        className="
          w-[1386.05px] h-[350px] mx-auto my-auto flex gap-x-[80px]
          max-[1440px]:w-[92%] max-[1440px]:h-auto max-[1440px]:gap-x-[60px]
          max-[1280px]:flex-col max-[1280px]:gap-y-[50px] max-[1280px]:items-center
        "
      >
        {/* images */}
        <div
          className="
            w-[570px] h-full flex items-center justify-center rounded-[20px]
            max-[1440px]:w-[50%]
            max-[1280px]:w-full max-[1280px]:justify-center
            /* мобилки: колонка + одинаковая ширина */
            max-[640px]:flex-col max-[640px]:items-center max-[640px]:gap-6
            overflow-hidden
          "
        >
          <img
            src="/Images/Woman.svg"
            alt="Woman coach"
            loading="lazy"
            className="
              shrink-0 object-contain
              w-[200px] h-auto
              max-[1440px]:w-[180px]
              max-[1024px]:w-[200px]
              /* одинаковая ширина на мобиле */
              max-[640px]:w-full max-[640px]:max-w-[300px] max-[640px]:mx-auto
              max-[480px]:max-w-[260px]
            "
          />
          <img
            src="/Images/Man.svg"
            alt="Man coach"
            loading="lazy"
            className="
              shrink-0 object-contain
              w-[350px] h-auto
              max-[1440px]:w-[320px]
              max-[1024px]:w-[300px]
              /* одинаковая ширина на мобиле */
              max-[640px]:w-full max-[640px]:max-w-[300px] max-[640px]:mx-auto
              max-[480px]:max-w-[260px]
            "
          />
        </div>

        {/* text */}
        <div
          className="
            w-[602px] h-[331px] gap-y-[48px] flex flex-col
            max-[1440px]:w-[50%] max-[1440px]:gap-y-[36px]
            max-[1280px]:w-full max-[1280px]:h-auto max-[1280px]:items-center max-[1280px]:text-center
          "
        >
          <div
            className="
              w-full h-[239px] gap-y-[24px] flex flex-col justify-between items-start
              max-[1440px]:gap-y-[20px] max-[1440px]:h-auto
              max-[1280px]:items-center max-[1280px]:text-center
            "
          >
            {/* head */}
            <div
              className="
                w-[331px] h-[103px] gap-y-[16px] flex flex-col items-start justify-between
                max-[1440px]:w-full max-[1440px]:h-auto
                max-[1280px]:items-center max-[1280px]:text-center
              "
            >
              <span
                className="
                  text-[#9E9E9E] tracking-[0.2px] leading-[140%] text-[24px] font-normal
                  max-[1440px]:text-[20px]
                  max-[1024px]:text-[18px]
                  max-[640px]:text-[16px]
                "
              >
                Are you looking for a Mentor?
              </span>
              <h3
                className="
                  text-[#424242] tracking-[0%] leading-[110%] text-[48px] font-bold
                  max-[1440px]:text-[42px]
                  max-[1280px]:text-[36px]
                  max-[1024px]:text-[32px]
                  max-[640px]:text-[28px]
                "
              >
                Coaches
              </h3>
            </div>

            <p
              className="
                text-[#9E9E9E] tracking-[0.2px] leading-[140%] text-[20px] font-normal
                max-[1440px]:text-[18px]
                max-[1280px]:text-[17px]
                max-[1024px]:text-[16px]
                max-[640px]:text-[14px]
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem
              ipsum dolor sit ...
            </p>
          </div>

          <a
            href="#"
            className="
              text-[#FFFFFF] tracking-[0.2px] leading-[140%]
              w-[143px] h-[44px] gap-x-[10px] flex justify-center items-center
              rounded-[8px] bg-[#212121] text-[14px] font-semibold
              max-[1440px]:w-[140px] max-[1440px]:h-[42px]
              max-[1024px]:w-[136px] max-[1024px]:h-[40px] max-[1024px]:text-[13px]
              max-[640px]:w-full max-[640px]:h-[44px]
            "
          >
            Explore More
          </a>
        </div>
      </div>
    </div>
  );
}
