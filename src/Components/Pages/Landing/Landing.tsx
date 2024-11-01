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
import { ArrowDropUp, GlobeSideView } from "react-huge-icons/solid";

const Landing = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="relative  h-auto w-full max-sm:h-auto   max-sm:px-0 ">
        <Navbar />{" "}
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-10 z-40 right-0 w-12 h-40 flex flex-col-reverse gap-6 rounded-tl-md rounded-bl-md justify-center items-center bg-black"
        >
          <p className="text-white -rotate-90 text-sm font-normal">SCROLL UP</p>{" "}
          <ArrowDropUp className="inline text-red-600 -ml-3 text-2xl animate-bounce duration-50" />
        </button>
        
        <div className="relative max-lg:px-10 lg:object-contain max-2xl:px-5  max-sm:gap-0 mb-2 max-md:rounded-none lg:h-[1280px]  h-screen max-sm:h-auto max-md:h-1/2 max-md:px-0 max-md:flex-col-reverse max-lg:flex-col-reverse flex justify-between  px-28 max-sm:px-0">


          <div
            className="relative max-md:w-full h-full rounded-br-none max-md:rounded-br-none rounded-tr-none flex justify-start px-5 max-sm:px-2 max-md:px-3 -z-10 max-sm:w-full max-lg:h-96 max-lg:w-full opacity-95  rounded-xl max-sm:rounded-none items-center  w-4/5"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              objectFit: "contain",
            }}
          >
            <div className="relative w-full py-3  gap-4 max-sm:gap-2 flex flex-col">
              <h1 className="text-8xl max-md:text-4xl  text-black font-extrabold max-sm:text-2xl">
                Disability &
              </h1>
              <h1 className="text-8xl max-md:text-4xl font-extrabold text-black max-sm:text-2xl">
                Motherhood
              </h1>
              <div className="relative">
                <p className="text-2xl text-black max-sm:text-xl font-bold  mt-2">
                  Supporting mothers with disabilities using evidence-based
                  research through #MumAbility initiative.
                </p>
              </div>
            </div>
          </div>

          <div className="relative  w-full  lg:w-1/4 flex rounded-bl-none rounded-tl-none max-sm:rounded-none bg-gradient-to-br from-black to-gray-800 text-white  max-md:w-full  -z-10  justify-center items-center h-full max-sm:h-44 max-md:h-52   max-md:rounded-none rounded-xl">
            <h1 className="text-4xl animate-pulse text-white max-md:text-text-black max-sm:text-white  max-sm:text-sm font-semibold ">
              RESEARCH <GlobeSideView className="inline text-2xl text-white" />
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
      </section>
    </>
  );
};

export default Landing;
