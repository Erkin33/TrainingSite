export default function OurTrainers() {
  return (
    <div
      className="
        w-full h-[997px] bg-[#FFFFFF] flex justify-center items-center gap-y-[10px] px-[244px] py-[100px]
        max-[1500px]:h-auto max-[1500px]:px-[160px] max-[1440px]:py-[80px]
        max-[1280px]:px-[100px] max-[1024px]:px-[40px]
        max-[640px]:px-[20px] max-[640px]:py-[60px]
      "
    >
      <div
        className="
          w-[1062px] h-[797px] gap-y-[60px] flex flex-col justify-between items-center
          max-[1440px]:w-[92%] max-[1440px]:h-auto max-[1440px]:gap-y-[40px]
        "
      >
        {/* Text */}
        <div
          className="
            w-[648px] h-[137px] items-center mx-auto mb-[60px] flex flex-col gap-[16px]
            max-[1440px]:w-[80%] max-[1440px]:mb-[40px]
            max-[1024px]:w-[90%] max-[640px]:w-full max-[640px]:gap-[12px] max-[640px]:mb-[28px]
          "
        >
          <h2
            className="
              text-[#424242] leading-[110%] text-[48px] font-bold text-center
              max-[1440px]:text-[42px]
              max-[1280px]:text-[36px]
              max-[1024px]:text-[32px]
              max-[640px]:text-[28px]
            "
          >
            Meet Our Trainers
          </h2>
          <p
            className="
              text-[#9E9E9E] tracking-[0.2px] leading-[140%] text-[24px] font-normal text-center
              max-[1440px]:text-[20px]
              max-[1280px]:text-[18px]
              max-[1024px]:text-[16px]
              max-[640px]:text-[14px]
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et
          </p>
        </div>

        {/* Images */}
        <div className="w-full">
          {/* ===== DESKTOP / >1024px: оригинальный коллаж ===== */}
          <div
            className="
              flex flex-col gap-y-[24px]
              max-[1440px]:h-auto
              max-[1024px]:hidden
            "
          >
            {/* top */}
            <div
              className="
                w-full h-[288px] flex justify-between overflow-hidden
                max-[1440px]:h-[240px]
              "
            >
              <img
                src="/Coaches/Trainer1.svg"
                alt=""
                loading="lazy"
                className="
                  w-[220px] h-full rounded-[12px] object-cover object-center
                  max-[1440px]:w-[200px]
                  max-[1280px]:w-[180px]
                "
              />
              <img
                src="/Coaches/Trainer2.svg"
                alt=""
                loading="lazy"
                className="
                  w-[574px] h-full rounded-[12px] object-cover object-center
                  max-[1440px]:w-[420px]
                  max-[1280px]:w-[360px]
                "
              />
              <img
                src="/Coaches/Trainer3.svg"
                alt=""
                loading="lazy"
                className="
                  w-[220px] h-full rounded-[12px] object-cover object-center
                  max-[1440px]:w-[200px]
                  max-[1280px]:w-[180px]
                "
              />
            </div>

            {/* bottom */}
            <div
              className="
                w-full h-[288px] flex justify-between overflow-hidden
                max-[1440px]:h-[240px]
              "
            >
              <img
                src="/Coaches/Coach1.svg"
                alt=""
                loading="lazy"
                className="
                  w-[397px] h-full rounded-[12px] object-cover object-center
                  max-[1440px]:w-[320px]
                  max-[1280px]:w-[280px]
                "
              />
              <img
                src="/Coaches/Coach2.svg"
                alt=""
                loading="lazy"
                className="
                  w-[220px] h-full rounded-[12px] object-cover object-center
                  max-[1440px]:w-[200px]
                  max-[1280px]:w-[180px]
                "
              />
              <img
                src="/Coaches/Coach3.svg"
                alt=""
                loading="lazy"
                className="
                  w-[397px] h-full rounded-[12px] object-cover object-center
                  max-[1440px]:w-[320px]
                  max-[1280px]:w-[280px]
                "
              />
            </div>
          </div>

          {/* ===== TABLET/MOBILE / ≤1024px: всегда 2 в ряд ===== */}
          <div
            className="
              hidden max-[1024px]:grid max-[1024px]:grid-cols-2 max-[1024px]:gap-[16px]
            "
          >
            {[
              "/Coaches/Trainer1.svg",
              "/Coaches/Trainer2.svg",
              "/Coaches/Trainer3.svg",
              "/Coaches/Coach1.svg",
              "/Coaches/Coach2.svg",
              "/Coaches/Coach3.svg",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                loading="lazy"
                className="
                  w-full h-[260px] rounded-[12px] object-cover object-center
                  max-[640px]:h-[220px]
                "
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
