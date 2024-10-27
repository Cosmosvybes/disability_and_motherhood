import Navbar from "../../Tools/Nav/Navbar";
import Footer from "./Components/Footer";
import SupportSection from "./Components/SupportSection";
import Testimonials from "./Components/Testimonials";
import WelcomeSection from "./Components/WelcomeSection";
import image from "../../../assets/pexels-photo-6288104.webp";
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
      <div
        className="relative h-screen max-sm:h-96 object-fill    max-sm:py-5  py-10"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit: "contain",
        }}
      >
        <Navbar />{" "}
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-10 z-20 right-0 w-auto h-44 flex flex-col-reverse gap-5 rounded-tl-xl rounded-bl-xl justify-center items-center bg-black"
        >
          <p className="text-white -rotate-90 font-bold">TO-TOP</p>{" "}
          <ArrowDropUp className="inline text-white text-2xl" />
        </button>
        <div className="relative  mt-5 h-full flex  justify-start items-center  px-28 max-sm:px-2">
          <div className="relative w-auto gap-4 max-sm:gap-2 flex flex-col">
            <h1 className="text-8xl text-gray-50 font-extrabold max-sm:text-5xl">
              Embracing Disabilities,
            </h1>
            <h1 className="text-8xl font-extrabold text-gray-50 max-sm:text-5xl">
              Empowering Mothers.
            </h1>
            <div className="relative">
              <p className="text-2xl text-gray-50 max-sm:text-xl font-bold italic mt-2">
                Supporting mothers with disabilities through
              </p>
              <p className="text-2xl text-gray-50 max-sm:text-xl font-bold italic">
                every steps of the journey.
              </p>
            </div>

            <button className="w-72 mt-4 font-bold rounded-tl-3xl italic text-white text-2xl rounded-br-3xl roun py-5 px-3 hover:bg-gray-800 max-sm:w-52 max-sm:py-3 transition duration-500 bg-black ">
              Learn More
            </button>
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
