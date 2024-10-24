import image from "../../../../assets/pexels-photo-4474036.webp";
const Extras = () => {
  return (
    <>
      <div className="relative flex justify-between items-center max-sm:flex-col  py-5  h-auto px-20 max-sm:px-2 ">
        <div
          className="relative h-96  w-1/3 max-sm:w-full rounded-tl-xl rounded-bl-xl max-sm:rounded-tr-xl max-sm:rounded-tl-xl max-sm:rounded-bl-none "
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="relatives px-5  h-96 w-full justify-between items-center  flex bg-black rounded-none ">
          <h1 className="text-center text-gray-50  text-8xl max-sm:text-4xl font-extrabold">
            Every mother deserve{" "}
            <h1 className="text-gray-300 inline">better support. </h1>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Extras;
