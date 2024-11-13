import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import image from "../../../../assets/Mother.webp";
import { Pagination, Parallax } from "swiper/modules";
import { ArrowRight } from "react-huge-icons/solid";

import { useEffect, useState } from "react";
import Card_ from "./Card";

const SupportSection = () => {
  useEffect(() => {
    const getPosts = async () => {
      const data = await fetch(
        "https://disability-and-motherhood-server.onrender.com/api/field-research-updates"
      );
      const result = await data.json();
      setResearch(result.response);
    };
    getPosts();
  }, []);

  const [research, setResearch] = useState<any>([]);
  return (
    <>
      <div
        className="relative px-20 max-md:px-2 max-md:py-2  mt-10 py-5 max-sm:px-4 bg-gray-50 max-sm:py-2 h-auto"
        id="Field and Research Updates"
      >
        <div className="relative max-md:px-2 flex justify-between items-center">
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
          {research.map((_: any, i: any) => (
            <SwiperSlide key={i} className="py-6 max-md:py-0 max-sm:py-2">
              <Card_
                hyperLink={_.hyperLink}
                imageUrl={_.imageUrl}
                title={_.title}
                description={_.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SupportSection;
