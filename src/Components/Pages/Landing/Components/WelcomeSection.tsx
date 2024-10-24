import { useState } from "react";
import Indicator from "../../../Tools/Common/Indicator";
import {
  HealthCare,
  SpringNotes,
  UsersTriple,
  BookInfo,
} from "react-huge-icons/solid";

const WelcomeSection = () => {
  const [indicatorMenu] = useState([
    {
      id: 1,
      icon: (
        <SpringNotes className="text-4xl max-sm:text-2xl text-white animate-pulse" />
      ),
      title: "Education",
      description:
        "Learn about the eductaion for the disabilities and every other information needed.",
    },
    {
      id: 2,
      icon: (
        <BookInfo className="text-4xl max-sm:text-2xl text-white animate-pulse" />
      ),
      title: "Digital Health",
      description:
        "Learn about the eductaion for the disabilities and every other information needed.",
    },
    {
      id: 3,
      icon: (
        <UsersTriple className="text-4xl max-sm:text-2xl text-white animate-pulse" />
      ),
      title: "Community",
      description:
        "Learn about the eductaion for the disabilities and every other information needed.",
    },
    {
      id: 4,
      icon: (
        <HealthCare className="text-4xl max-sm:text-2xl text-white animate-pulse" />
      ),
      title: "Support",
      description:
        "Learn about the eductaion for the disabilities and every other information needed.",
    },
  ]);

  return (
    <>
      <div className="relative max-sm:mt-10  flex justify-center   py-2 items-center h-auto flex-col">
        <div className="relative w-1/2 py-2 max-sm:w-full max-sm:px-5">
          <h1 className="text-center text-black  max-sm:text-6xl max-sm:py-2 text-8xl font-extrabold">
            Get familiar with #mumAbility.
          </h1>

          <p className="text-center text-xl max-sm:text-sm mt-3 text-gray-700 antialiased">
            {" "}
            This is a project dedicated to uplifting and supporting mothers with
            disabilities. Whether you are seeking resources , community support
            and personal empowering stories, you are in the right place.
          </p>
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
      </div>
    </>
  );
};

export default WelcomeSection;
