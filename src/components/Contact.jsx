export default function ContactUs() {
  return (
    <section
      aria-labelledby="contactus-title"
      className="relative w-full"
    >
      <div
        className="
          relative w-full h-[425px] flex justify-center items-center
          bg-[url('/Main/Footer-Bg.svg')] bg-cover bg-center
          max-[1024px]:h-[350px]
          max-[768px]:h-[300px]
          max-[480px]:h-[260px]
        "
      >
        {/* мягкий затемняющий слой для лучшей читабельности на мобилках */}
        <div
          aria-hidden="true"
          className="
            absolute inset-0 bg-black/0
            max-[1024px]:bg-black/10
            max-[768px]:bg-black/15
            max-[480px]:bg-black/20
          "
        />

        {/* контент */}
        <div className="relative z-10 px-4">
          <div
            className="
              w-[294px] h-[99px] flex flex-col justify-between items-center gap-y-[30px]
              max-[1024px]:w-[260px]
              max-[768px]:w-[220px]
              max-[480px]:w-[200px] max-[480px]:gap-y-[20px]
              text-center
            "
          >
            <p
              id="contactus-title"
              className="
                font-medium text-[24px] leading-[140%] tracking-[0.2px] text-white
                max-[1024px]:text-[22px]
                max-[768px]:text-[20px]
                max-[480px]:text-[18px]
              "
            >
              Call Us Now
            </p>

            {/* кликабельный номер */}
            <a
              href="#"
              className="
                text-white leading-[110%] text-[32px] font-bold
                max-[1024px]:text-[28px]
                max-[768px]:text-[24px]
                max-[480px]:text-[20px]
                underline-offset-4 hover:underline focus-visible:underline
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded
              "
              aria-label="Call us now at +91 82000-60000"
            >
              +91 82000-60000
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
