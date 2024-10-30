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
      <div className="relative h-96 px-2 py-2  max-md:w-full flex-col flex transition duration-500 bg-white  max-sm:gap-2 gap-3 rounded-xl justify-start items-start   max-sm:h-auto w-96 max-sm:w-full max-md:h-96">
        <FormatQuote className="absolute right-0 top-5 text-5xl   opacity-10" />
        <FormatQuote className="absolute left-0 bottom-0 text-5xl   opacity-10" />

        <div className="relative  h-auto max-md:h-auto max-sm:h-auto  w-full flex justify-start max-md:justify-start items-start">
          <div
            className="relative  max-md:-left-0 bg-white  shadow-inner rounded-full max-md:h-20 max-md:w-20 h-28 w-28"
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>

        <div className="relative w-full  h-auto px-2 py-2">
          <p className="text-black max-sm:text-sm text-xl font-bold antialiased">
            {statement}{" "}
          </p>
        </div>

        <div className="relative w-full  h-auto  max-md:py-0  px-2 py-4  flex justify-end items-end">
          <p className="text-gray-500 font-semibold block">
            {role} <Reward className="inline text-2xl text-black" />{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
