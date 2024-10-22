const Testimonial = ({ image }: { image: any }) => {
  return (
    <>
      <div className="relative flex  justify-end  h-80 w-full">
        <div className="absolute -z-10 bg-gray-50 rounded-full bottom-0 right-10  max-sm:right-5 h-72 w-72 max-sm:w-1/2">
          {" "}
          <div
            className="absolute z-20  rounded-full bg-white  h-24 w-24 -top-10 right-16"
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="absolute bg-gray-300  border-gray-300  px-2 rounded-3xl left-4 bottom-0 h-52 w-96 z-20">
          <div className="absolute bg-gray-100 border-gray-100 flex flex-col justify-center items-center  px-5 rounded-3xl left-6 bottom-4 h-52 py-10 w-96 z-20">
            <p className="max-sm:text-sm text-sm">
              {" "}
              I cannot express enough how much the disability and motherhood
              assistance program has changed my life. As a mother living with a
              disability, everyday challenges often felt overwhelming. This
              program has provided me with the support I needed to not only
              manage my day-to-day tasks but also to truly thrive as a parent.
            </p>
            <div className="relative flex justify-end items-end px-2 w-full">
              {" "}
              <strong> Sharon Shaw.</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
