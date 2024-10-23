import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import image from "../../../../assets/Mother.webp";
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
      </div>
    </>
  );
};

export default SupportSection;
