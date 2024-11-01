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
      <div className="flex justify-between max-md:w-full h-96 max-md:h-auto max-sm:h-auto max-sm:flex-col  max-md:flex-col ">
        <div
          className="relative max-md:w-full  max-md:h-96  max-sm:h-60 flex items-center max-md:object-contain justify-center  h-96 max-md:py-0 w-1/2"
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>

        <div className="relative  flex-col flex justify-center items-start px-5  max-md:px-2 w-full  h-96 max-sm:w-full max-md:w-full">
          <h1 className="text-3xl max-sm:text-xl max-md:text-xl font-extrabold">
            {researchTitle}
          </h1>
          <div className="relative w-4/5   max-sm:w-full bg-gray-white mt-2 text-left rounded-xl px-0 max-sm:px-0 py-2 max-md:py-0 h-auto">
            <p className="text-black max-sm:text-sm text-xl font-bold">
              {content}
            </p>{" "}
          </div>
          <a
            className="text-blue-500 max-sm:px-0 mt-2  max-sm:text-sm text-sm font-bold"
            href={`https://journals.sagepub.com/doi/epub/10.1177/26334941241288587`}
          >
            read more here
          </a>
        </div>
      </div>
    </>
  );
};

export default Card_;
