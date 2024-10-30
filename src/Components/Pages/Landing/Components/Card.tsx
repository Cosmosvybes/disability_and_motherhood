import { Location } from "react-huge-icons/solid";

const Card_ = ({
  image,
  researchTitle = "Event and Research updates",
  content = "— coming soon",
}: {
  image: any;
  researchTitle: string;
  content: string;
}) => {
  return (
    <>
      <div className="flex justify-between h-96 max-md:h-auto max-sm:h-auto max-sm:flex-col  max-md:flex-col ">
        <div className="relative  flex items-center justify-center  h-96 max-sm:h-auto max-md:py-2 max-md:w-full  w-1/2">
          {/* <div
            className="relative h-52 w-52   rounded-full  max-sm:w-44 max-md:w-44"
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div> */}
        </div>

        <div className="relative  flex-col flex justify-center items-start px-5  max-md:px-2 w-full  h-96 max-sm:w-full max-md:w-full">
          <h1 className="text-3xl max-sm:text-xl max-md:text-xl px-1 font-extrabold">
            {researchTitle}
          </h1>
          <div className="relative w-4/5   max-sm:w-full bg-gray-white  text-left rounded-xl px-0 max-sm:px-1 py-2 h-auto">
            <p className="text-black max-sm:text-sm tex-xl font-bold">
              {content}
            </p>{" "}
          </div>
          <a
            className="text-blue-500  max-sm:text-sm text-sm font-bold"
            href="https://journals.sagepub.com/doi/epub/10.1177/26334941241288587"
          >
            Read more here
          </a>{" "}
          {/* <div className="relative w-1/3  py-2 px-1 flex justify-start items-center gap-2  mt-2 items-left">
            <Location className="inline text-black text-3xl max-sm:text-sm  animate-ping" />{" "}
            <strong className="text-black  font-extrabold"></strong>{" "}
            <span className="text-black max-sm:text-sm text-sm font-bold">
              {" "}
              London, UK
            </span>
          </div> */}
        </div>

        {/* <div className="relative w-full border flex h-96 max-md:w-full flex-col">
          <CardBody>
            <h1 className="text-2xl max-sm:text-sm max-md:text-xl px-1 font-bold">
              {researchTitle}
            </h1>

            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {"Research updates"}
            </CardSubtitle>
          </CardBody>
        </div> */}
      </div>

      {/* <div className="relative  max-sm:py-5 max-sm:px-2 gap-5 max-sm:gap-2  max-md:gap-4  h-auto w-full px-2  py-2 mt-4 flex justify-start flex-col rounded-0 ">
        <div
          className="relative w-full flex justify-start max-sm:object-contain max-md:object-cover  rounded-xl h-96 max-sm:h-44"
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>

        <h1 className="text-2xl max-sm:text-sm max-md:text-xl px-1 font-bold">
          {researchTitle}
        </h1>
        <div className="relative w-6/7  max-sm:w-full bg-gray-white  text-left space-x-10 rounded-xl px-0 max-sm:px-1 py-2 h-auto">
          <p className="text-black max-sm:text-sm text-sm font-bold">
            {content}
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
      </div> */}
    </>
  );
};

export default Card_;
