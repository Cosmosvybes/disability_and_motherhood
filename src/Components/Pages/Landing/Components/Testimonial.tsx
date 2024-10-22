const Testimonial = () => {
  return (
    <>
      <div className="relative flex  justify-end  h-80 w-full">
        <div className="absolute -z-10 bg-gray-50 rounded-2xl bottom-0 right-10  max-sm:right-5 h-72 w-72 max-sm:w-1/2 border">
          {" "}
          <div className="absolute z-20 bg-white rounded-full h-24 w-24 -top-10 right-12 border"></div>
        </div>
        <div className="absolute bg-black border-t-4 shadow-md border-gray-200  border-l-4 rounded-2xl left-10 bottom-4 h-52 w-96 z-20"></div>
      </div>
    </>
  );
};

export default Testimonial;
