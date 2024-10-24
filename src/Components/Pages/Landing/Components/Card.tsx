import { Location } from "react-huge-icons/solid";

const Card = ({ image }: { image: any }) => {
  return (
    <>
      <div className="relative gap-5 bg-gray-100 h-auto w-full px-5 py-5 mt-4 flex justify-start flex-col rounded-sm ">
        <div className="relative w-full flex justify-start rounded-md h-72 max-sm:h-52">
          <img
            src={image}
            alt="img"
            className="object-contain h-full w-auto rounded-sm"
          />
        </div>

        <h1 className="text-2xl max-sm:text-xl font-bold">
          Help Charlotte Family
        </h1>
        <div className="relative w-1/2 max-sm:w-full  h-auto">
          <p className="text-gray-700 text-xl max-sm:text-sm">
            Raising their children from medical expenses to daily living
            support. Your donation helps the disbale to thrive. This program has
            provided me with the support I needed to not only manage my
            day-to-day tasks but also to truly thrive as a parent.{" "}
          </p>{" "}
        </div>

        <div className="relative">
          <strong className="text-black">
            <Location className="inline text-2xl text-gray-400 animate-bounce" />{" "}
          </strong>{" "}
          <span className="text-gray-300 font-bold"> London, UK</span>
        </div>
      </div>
    </>
  );
};

export default Card;
