import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import image from "../../../../assets/Mother.webp";
import { Pagination, Parallax } from "swiper/modules";
import { ArrowRight } from "react-huge-icons/solid";
import cardImage from "../../../../assets/wheelchair.webp";

const SupportSection = () => {
  return (
    <>
      <div
        className="relative px-20  py-10 max-sm:px-2 bg-gray-50 max-sm:py-5 h-auto"
        id="Field and Research Updates"
      >
        <div className="relative flex justify-between items-center">
          <h1 className="text-left text-5xl max-sm:text-xl font-bold">
            Fields and Research Updates
          </h1>{" "}
          <ArrowRight className="text-4xl max-sm:2xl" />{" "}
        </div>
        <Swiper
          effect="slide"
          slidesPerView={2}
          centeredSlides={false}
          grabCursor={true}
          spaceBetween={0}
          speed={800}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Parallax]}
          className="mySwiper h-auto "
        >
          {[1, 2, 3, 5, 5, 4, 5, 6].map((_, i) => (
            <SwiperSlide key={i} className="py-4 max-sm:py-2">
              <Card image={cardImage} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SupportSection;
