import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { ArrowRight } from "react-huge-icons/solid";

const SupportSection = () => {
  return (
    <>
      <div className="relative px-20 py-10 max-sm:px-2 max-sm:py-5 h-auto">
        <div className="relative flex justify-between items-center">
          <h1 className="text-left text-5xl max-sm:text-xl font-bold">
            Support Mothers with Disabilities in Need.
          </h1>{" "}
          <ArrowRight className="text-4xl max-sm:2xl" />{" "}
        </div>

        <Swiper
          slidesPerView={2}
          centeredSlides={false}
          spaceBetween={4}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper h-auto "
        >
          {[1, 2, 3, 5, 5].map((_, i) => (
            <SwiperSlide key={i} className="py-3">
              <Card />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="relative h-20 flex flex-col mt-3 z-10 border -rotate-3">
          <div className="relative h-1/2 flex px-2 justify-between border-none items-center py-4 bg-gradient-to-r from-gray-50 to-black">
            <h1 className="text-black text-sm">
              Help us make a difference !!!
            </h1>
            <h1 className="text-black text-sm scro">
              Help us make a difference !!!
            </h1>
          </div>
          <div className="relative h-1/2 flex py-4 px-2 justify-between items-center bg-gradient-to-l border-none from-gray-50 to-black">
            <h1 className="text-white text-sm">
              Help us make a difference !!!
            </h1>
            <h1 className="text-white text-sm scro">
              Help us make a difference !!!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportSection;
