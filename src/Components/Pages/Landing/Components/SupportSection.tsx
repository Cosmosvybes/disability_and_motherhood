import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import image from "../../../../assets/Mother.webp";
import { Pagination, Parallax } from "swiper/modules";
import { ArrowRight } from "react-huge-icons/solid";

import { useState } from "react";
import Card_ from "./Card";
import researchImage from "../../../../assets/research.jpg";
const SupportSection = () => {
  const [research] = useState([
    {
      id: 1,
      image: researchImage,
      researchTitle:
        "The role of artificial intelligence in transforming maternity services in Africa: prospects and challenges",
      content:
        "Maternal and neonatal health outcomes in Africa remain a significant public health challenge. Despite ongoing efforts to enhance maternity services, many women across the continent do not receive the necessary antenatal care (ANC), and a substantial number of births.",
    },
    {
      id: 2,
      researchTitle: "Event and Research updates",
      content: "— coming soon",
    },
    {
      id: 2,
      researchTitle: "Event and Research updates",
      content: "— coming soon",
    },
  ]);
  return (
    <>
      <div
        className="relative px-20 max-md:px-2 max-md:py-2  py-5 max-sm:px-2 bg-gray-50 max-sm:py-2 h-auto"
        id="Field and Research Updates"
      >
        <div className="relative flex justify-between items-center">
          <h1 className="text-left text-5xl max-md:text-2xl max-sm:text-xl font-bold">
            Field and Research Updates
          </h1>{" "}
          <ArrowRight className="text-4xl max-sm:2xl" />{" "}
        </div>

        <Swiper
          effect="slide"
          slidesPerView={1}
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
          {research.map((_, i) => (
            <SwiperSlide key={i} className="py-6 max-md:py-0 max-sm:py-2">
              <Card_
                image={_.image}
                researchTitle={_.researchTitle}
                content={_.content}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SupportSection;
