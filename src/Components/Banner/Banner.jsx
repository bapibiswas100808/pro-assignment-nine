import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import slider1 from "../../assets/images/slide1.jpg";
import slider2 from "../../assets/images/slide2.jpg";
import slider3 from "../../assets/images/slide3.jpg";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div className="lg:h-screen">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${slider1})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">E-State</h1>
                <p className="mb-5 font-poppins">
                  E-State Real Estate Company excels in delivering innovative,
                  eco-friendly living solutions, emphasizing sustainability and
                  modern design in prime urban and suburban locations
                </p>
                <button className="btn bg-[#ff3e55] text-white border-0 hover:bg-primary">
                  Explore!
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="lg:h-screen">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${slider2})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">E-State</h1>
                <p className="mb-5 font-poppins">
                  E-State Real Estate Company excels in delivering innovative,
                  eco-friendly living solutions, emphasizing sustainability and
                  modern design in prime urban and suburban locations
                </p>
                <button className="btn bg-[#ff3e55] text-white border-0 hover:bg-primary">
                  Explore!
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="lg:h-screen">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${slider3})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">E-State</h1>
                <p className="mb-5 font-poppins">
                  E-State Real Estate Company excels in delivering innovative,
                  eco-friendly living solutions, emphasizing sustainability and
                  modern design in prime urban and suburban locations
                </p>
                <button className="btn bg-[#ff3e55] text-white border-0 hover:bg-primary">
                  Explore!
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
