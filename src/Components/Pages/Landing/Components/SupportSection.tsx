import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import image from "../../../../assets/Mother.webp";
import { Pagination } from "swiper/modules";
import { ArrowRight } from "react-huge-icons/solid";
import cardImage from "../../../../assets/wheelchair.webp";
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

       

        <div className="relative flex justify-start ">
          <div className="relative h-auto w-96 max-sm:w-full  border-8 border-gray-100 rounded-xl">
            <div className="relative h-auto w-auto  border-8 rounded-sm ">
              <div
                className="relative   flex h-80   "
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
        </div>

        <Swiper
          slidesPerView={2}
          centeredSlides={false}
          spaceBetween={2}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper h-auto "
        >
          {[1, 2, 3, 5, 5, 4, 5, 6].map((_, i) => (
            <SwiperSlide key={i} className="py-3">
              <Card image={cardImage} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="relative h-20 flex flex-col mt-3">
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
