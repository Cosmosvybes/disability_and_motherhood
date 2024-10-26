import { FormatQuote, Reward } from "react-huge-icons/solid";

const Testimonial = ({ image, role }: { image: any; role: string }) => {
  return (
    <>
      <div className="relative  drop-shadow-md flex transition duration-500  gap-5  bg-gray-50 border max-sm:gap-2 shadow-lg rounded-xl justify-start  flex-col h-auto max-sm:h-auto w-full">
        <FormatQuote className="absolute right-0 top-5 text-5xl   opacity-10" />
        <FormatQuote className="absolute left-0 bottom-5 text-5xl   opacity-10" />
        <div className=" w-1/2 max-sm:w-1/2 max-sm:h-auto   flex justify-normal  py-5 px-5 ">
          <div
            className="h-32 relative w-32 bg-gray-50 rounded-full shadow drop-shadow-md"
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
          <p className="max-sm:text-sm  text-xl antialiased text-black">
            {" "}
            I cannot express enough how much the disability and motherhood
            assistance program has changed my life. As a mother living with a
            disability, everyday challenges often felt overwhelming. This
            program has provided me with the support I needed to not only manage
            my day-to-day tasks but also to truly thrive as a parent.
          </p>
        </div>
        <div className="relative w-full flex-col   px-5 py-5 flex justify-end items-end">
          <strong className="italic"> — Sarah M Connor.</strong>
          <p className="text-gray-500 block">{role}</p>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
