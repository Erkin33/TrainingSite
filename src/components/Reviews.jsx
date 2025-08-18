"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ReviewsSection() {
  const circlePhotos = [
    { src: "/Images/TomRT.svg", alt: "Person 1" },
    { src: "/Images/TianaSh.svg", alt: "Person 2" },
    { src: "/Images/AliesSD.svg", alt: "Person 3" },
    { src: "/Images/TomLD.svg", alt: "Person 4" },
  ];

  const reviews = [
    { name: "Kerry Rohan", rating: 4, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { name: "Jane Cooper", rating: 5, text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { name: "Devon Lane", rating: 4, text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { name: "Eleanor Pena", rating: 5, text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { name: "Guy Hawkins", rating: 4, text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
    { name: "Jacob Jones", rating: 3, text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit." },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [activeIdx, setActiveIdx] = useState(0);

  const updateArrows = (sw) => {
    if (!sw) return;
    setCanPrev(!sw.isBeginning);
    setCanNext(!sw.isEnd);
    setActiveIdx(sw.activeIndex ?? 0);
  };

  const attachNav = (sw) => {
    if (!sw) return;
    if (prevRef.current && nextRef.current) {
      sw.params.navigation.prevEl = prevRef.current;
      sw.params.navigation.nextEl = nextRef.current;
      sw.navigation.init();
      sw.navigation.update();
    }
    updateArrows(sw);
  };

  return (
    <section
      aria-labelledby="reviews-title"
      className="
        w-full h-[749px] flex justify-center items-center overflow-x-hidden
        max-[1440px]:h-auto max-[1440px]:py-12
      "
    >
      <div
        className="
          w-full max-w-[1430px] h-[555px] flex flex-col gap-y-[80px] mx-auto px-4
          max-[1440px]:h-auto max-[1440px]:gap-y-12
        "
      >
        {/* верхний блок */}
        <div
          className="
            w-full h-[103px] flex items-start justify-between
            max-[1024px]:flex-col max-[1024px]:h-auto max-[1024px]:gap-6
          "
        >
          <div
            className="
              w-[377px] h-full flex flex-col gap-y-[16px] items-start
              max-[1024px]:w-full max-[1024px]:items-center
            "
          >
            <p
              className="
                text-[#9E9E9E] font-normal tracking-[0.2px] text-[24px] leading-[140%]
                max-[768px]:text-[20px]
              "
            >
              Reviews
            </p>
            <h2
              id="reviews-title"
              className="
                text-[48px] leading-[110%] font-bold tracking-tight text-[#424242] uppercase
                max-[1024px]:text-[36px] max-[768px]:text-[28px] text-center md:text-left
              "
            >
              YOUR OPINIONS
            </h2>
          </div>

          <button
            type="button"
            className="
              w-[177px] h-[46px] flex justify-center items-center rounded-[8px] bg-[#212121]
              max-[1024px]:w-full max-[1024px]:h-[50px]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#212121] focus-visible:ring-offset-2
            "
          >
            <span className="text-[#FFFFFF] tracking-[0.2px] leading-[140%] text-[16px] font-bold">
              + Your Opinions
            </span>
          </button>
        </div>

        {/* низ: до 1440px — только слайдер; >1440px — аватарки + слайдер */}
        <div
          className="
            w-full h-[372px]
            grid grid-cols-1 min-[1441px]:grid-cols-[435px_1fr] gap-8
            max-[1440px]:h-auto max-[1024px]:gap-6
          "
        >
          {/* аватарки: скрыты на ≤1440px */}
          <div className="relative hidden min-[1441px]:flex justify-center">
            <div className="relative w-[435px] h-[335px] mx-auto">
              <CircleImg className="absolute top-0 left-0 w-[130px] h-[130px]" src={circlePhotos[0]?.src} alt={circlePhotos[0]?.alt}/>
              <CircleImg className="absolute top-0 left-[55%] w-[110px] h-[110px]" src={circlePhotos[1]?.src} alt={circlePhotos[1]?.alt}/>
              <CircleImg className="absolute bottom-0 left-[15%] z-10 w-[200px] h-[200px]" src={circlePhotos[2]?.src} alt={circlePhotos[2]?.alt}/>
              <CircleImg className="absolute bottom-0 right-0 w-[150px] h-[150px]" src={circlePhotos[3]?.src} alt={circlePhotos[3]?.alt}/>
            </div>
          </div>

          {/* слайдер */}
          <div
            className="relative min-w-0 overflow-hidden"
            role="region"
            aria-label="Customer reviews carousel"
            tabIndex={0}
            onKeyDown={(e) => {
              const sw = swiperRef.current;
              if (!sw) return;
              if (e.key === "ArrowLeft") sw.slidePrev();
              if (e.key === "ArrowRight") sw.slideNext();
            }}
          >
            <Swiper
              modules={[Navigation, A11y]}
              // MOBILE-FIRST: 1 слайд = 100% ширины
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: { slidesPerView: "auto", spaceBetween: 14 },
                1024: { slidesPerView: "auto", spaceBetween: 24 },
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              onSwiper={(sw) => {
                swiperRef.current = sw;
                setTimeout(() => attachNav(sw), 0);
              }}
              onSlideChange={(sw) => updateArrows(sw)}
              onReachBeginning={(sw) => updateArrows(sw)}
              onReachEnd={(sw) => updateArrows(sw)}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              className="!pb-12"
            >
              {reviews.map((r, idx) => (
                <SwiperSlide
                  key={idx}
                  className="
                    !w-full sm:!w-[520px] lg:!w-[460px] xl:!w-[483px]
                    !h-[217px]
                  "
                >
                  <ReviewCard
                    name={r.name}
                    rating={r.rating}
                    text={r.text}
                    dim={idx !== activeIdx}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* стрелки */}
            <div className="mt-3 flex items-center gap-4 justify-center min-[1441px]:justify-start">
              <button
                ref={prevRef}
                type="button"
                aria-label="Previous"
                aria-disabled={!canPrev}
                disabled={!canPrev}
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#212121] focus-visible:ring-offset-2
                ${canPrev ? "bg-white text-[#1E1E1E] border border-[#CFCFCF]" : "bg-[#E9E9E9] text-[#1E1E1E] pointer-events-none"}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button
                ref={nextRef}
                type="button"
                aria-label="Next"
                aria-disabled={!canNext}
                disabled={!canNext}
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#212121] focus-visible:ring-offset-2
                ${canNext ? "bg-white text-[#1E1E1E] border border-[#CFCFCF]" : "bg-[#E9E9E9] text-[#1E1E1E] pointer-events-none"}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* круглые фото */
function CircleImg({ className = "", src, alt = "" }) {
  return (
    <div className={`rounded-full overflow-hidden drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)] ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
    </div>
  );
}

/* карточка комментария */
function ReviewCard({ name, rating, text, dim = false }) {
  return (
    <article
      className={`w-full h-full bg-white rounded-[24px] border border-[#EEEEEE] shadow-[0px_8px_24px_rgba(58,53,65,0.12)] px-7 py-6 ${dim ? "opacity-50" : "opacity-100"} transition-opacity duration-300`}
    >
      <h3 className="text-[#424242] text-[18px] font-semibold mb-2">{name}</h3>
      <Stars value={rating} className="mb-3" />
      <p className="text-[#757575] text-[14px] leading-relaxed line-clamp-3">{text}</p>
    </article>
  );
}

/* звёзды */
function Stars({ value = 0, className = "" }) {
  const total = 5;
  return (
    <div className={`flex items-center gap-1 ${className}`} aria-label={`Rating: ${value} out of 5`}>
      {Array.from({ length: total }).map((_, i) => (
        <Star key={i} filled={i < value} />
      ))}
    </div>
  );
}

function Star({ filled }) {
  return filled ? (
    <svg width="18" height="18" viewBox="0 0 20 20" className="text-[#424242]" aria-hidden="true">
      <path fill="currentColor" d="M10 15.27l5.18 3.04-1.64-5.81L18 8.63l-6-.22L10 3 8 8.41l-6 .22 4.46 3.87L4.82 18.3 10 15.27z"/>
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 20 20" className="text-[#C9C9C9]" aria-hidden="true">
      <path fill="currentColor" d="M10 15.27l5.18 3.04-1.64-5.81L18 8.63l-6-.22L10 3 8 8.41l-6 .22 4.46 3.87L4.82 18.3 10 15.27z"/>
    </svg>
  );
}
