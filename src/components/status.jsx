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
        /* <=1440px */
        max-[1440px]:px-[120px] max-[1440px]:h-[140px]
        /* <=1280px */
        max-[1280px]:px-[80px] max-[1280px]:h-[130px]
        /* <=1024px */
        max-[1024px]:px-[40px] max-[1024px]:h-auto max-[1024px]:py-[32px]
        max-[1024px]:grid-cols-2 max-[1024px]:gap-y-[32px]
        /* <=640px */
        max-[640px]:px-[20px] max-[640px]:py-[28px]
        max-[640px]:grid-cols-1 max-[640px]:gap-y-[20px]
      "
    >
      {stats.map((item, i) => (
        <div
          key={i}
          className="
            h-[59px] flex flex-col items-center text-center
          "
        >
          <h3
            className="
              text-[#EEEEEE] leading-[110%] text-[32px] font-bold
              max-[1440px]:text-[28px]
              max-[1280px]:text-[26px]
              max-[1024px]:text-[24px]
              max-[640px]:text-[22px]
            "
          >
            {item.number}
          </h3>
          <p
            className="
              text-[#EEEEEE] tracking-[0.2px] leading-[140%] text-[14px] font-medium
              max-[1280px]:text-[13px]
              max-[1024px]:text-[12px]
              max-[640px]:text-[12px]
            "
          >
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
