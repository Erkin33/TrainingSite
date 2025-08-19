"use client";
import { useState } from "react";

export default function PricingPlan() {
  // исходные планы (месячные цены)
  const planMonthly = [
    {
      Name: "Beginner Plan",
      Cost: "10$",
      Period: "Month",
      Info:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      text: [
        { info: "Lorem ipsum dolor sit amet" },
        { info: "Lorem ipsum dolor sit amet" },
        { info: "Lorem ipsum dolor sit amet" },
        { info: "Lorem ipsum dolor sit amet" },
      ],
    },
    {
      Name: "Premium Plan",
      Cost: "15$",
      Period: "Month",
      Info:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      text: [
        { info: "Lorem ipsum dolor sit amet" },
        { info: "Lorem ipsum dolor sit amet" },
        { info: "Lorem ipsum dolor sit amet" },
        { info: "Lorem ipsum dolor sit amet" },
        { info: "Lorem ipsum dolor sit amet" },
      ],
    },
    {
      Name: "King Plan",
      Cost: "20$",
      Period: "Month",
      Info:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      text: [
        { info: "Lorem ipsum dolor sit amet" },
        { info: "Lorem ipsum dolor sit amet" },
        { info: "Lorem ipsum dolor sit amet" },
        { info: "Lorem ipsum dolor sit amet" },
        { info: "Lorem ipsum dolor sit amet" },
      ],
    },
  ];

  // период (месяц/год)
  const [period, setPeriod] = useState("Month");

  // мягкая анимация переключения (фейд)
  const [isSwitching, setIsSwitching] = useState(false);
  const fadeStyle = {
    transition: "opacity 300ms ease",
    opacity: isSwitching ? 0 : 1,
  };

  // аккуратное переключение по клику
  const switchTo = (target) => {
    if (period === target) return;
    setIsSwitching(true);
    setTimeout(() => {
      setPeriod(target);
      setIsSwitching(false);
    }, 150);
  };

  // вычисление цены (год = 12 * месячная)
  const getDisplayCost = (monthlyCostStr) => {
    const n = parseFloat(monthlyCostStr.replace("$", ""));
    if (Number.isNaN(n)) return monthlyCostStr;
    const value = period === "Month" ? n : n * 12;
    // без десятичных, как в макете
    return `${Math.round(value)}$`;
  };

  return (
    <div id="Services"
      className="
        w-full h-[850px] flex justify-center items-center
        max-[1440px]:h-auto max-[1440px]:py-[80px]
        max-[1024px]:py-[60px]
        max-[640px]:py-[40px]
      "
    >
      <div
        className="
          w-[1430px] h-[697px] gap-y-[80px] flex flex-col justify-between
          max-[1440px]:w-[92%] max-[1440px]:h-auto max-[1440px]:gap-y-[60px]
          max-[1024px]:gap-y-[48px]
          max-[640px]:gap-y-[36px]
        "
      >
        {/* Text + Toggle */}
        <div
          className="
            w-full h-[103px] flex justify-between items-center
            max-[1440px]:h-auto max-[1440px]:flex-wrap max-[1440px]:gap-y-[20px]
          "
        >
          <div
            className="
              w-[387px] h-full flex flex-col gap-y-[16px] items-start
              max-[1440px]:w-auto
            "
          >
            <p
              className="
                text-[#9E9E9E] tracking-[0.2px] leading-[140%] text-[24px] font-normal
                max-[1440px]:text-[20px]
                max-[1024px]:text-[18px]
              "
            >
              Pricing Plan
            </p>
            <h3
              className="
                w-full text-[#424242] leading-[110%] text-[48px] font-bold uppercase
                max-[1440px]:text-[42px]
                max-[1280px]:text-[36px]
                max-[1024px]:text-[32px]
                max-[640px]:text-[28px]
              "
            >
              Join Today
            </h3>
          </div>

          {/* Тоггл */}
          <div
            className="
              w-[202px] h-[57px] flex justify-between items-center px-[10px] py-[10px] gap-[4px]
              bg-white border border-[#EEEEEE] shadow-[0px_8px_24px_rgba(58,53,65,0.2)] rounded-[16px] box-border
              max-[1440px]:w-[202px] max-[1440px]:h-[54px]
              max-[1024px]:order-3 max-[1024px]:mt-[10px]
            "
            role="tablist"
            aria-label="Billing period"
          >
            <button
              type="button"
              onClick={() => switchTo("Month")}
              aria-pressed={period === "Month"}
              className={`w-[85px] h-[37px] flex justify-center rounded-[12px] items-center 
                text-[17px] font-semibold tracking-[0%] leading-[21px] transition-colors duration-300
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#212121] focus-visible:ring-offset-2
                ${
                  period === "Month"
                    ? "bg-[#212121] text-[#FFFFFF]"
                    : "bg-[#FFFFFF] text-[#424242]"
                }`}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => switchTo("Year")}
              aria-pressed={period === "Year"}
              className={`w-[85px] h-[37px] flex justify-center rounded-[12px] items-center 
                text-[17px] font-semibold tracking-[0%] leading-[21px] transition-colors duration-300
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#212121] focus-visible:ring-offset-2
                ${
                  period === "Year"
                    ? "bg-[#212121] text-[#FFFFFF]"
                    : "bg-[#FFFFFF] text-[#424242]"
                }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Plans */}
        <div
          id="Plans"
          style={fadeStyle}
          className="
            w-[1332px] mx-auto
            grid grid-cols-3 gap-[48px]
            max-[1440px]:w-full
            max-[1200px]:grid-cols-2 max-[1200px]:gap-[32px]
            max-[900px]:grid-cols-1 max-[900px]:gap-[24px]
          "
        >
          {planMonthly.map((planList, index) => {
            const isHighlight = index === 1; // средняя — тёмная всегда

            const cardClass = [
              "group w-full",
              "px-[20px] pt-[28px] pb-[20px]",
              "flex flex-col justify-between rounded-[16px] shadow-xl",
              "transition-all duration-300",
              isHighlight
                ? "bg-[#212121] text-white"
                : "bg-white hover:bg-[#212121]",
              // отступы внутри карточки: большой промежуток между блоками
              "gap-y-[80px] max-[1440px]:gap-y-[64px] max-[640px]:gap-y-[48px]",
              // интеракции (клава + hover)
              "focus-within:ring-2 focus-within:ring-[#212121] focus-within:ring-offset-2",
            ].join(" ");

            const titleClass = [
              "tracking-[0.2px] leading-[140%] text-[16px] font-medium transition-colors duration-300",
              isHighlight ? "text-white" : "text-[#757575] group-hover:text-white",
              "max-[1440px]:text-[15px]",
              "max-[1024px]:text-[14px]",
            ].join(" ");

            const priceClass = [
              "opacity-90 leading-[110%] text-[40px] font-bold transition-colors duration-300",
              isHighlight ? "text-white" : "text-[#424242] group-hover:text-white",
              "max-[1440px]:text-[36px]",
              "max-[1024px]:text-[32px]",
              "max-[640px]:text-[28px]",
            ].join(" ");

            const periodClass = [
              "opacity-90 tracking-[0.2px] leading-[140%] text-[18px] font-semibold mt-auto transition-colors duration-300",
              isHighlight ? "text-white" : "text-[#424242] group-hover:text-white",
              "max-[1440px]:text-[16px]",
              "max-[1024px]:text-[15px]",
              "max-[640px]:text-[14px]",
            ].join(" ");

            const infoClass = [
              "tracking-[0.2px] leading-[140%] text-[14px] font-normal transition-colors duration-300",
              isHighlight ? "text-white/80" : "text-[#9E9E9E] group-hover:text-white/80",
              "max-[1024px]:text-[13px]",
            ].join(" ");

            const listItemClass = [
              "tracking-[0.2px] leading-[140%] text-[14px] font-normal flex items-center gap-x-2 transition-colors duration-300",
              isHighlight ? "text-white" : "text-[#757575] group-hover:text-white",
              "max-[1024px]:text-[13px]",
            ].join(" ");

            const btnClass = [
              "w-full h-[60px] py-[17px] gap-x-[10px] flex justify-center items-center rounded-[15px]",
              "text-[20px] font-bold transition-all duration-300",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white",
              isHighlight
                ? "bg-white text-[#212121]"
                : "bg-[#212121] text-white group-hover:bg-white group-hover:text-[#212121]",
              "max-[1440px]:h-[56px] max-[1440px]:text-[18px]",
              "max-[640px]:h-[52px] max-[640px]:text-[17px]",
            ].join(" ");

            return (
              <div key={index} className={cardClass}>
                {/* top */}
                <div
                  className="
                    w-full gap-y-[24px] flex flex-col
                  "
                >
                  <div
                    className="
                      w-full gap-y-[12px] flex flex-col items-start
                    "
                  >
                    <div className="w-full max-w-[240px] flex flex-col gap-y-[8px]">
                      <p className={titleClass}>{planList.Name}</p>

                      <div className="w-full h-[44px] gap-x-[6px] flex mt-[8px] items-end">
                        <h4 className={priceClass}>{getDisplayCost(planList.Cost)}</h4>
                        <div className="h-[33px] gap-x-[10px] py-[4px] flex">
                          <p className={periodClass}>/ {period}</p>
                        </div>
                      </div>
                    </div>

                    <p className={infoClass}>{planList.Info}</p>
                  </div>

                  {/* List */}
                  <div className="w-full max-w-[280px] gap-y-[12px] flex flex-col items-start">
                    {planList.text.map((item, idx) => (
                      <p key={idx} className={listItemClass}>
                        {/* иконки: тёмная по умолчанию, белая при hover; у средней всегда белая */}
                        {!isHighlight && (
                          <>
                            <img
                              src="/Icons/DarkTick.svg"
                              alt=""
                              className="w-[20px] h-[20px] inline group-hover:hidden"
                            />
                            <img
                              src="/Icons/LightTick.svg"
                              alt=""
                              className="w-[20px] h-[20px] hidden group-hover:inline"
                            />
                          </>
                        )}
                        {isHighlight && (
                          <img
                            src="/Icons/LightTick.svg"
                            alt=""
                            className="w-[20px] h-[20px]"
                          />
                        )}
                        {item.info}
                      </p>
                    ))}
                  </div>
                </div>

                {/* bottom */}
                <a
                  href="#"
                  className={btnClass}
                >
                  Choose Plan
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
