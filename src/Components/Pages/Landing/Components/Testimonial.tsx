import { Reward } from "react-huge-icons/solid";

const Testimonial = ({ image }: { image: any }) => {
  return (
    <>
      <div className="relative flex transition duration-500  bg-gray-100 border gap-2 shadow-lg shadow-white rounded-xl justify-start  flex-col h-96 max-sm:h-auto w-full">
        <div className=" w-1/2 max-sm:w-1/2 max-sm:h-auto   flex justify-normal  py-5 px-5 ">
          <div
            className="h-32 relative w-32 bg-gray-50 rounded-full"
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {" "}
            <Reward className="text-2xl absolute bottom-0 -right-5 text-yellow-600 " />{" "}
          </div>
        </div>
        <div className="relative w-full  h-auto  py-5 mt-3 px-3 ">
          <p className="max-sm:text-sm  text-sm antialiased text-gray-700">
            {" "}
            I cannot express enough how much the disability and motherhood
            assistance program has changed my life. As a mother living with a
            disability, everyday challenges often felt overwhelming. This
            program has provided me with the support I needed to not only manage
            my day-to-day tasks but also to truly thrive as a parent.
          </p>
        </div>
        <div className="relative w-full  px-5 py-5 flex justify-end items-center">
          <strong className="italic">  — Sarah James.</strong>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
