import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu] = useState([
    { id: 1, title: "Home" },
    { id: 2, title: "About Us" },
    { id: 5, title: "Resources" },
    { id: 3, title: "Contact Us" },
  ]);
  return (
    <>
      <div className="relative flex px-20 max-sm:px-2 justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Logo </h1>

        <div className="relative max-sm:hidden  justify-evenly flex gap-5">
          {menu.map((_, i) => (
            <Link to={"/"} key={i} className="text-black font-semibold text-xl">
              {_.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
