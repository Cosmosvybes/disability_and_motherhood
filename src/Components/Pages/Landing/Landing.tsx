import Navbar from "../../Tools/Nav/Navbar";
import Footer from "./Components/Footer";
import SupportSection from "./Components/SupportSection";
import Testimonials from "./Components/Testimonials";
import WelcomeSection from "./Components/WelcomeSection";
import image from "../../../assets/pexels-photo-3825527.jpg";
import Extras from "./Components/Extras";
import ButtomExtras from "./Components/ButtomExtras";
import MeetPrincipal from "./Components/MeetPrincipal";
import Funders from "./Components/Funders";
import { ArrowDropUp } from "react-huge-icons/solid";

const Landing = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* <div className="relative h-screen border flex justify-between"></div> */}
      <div className="relative h-screen max-sm:h-96 object-fill    max-sm:py-5  py-10">
        <Navbar />{" "}
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-10 z-20 right-0 w-12 h-28 flex flex-col-reverse gap-6 rounded-tl-md rounded-bl-md justify-center items-center bg-black"
        >
          <p className="text-white -rotate-90 text-xs font-light">SCROLL UP</p>{" "}
          <ArrowDropUp className="inline text-red-600 -ml-3 text-2xl animate-bounce duration-100" />
        </button>

        
        <div className="relative  max-sm:gap-0.5 mb-2  mt-10 h-full flex justify-between items-center  px-28 max-sm:px-2">
          <div
            className="relative flex justify-start px-5 max-sm:px-2 max-md:px-3 -z-10 max-sm:w-full  opacity-95  rounded-xl items-center h-full  w-4/5"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              objectFit: "contain",
            }}
          >
            <div className="relative w-auto  gap-4 max-sm:gap-2 flex flex-col">
              <h1 className="text-8xl text-black font-extrabold max-sm:text-5xl">
                Disability &
              </h1>
              <h1 className="text-8xl font-extrabold text-black max-sm:text-5xl">
                Motherhood
              </h1>
              <div className="relative">
                <p className="text-2xl text-black max-sm:text-xl font-bold italic mt-2">
                  Supporting mothers with disabilities using evidence-based
                  research through #MumAbility
                </p>
              </div>
            </div>
            <div className="absolute rounded-full w-44 h-44  max-sm:h-14 max-sm:w-14 bg-white -right-8 -bottom-4"></div>
            <div className="absolute rounded-full w-44 h-44  max-sm:h-14 max-sm:w-14 bg-white  -right-10 -top-4"></div>
          </div>

          <div
            draggable
            className="relative  -z-10 flex rounded-bl-none bg-black justify-center items-center h-full w-1/6 max-sm:w-full rounded-xl"
          >
            {" "}
            <div className="absolute rounded-full w-44 h-44  max-sm:h-14 max-sm:w-14 bg-white -left-7 -top-5"></div>
            <h1 className="text-4xl text-white -rotate-90 max-sm:text-sm font-semibold ">
              RESEARCH
            </h1>
          </div>
        </div>
        <WelcomeSection />
        <Extras />
        <SupportSection />
        <ButtomExtras />
        <MeetPrincipal />
        <Testimonials />
        <Funders />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
