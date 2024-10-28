import { ArrowRight } from "react-huge-icons/solid";
import image from "../../../../assets/union.jpg";
import yorkImage from "../../../../assets/York.png";
const Funders = () => {
  return (
    <>
      <div
        id="Support the Project"
        className="relative flex h-auto px-20 max-sm:px-2 flex-col gap-5  justify-start items-start"
      >
        <h1 className="text-center text-black max-sm:px-0  max-sm:text-2xl max-sm:py-2 text-4xl font-extrabold">
          Support the project{" "}
          <ArrowRight className="text-5xl max-sm:text-3xl text-black inline" />
        </h1>
        <div className="relative flex flex-col justify-start w-1/2 max-sm:w-full py-2">
          <p className="text-black max-sm:text-sm text-sm font-bold">
            To support this project please reach out to the principal
            investigator
            <span className="text-blue-700 ">
              {" "}
              <a href="mailto:bolarinwaobasanjo@gmail.com">here </a>{" "}
            </span>{" "}
            or any of the project social media platforms.
          </p>
        </div>

        <div className="relative gap-3 flex justify-start items-center">
          <div
            className="relative w-44  max-sm:w-36 h-16 rounded-sm max-sm:object-contain"
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="relative w-52 max-sm:w-40   h-16 rounded-sm max-sm:object-contain"
            style={{
              backgroundImage: `url(${yorkImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>

        <div className="relative flex flex-col justify-start w-1/2 max-sm:w-full py-2">
          <p className="text-xl max-sm:text-sm font-normal text-gray-400">
            The funders of this project are the Union for Africa Population
            Studies and{" "}
            <span className="text-blue-700 ">
              {" "}
              <a href="https://www.yorksj.ac.uk/"> York St. John University </a>{" "}
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
