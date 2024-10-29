import { ArrowRight } from "react-huge-icons/solid";
import { Link } from "react-scroll";

const Indicator = ({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => {
  return (
    <>
      <Link to={title} smooth duration={600} className="cursor-pointer">
        <div className="relative  w-full h-44 max-sm:h-32 max-md:h-40 flex px-2 justify-start max-sm:justify-start  gap-5 max-sm:gap-2 items-center  bg-white  rounded-bl-3xl rounded-tr-3xl py-5">
          <div className="relative rounded-full w-20 max-sm:rounded-full max-sm:w-14 max-sm:h-14  h-20 bg-black flex  items-center justify-center">
            {icon}
          </div>

          <div className="relative w-3/4 block">
            <h1 className="font-bold text-2xl">{title} </h1>
            <p className="max-sm:text-xs max-md:text-sm text-xl text-black">
              {description}{" "}
              <ArrowRight className="inline text-2xl  text-black" />
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Indicator;
