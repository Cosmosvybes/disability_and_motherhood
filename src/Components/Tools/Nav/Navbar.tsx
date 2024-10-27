import { useState } from "react";
import { MenuLineHorizontal, RemoveCircle } from "react-huge-icons/solid";
import { Link } from "react-scroll";

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
      <div className="relative flex px-20 max-sm:px-2 justify-between items-center">
        <div
          className="absolute bg-gray-50 flex justify-center items-center flex-col  transition duration-500  left-0 w-full"
          style={{
            height: toggle ? "28rem" : "0",
            transition: "0.5s ease-out",
          }}
        >
          <div className=" z-10 absolute bottom-0  px-5 py-5 left-0  flex-col  justify-evenly flex gap-5">
            {menu.map((_, i) => (
              <Link
                onClick={() => setToggle(!toggle)}
                duration={500}
                smooth
                style={{ visibility: !toggle ? "hidden" : "visible" }}
                to={_.title}
                key={i}
                className="text-black font-semibold text-sm cursor-pointer"
              >
                {_.title}
              </Link>
            ))}
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white">Logo </h1>

        <div className="relative max-sm:hidden   justify-evenly flex gap-5">
          {menu.map((_, i) => (
            <Link
              duration={500}
              smooth
              to={_.title}
              key={i}
              className="text-gray-50 cursor-pointer font-semibold text-xl"
            >
              {_.title}
            </Link>
          ))}
        </div>
        <div className="relative  max-sm:block hidden rounded-full antialiased animate-pulse  border-4">
          <div className="relative w-14 h-14  duration-1000   rounded-full max-sm:flex bg-gray-100  hidden justify-center items-center">
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
