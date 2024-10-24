import { Location } from "react-huge-icons/solid";

const Card = ({ image }: { image: any }) => {
  return (
    <>
      <div className="relative gap-5 bg-gray-100 h-auto w-full px-2 py-2 mt-4 flex justify-start flex-col rounded-sm ">
        <div className="relative w-full  rounded-md h-72 max-sm:h-52">
          <img
            src={image}
            alt="img"
            className="object-contain h-full w-auto rounded-sm"
          />
        </div>

        <h1 className="text-2xl max-sm:text-xl font-bold">
          Help Charlotte Family
        </h1>
        <p className="text-gray-700">
          Raising their children from medical expenses to daily living support.
          Your donation helps the disbale to thrive. This program has provided
          me with the support I needed to not only manage my day-to-day tasks
          but also to truly thrive as a parent.{" "}
        </p>
        <div className="relative">
          <strong className="text-gray-400"><Location className="inline text-2xl text-gray-400 animate-bounce"/> Location : </strong> <span className="text-gray-500 font-bold"> London, UK</span>
        </div>
      </div>
    </>
  );
};

export default Card;
