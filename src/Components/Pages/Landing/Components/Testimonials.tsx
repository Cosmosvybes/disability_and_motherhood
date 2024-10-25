import Testimonial from "./Testimonial";
import image from "../../../../assets/headeshot.jpg";
const Testimonials = () => {
  return (
    <>
      <div className="relative h-auto py-5  max-sm:py-5 ">
        <h1 className="text-center   text-5xl max-sm:text-2xl font-bold">
          Team & Contributors
        </h1>
        <div className="relative grid grid-cols-3 max-sm:grid-cols-1 gap-3 mt-5 px-20 max-sm:px-5 ">
          {[1, 2, 3].map((_, i) => (
            <Testimonial image={image} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
