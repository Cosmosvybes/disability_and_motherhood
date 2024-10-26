import Testimonial from "./Testimonial";
import member1 from "../../../../assets/member1.jpg";
import member2 from "../../../../assets/member2.jpg";

import { useState } from "react";
const Testimonials = () => {
  const [team] = useState([
    { id: 1, image: member1, role: "Project manager" },
    { id: 2, image: member2, role: "Data collector" },
    { id: 3, image: member1, role: "PRO" },
    { id: 5, image: member2, role: "Research assistant" },
    { id: 5, image: member2, role: "Research assistant" },
    { id: 5, image: member2, role: "Research assistant" },
  ]);
  return (
    <>
      <div className="relative h-auto py-5  max-sm:py-5 ">
        <h1 className="text-left px-20 max-sm:px-5  text-5xl max-sm:text-2xl font-bold">
          Team & Contributors
        </h1>
        <div className="relative grid grid-cols-3  max-sm:grid-cols-1 gap-3 mt-5 px-20 max-sm:px-5 ">
          {team.map((_, i) => (
            <Testimonial image={_.image} key={i} role={_.role} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
