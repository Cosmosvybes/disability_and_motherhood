import { ArrowRight } from "react-huge-icons/solid";
import image from "../../../../assets/union.jpg";
const Funders = () => {
  return (
    <>
      <div className="relative flex h-auto px-20 max-sm:px-2 flex-col gap-5  justify-start items-start">
        <h1 className="text-center text-black max-sm:px-2  max-sm:text-2xl max-sm:py-2 text-4xl font-extrabold">
          Funders <ArrowRight className="text-5xl text-black inline" />
        </h1>
        <div
          className="relative w-44 h-24 max-sm:object-contain"
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="relative flex flex-col justify-start w-1/2 max-sm:w-full   py-5">
          {/* <h1 className="text-left text-black  max-sm:text-sm max-sm:py-2 text-xl font-extrabold">
          Funders' role
        </h1> */}
          <p className="text-xl max-sm:text-sm font-semibold text-gray-400">
            The funders of this project are the Union for Africa Population
            Studies and{" "}
            <span className="text-blue-600 ">
              {" "}
              <a href="#"> York St. John University </a>{" "}
            </span>{" "}
            , and they have no role or influence on the results of this
            project in any way.
          </p>
        </div>
      </div>
    </>
  );
};

export default Funders;
