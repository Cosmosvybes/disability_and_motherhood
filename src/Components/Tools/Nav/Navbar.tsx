import { useState } from "react";
import { MenuLineHorizontal, RemoveCircle } from "react-huge-icons/solid";
import { Link } from "react-scroll";
import image from "../../../assets/mother.jpg";
const Navbar = () => {
  const [menu] = useState([
    { id: 1, title: "About the project" },
    { id: 2, title: "Meet the Principal Investigator" },
    { id: 5, title: "Field and Research Updates" },
    { id: 3, title: "Support the Project" },
  ]);
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="relative flex max-lg:px-5 h-52 max-2xl:px-20 max-xl:px-10 px-28 py-10 max-sm:px-2 max-md:px-4 justify-between items-center">
        <div
          className={`absolute bg-gray-50  max-md:py-5 ${
            toggle ? "h-52" : "h-0"
          }  flex justify-center items-center flex-col  transition duration-500  left-0 bottom-0 w-full`}
          style={{
            transition: "1s ease-out",
          }}
        >
          <div
            style={{
              transition: "2s  ease-out",
              opacity: !toggle ? 0 : 1,
            }}
            className=" z-10 absolute bottom-0  py-5 px-5 left-0  flex-col  justify-evenly flex  gap-4"
          >
            {menu.map((_, i) => (
              <Link
                onClick={() => setToggle(!toggle)}
                duration={400}
                smooth
                style={{
                  visibility: !toggle ? "hidden" : "visible",
                  transition: "0.9s ease-in",
                  opacity: !toggle ? 0 : 1,
                }}
                to={_.title}
                key={i}
                className="text-black py-1 hover:bg-gray-400 transition duration-500 font-bold max-sm:flex max-md:flex  text-sm cursor-pointer"
              >
                {_.title}
              </Link>
            ))}
          </div>
        </div>
        <div
          className="relative logo w-28 h-28 max-md:h-24  -z-10 max-md:w-24 max-sm:w-24 max-sm:w-h-24 flex justify-center items-center rounded-full"
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        {/* <h1 className="text-2xl font-bold text-black">Logo </h1> */}

        <div className="relative max-sm:hidden max-md:hidden    justify-evenly flex gap-5">
          {menu.map((_, i) => (
            <Link
              duration={500}
              smooth
              to={_.title}
              key={i}
              className="text-black hover:text-gray-400 transition duration-50 cursor-pointer font-bold text-xl"
            >
              {_.title}
            </Link>
          ))}
        </div>
        <div className="relative  max-md:block max-sm:block hidden  rounded-full antialiased animate-pulse  border-4">
          <div className="relative w-14 h-14  duration-1000 max-md:flex   rounded-full max-sm:flex bg-gray-50  hidden justify-center items-center">
            <RemoveCircle
              className="text-4xl transition duration-500 text-black"
              onClick={() => setToggle(!toggle)}
              style={{
                zIndex: toggle ? "2" : "1",
                opacity: toggle ? "1" : "0",
                transition: "1s ease-out",
                display: toggle ? "block" : "none",
              }}
            />

            <MenuLineHorizontal
              className="text-4xl text-black "
              onClick={() => setToggle(!toggle)}
              style={{
                zIndex: toggle ? "2" : "1",
                transition: "1s ease-out",
                display: !toggle ? "block" : "none",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
