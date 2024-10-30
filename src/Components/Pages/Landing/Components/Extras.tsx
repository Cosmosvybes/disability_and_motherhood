import image from "../../../../assets/pexels-photo-6393377.webp";
const Extras = () => {
  return (
    <>
      <div className="relative flex max-md:flex-col justify-between max-sm:gap-2 items-center max-sm:flex-col shadow shadow-white  py-5  max-md:px-10 h-auto px-20 max-sm:px-2 ">
        <div className="relative px-5 max-sm:px-2 max-md:h-44 h-96 max-sm:h-auto w-full justify-between items-center  flex bg-black rounded-none max-sm:rounded-br-xl max-sm:rounded-bl-xl  ">
          <h1 className="text-center text-gray-300 inline  max-md:text-2xl max-sm:text-xl max-sm:py-2 text-8xl font-extrabold">
            Empowering all women without
            <h1 className="text-gray-50  inline  max-md:text-2xl max-sm:text-xl max-sm:py-2 text-8xl font-extrabold">
              {" "}
              leaving anyone behind
            </h1>
          </h1>
        </div>
        <div
          className="relative h-96 max-md:w-full  w-1/3 max-sm:w-full rounded-tr-xl rounded-bl-none max-sm:rounded-tr-xl max-sm:rounded-tl-xl max-sm:rounded-bl-none  max-sm:object-contain flex justify-start items-center "
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </>
  );
};

export default Extras;
