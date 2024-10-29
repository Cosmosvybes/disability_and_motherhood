import { FormatQuote, Reward } from "react-huge-icons/solid";

const Testimonial = ({
  image,
  role,
  statement,
}: {
  image: any;
  role: string;
  statement: string;
}) => {
  return (
    <>
      <div className="relative  flex transition duration-500  gap-5  bg-white  max-sm:gap-2 rounded-xl justify-start  flex-col h-96 max-sm:h-96 w-96 max-sm:w-full max-md:w-full max-md:h-96">
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
            <Reward className="text-2xl absolute bottom-0 -right-5 text-gray-500" />{" "}
          </div>
        </div>
        <div className="relative w-full  h-auto  py-5 mt-3 px-3 ">
          <p className="text-black max-sm:text-sm text-sm font-bold antialiased ">
            {statement}
          </p>
        </div>
        <div className="relative w-full flex-col  max-md:py-0  px-5 py-5 flex justify-end items-end">
          <p className="text-gray-500 block">{role}</p>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
