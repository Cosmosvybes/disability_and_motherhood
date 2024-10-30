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
      description: "Read about the project.",
    },
    {
      id: 2,
      icon: (
        <User className="text-4xl max-sm:text-2xl text-white animate-pulse" />
      ),
      title: "Meet the Principal Investigator",
      description:
        "Learn about the project principal investigator and his works",
    },
    {
      id: 3,
      icon: (
        <GlobeSideView className="text-4xl max-sm:text-2xl text-white animate-pulse" />
      ),
      title: "Field and Research Updates",
      description: "Check the field and research updates",
    },
    {
      id: 4,
      icon: (
        <HealthCare className="text-4xl max-sm:text-2xl text-white animate-pulse" />
      ),
      title: "Support the Project",
      description: "Become part of the journey",
    },
  ]);

  return (
    <>
      <div className="relative max-sm:mt-4 bg-gray-50  flex justify-start   py-5  items-center h-auto flex-col">
        <div className="relative w-1/2 py-2 max-sm:py-0 max-sm:w-full ">
          <h1 className="text-center text-black max-sm:text-center  max-sm:text-4xl max-md:text-3xl max-sm:py-2 text-4xl font-extrabold">
            Get familiar with <span className="text-gray-500 animate-pulse"> #mumAbility </span> initiative.
          </h1>
        </div>
        <div className="relative w-full px-20 max-sm:px-0 mt-10 max-md:px-5  max-sm:w-full">
          <div className="relative grid gap-5 mt-3 mb-3 grid-cols-2 max-sm:grid-cols-1 border-black max-sm:px-2">
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

        <div className="relative items-center   max-sm:flex-col py-3 h-auto max-md:h-auto max-md:px-5  flex justify-between max-sm:justify-center px-20 max-sm:px-2">
          <div
            id="About the project"
            className="relative h-44  w-1/2 max-sm:ml-6 max-sm:object-cover max-sm:w-full   max-sm:px-2  "
            style={{
              backgroundImage: `url(${mumLogo})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>

          <div className="relative w-full max-sm:py-4 max-sm:mt-4 py-5 max-sm:w-full max-sm:px-2">
            <h1 className="text-center max-sm:text-center max-sm:px-1 text-black  max-sm:text-2xl max-sm:py-3 max-md:py-4 text-4xl font-extrabold">
              About the project
            </h1>

            <div className="relative max-sm:w-full max-md:px-0   px-5 py-5 max-sm:px-2 bg-white  rounded-xl flex flex-col gap-2 max-sm:gap-4 h-auto">
              {" "}
              <p className="text-black max-sm:text-sm text-xl font-bold antialiased">
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
