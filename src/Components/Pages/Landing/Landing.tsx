import Navbar from "../../Tools/Nav/Navbar";
import Footer from "./Components/Footer";
import SupportSection from "./Components/SupportSection";
import Testimonials from "./Components/Testimonials";
import WelcomeSection from "./Components/WelcomeSection";

const Landing = () => {
  return (
    <>
      <div className="relative h-screen max-sm:h-96 max-sm:py-5  py-10">
        <Navbar />

        <div className="relative  mt-5 h-full flex  justify-start items-center max-sm:items-start px-28 max-sm:px-2">
          <div className="relative w-auto gap-4 max-sm:gap-2 flex flex-col">
            <h1 className="text-8xl font-extrabold max-sm:text-5xl">
              Embracing Disabilities,
            </h1>
            <h1 className="text-8xl font-extrabold max-sm:text-5xl">
              Empowering Mothers.
            </h1>
            <div className="relative">
              <p className="text-2xl max-sm:text-xl font-bold italic mt-2">
                Supporting mothers with disabilities through
              </p>
              <p className="text-2xl max-sm:text-xl font-bold italic">
                every steps of the journey.
              </p>
            </div>

            <button className="w-52 mt-2 font-bold rounded-tl-3xl italic text-white text-2xl rounded-br-3xl roun py-3 px-3 bg-black ">
              Learn More
            </button>
          </div>
        </div>

        <WelcomeSection />
        <SupportSection />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
