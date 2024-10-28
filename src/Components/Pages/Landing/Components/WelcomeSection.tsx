import { useState } from "react";
import Indicator from "../../../Tools/Common/Indicator";
import mumLogo from "../../../../assets/mother.jpg";
import {
  HealthCare,
  OnlineLearning,
  User,
  GlobeSideView,
} from "react-huge-icons/solid";

const WelcomeSection = () => {
  const [indicatorMenu] = useState([
    {
      id: 1,
      icon: (
        <OnlineLearning className="text-4xl max-sm:text-2xl text-white animate-pulse" />
      ),
      title: "About the project",
      description:
        "Learn about the eductaion for the disabilities and every other information needed.",
    },
    {
      id: 2,
      icon: (
        <User className="text-4xl max-sm:text-2xl text-white animate-pulse" />
      ),
      title: "Meet the principal Investigator",
      description:
        "Learn about the eductaion for the disabilities and every other information needed.",
    },
    {
      id: 3,
      icon: (
        <GlobeSideView className="text-4xl max-sm:text-2xl text-white animate-pulse" />
      ),
      title: "Field and Research Updates",
      description:
        "Learn about the eductaion for the disabilities and every other information needed.",
    },
    {
      id: 4,
      icon: (
        <HealthCare className="text-4xl max-sm:text-2xl text-white animate-pulse" />
      ),
      title: "Support the Research",
      description:
        "Learn about the eductaion for the disabilities and every other information needed.",
    },
  ]);

  return (
    <>
      <div className="relative max-sm:mt-4  flex justify-center   py-5  items-center h-auto flex-col">
        <div className="relative w-4/5 py-2 max-sm:w-full max-sm:px-5">
          <h1 className="text-center text-black  max-sm:text-5xl max-sm:py-2 text-8xl font-extrabold">
            Get familiar with #mumAbility.
          </h1>
        </div>
        <div className="relative w-full px-20 max-sm:px-0 mt-10  max-sm:w-full">
          <div className="relative grid gap-5 mt-3 grid-cols-2 max-sm:grid-cols-1 border-black max-sm:px-2">
            {indicatorMenu.map((_, i) => (
              <Indicator
                key={i}
                icon={_.icon}
                title={_.title}
                description={_.description}
              />
            ))}
          </div>
        </div>

        <div className="relative items-center  max-sm:flex-col py-3 h-96 flex justify-between max-sm:justify-center px-20 max-sm:px-5">
          <div   id="About the project"
            className="relative  w-1/2 max-sm:object-contain max-sm:w-full  max-sm:px-2 h-full "
            style={{
              backgroundImage: `url(${mumLogo})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>


          <div
            className="relative w-full max-sm:py-0 max-sm:mt-2 py-5 max-sm:w-full max-sm:px-2"
          
          >
            <h1 className="text-center max-sm:text-left max-sm:px-0 text-black  max-sm:text-2xl max-sm:py-0 text-4xl font-extrabold">
              About the project
            </h1>

            <div className="relative max-sm:w-full   px-5 py-5 max-sm:px-0 bg-white  rounded-xl flex flex-col gap-5 max-sm:gap-4 h-auto">
              {" "}
              <p className="text-black max-sm:text-sm text-sm font-bold antialiased">
                {" "}
                The Disability and Motherhood Project is focused on
                understanding the healthcare challenges faced by mothers with
                disabilities in Nigeria. While there has been progress in
                improving maternal health overall, the specific needs and
                difficulties of mothers with disabilities haven’t received
                enough attention. This study aims to look closely at the
                obstacles they face in getting care during pregnancy,
                childbirth, and after delivery, focusing on their real-life
                experiences. The findings from this project will help guide
                policies to make healthcare fairer and more accessible for
                everyone, especially vulnerable groups, so that all mothers in
                Nigeria can receive the support they need.
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeSection;
