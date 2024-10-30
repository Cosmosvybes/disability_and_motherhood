import { ArrowRight } from "react-huge-icons/solid";
import image from "../../../../assets/uaps.jpg";
import yorkImage from "../../../../assets/York.png";
const Funders = () => {
  return (
    <>
      <div
        id="Support the Project"
        className="relative flex h-auto max-md:px-10  px-20 max-sm:px-2 flex-col gap-5  justify-start items-start"
      >
        <h1 className="text-center text-black max-sm:px-0  max-sm:text-2xl max-sm:py-2 text-4xl font-extrabold">
          Support the project{" "}
          <ArrowRight className="text-5xl max-sm:text-3xl text-black inline" />
        </h1>
        <div className="relative flex flex-col justify-start w-1/2 max-sm:w-full py-2">
          <p  className="text-black max-sm:text-sm text-xl font-bold antialiased">
            To support this project please reach out to the principal
            investigator
            <span className="text-blue-700 ">
              {" "}
              <a href="mailto:dummy@admin.com">here </a>{" "}
            </span>{" "}
            or any of the project social media platforms.
          </p>
        </div>

        <div className="relative gap-3 flex max-md:gap-2  max-sm:flex-col justify-start items-center">
          <div
            className="relative w-44  max-sm:w-52 max-md:w-60  h-24  max-md:h-28 rounded-sm max-sm:object-contain"
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

        <div className="relative flex flex-col justify-start max-md:w-5/6 w-1/2 max-sm:w-full py-2">
          <p  className="text-black max-sm:text-sm text-xl font-bold antialiased">
            The funders of this project are the{" "}
            <span className="text-blue-700 ">
              {" "}
              <a href="https://uaps-uepa.org/">
                {" "}
                Union for African Population Studies{" "}
              </a>{" "}
            </span>{" "}
            and{" "}
            <span className="text-blue-700 ">
              {" "}
              <a href="https://www.yorksj.ac.uk/">
                {" "}
                York St. John University{" "}
              </a>{" "}
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
