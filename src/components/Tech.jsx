import React from "react";
import { useNavigate } from "react-router-dom";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.slice(0, 13).map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      <button
        className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        onClick={() => navigate("/all-skills")}
      >
        View All Skills
      </button>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");