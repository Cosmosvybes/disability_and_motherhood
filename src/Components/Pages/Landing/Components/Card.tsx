import { Location } from "react-huge-icons/solid";

const Card = ({ image }: { image: any }) => {
  return (
    <>
      <div className="relative  max-sm:py-5 max-sm:px-2 gap-5 max-sm:gap-2  h-auto w-full px-2  py-2 mt-4 flex justify-start flex-col rounded-0 ">
        <div
          className="relative w-full flex justify-start max-sm:object-contain  rounded-xl h-96 max-sm:h-44"
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>

        <h1 className="text-2xl max-sm:text-sm px-1 font-bold">
          Events and Research updates
        </h1>
        <div className="relative w-6/7  max-sm:w-full bg-gray-white  text-left space-x-10 rounded-xl px-0 max-sm:px-1 py-2 h-auto">
          <p className="text-black max-sm:text-sm text-sm font-bold">
            —Coming soon
          </p>{" "}
        </div>

        <div className="relative w-auto bg-white py-2 px-1 flex justify-start items-center">
          <Location className="inline text-black text-3xl max-sm:text-sm  animate-ping" />{" "}
          <strong className="text-black  font-extrabold"></strong>{" "}
          <span className="text-black max-sm:text-sm text-sm font-bold">
            {" "}
            London, UK
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
