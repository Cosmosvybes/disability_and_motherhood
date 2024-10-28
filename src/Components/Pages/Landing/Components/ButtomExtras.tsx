import image from "../../../../assets/pexels-photo-6392902.webp";

const ButtomExtras = () => {
  return (
    <>
      <div className="relative flex justify-between items-center max-sm:flex-col  py-5  h-auto px-20 max-sm:px-2 ">
        <div className="relatives px-5  h-96 max-sm:h-auto w-full justify-between items-center  flex  rounded-none max-sm:rounded-tr-xl max-sm:rounded-tl-xl  ">
          <h1 className="text-center text-black max-sm:text-6xl max-sm:py-2 text-8xl font-extrabold">
            With adequate access and utilisation, every mother with disability{" "}
            <span className="text-gray-400"> stand a chance. </span>{" "}
          </h1>
          {/* </h1> */}
        </div>
        <div
          className="relative h-96   w-1/3 max-sm:w-full rounded-xl max-sm:rounded-tl-none  max-sm:rounded-tr-none  max-sm:object-contain flex justify-start items-center "
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

export default ButtomExtras;
