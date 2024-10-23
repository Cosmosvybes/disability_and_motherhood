const Testimonial = ({ image }: { image: any }) => {
  return (
    <>
      <div className="relative flex justify-end bg-gray-100 border gap-2 shadow-lg shadow-white rounded-xl items-end flex-col h-96 w-full">
        <div className="absolute  left-0 top-0 h-52 w-1/2 max-sm:w-1/2 max-sm:h-60 ">
          <div
            className="absolute left-5 top-4 h-32 w-32 bg-gray-50 rounded-full"
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {" "}
          </div>
        </div>
        <div className="relative w-full  h-auto  py-5 mt-7 px-3 ">
          <p className="max-sm:text-sm  text-sm">
            {" "}
            I cannot express enough how much the disability and motherhood
            assistance program has changed my life. As a mother living with a
            disability, everyday challenges often felt overwhelming. This
            program has provided me with the support I needed to not only manage
            my day-to-day tasks but also to truly thrive as a parent.
          </p>
        </div>
        <div className="relative w-full  px-5 py-5 flex justify-end items-center">
          <strong className="italic">Sarah James.</strong>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
