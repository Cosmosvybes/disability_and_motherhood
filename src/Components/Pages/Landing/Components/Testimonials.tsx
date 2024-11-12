import Testimonial from "./Testimonial";
import member1 from "../../../../assets/member1.jpg";
import member2 from "../../../../assets/member2.jpg";
import member3 from "../../../../assets/member3.jpg";
import member4 from "../../../../assets/member4.jpg";
import member5 from "../../../../assets/member54.jpg";
import member6 from "../../../../assets/member5.jpg";
import member7 from "../../../../assets/meber7.jpg";
import { useState } from "react";

const Testimonials = () => {
  const [team] = useState([
    {
      id: 1,
      image: member1,
      role: "Research assistant",
      statement:
        "Empowering Mothers, Enabling Change: Conducting research and collecting data to amplify the voices of mothers with disabilities, promoting inclusive support and social transformation.",
    },

    {
      id: 5,
      image: member4,
      role: "Research assistant",
      statement:
        "Researching the Intersection of Motherhood and Disability: Gathering data, sharing stories, and advocating for policies that support the unique needs of mothers with disabilities.",
    },
    {
      id: 45,
      image: member5,
      role: "Research assistant",
      statement:
        "Transforming Maternal Healthcare through Disability-Inclusive Research: Our data-driven approach ensures that mothers with disabilities receive compassionate, comprehensive care.",
    },
    {
      id: 65,
      image: member2,
      role: "Research assistant",
      statement:
        "Amplifying the Experiences of Mothers with Disabilities: Our research and data collection efforts prioritize accessibility, dignity, and social justice for all mothers.",
    },
    {
      id: 65,
      image: member6,
      role: "Research assistant",
      statement:
        "Building a More Inclusive Future for Families: Through research, data analysis, and community engagement, we aim to dismantle systemic barriers facing mothers with disabilities.",
    },
    {
      id: 3,
      image: member3,
      role: "Data manager",
      statement:
        "Unlocking Opportunities for Mothers with Disabilities: Through rigorous research and data collection, we strive to break down barriers and foster a more equitable society for mothers and families.",
    },
    {
      id: 8,
      image: member7,
      role: "Research assistant",
      statement:
        "Focusing on empowering Mothers, Stronger Communities: Investigating, supporting, and celebrating maternal resilience.",
    },
  ]);
  return (
    <>
      <div className="relative bg-gray-50 h-screen max-sm:h-auto py-5 mt-10  max-sm:py-5 ">
        <h1 className="text-left max-md:text-center px-20 text-5xl max-sm:text-2xl max-md:px-2 max-sm:px-2 font-bold">
          Team & Contributors
        </h1>
        <div className="relative flex items-center justify-center gap-7 max-md:gap-2 flex-wrap max-md:px-5  max-md:flex   max-md:flex-wrap     max-sm:grid-cols-1  mt-5 px-0 max-sm:px-2">
          {team.map((_, i) => (
            <Testimonial
              image={_.image}
              key={i}
              role={_.role}
              statement={_.statement}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
