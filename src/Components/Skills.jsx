import React from "react";
import { FaHtml5, FaCss3Alt, FaLaravel, FaPhp, FaFigma, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center" id="Skills">
      <div className="max-w-screen-xl mx-auto p-10">
        <h2 className="text-4xl font-bold text-center mb-8">My Skill</h2>
        <div className="flex justify-center flex-wrap gap-10">

          <div className="flex flex-col items-center">
            <div className="bg-gray-50 shadow-lg p-5 rounded-full">
              <FaHtml5 className="text-red-600 text-6xl" />
            </div>
            <p className="mt-2 text-lg">HTML</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-50 shadow-lg p-5 rounded-full">
              <FaCss3Alt className="text-blue-600 text-6xl" />
            </div>
            <p className="mt-2 text-lg">CSS</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-50 shadow-lg p-5 rounded-full">
              <FaPhp className="text-blue-600 text-6xl" />
            </div>
            <p className="mt-2 text-lg">PHP</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-50 shadow-lg p-5 rounded-full">
              <FaReact className="text-cyan-500 text-6xl" />
            </div>
            <p className="mt-2 text-lg">React</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-50 shadow-lg p-5 rounded-full">
              <TbBrandJavascript className="text-yellow-500 text-6xl" />
            </div>
            <p className="mt-2 text-lg">JavaScript</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-50 shadow-lg p-5 rounded-full">
              <SiTailwindcss className="text-teal-400 text-6xl" />
            </div>
            <p className="mt-2 text-lg">Tailwind CSS</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-50 shadow-lg p-5 rounded-full">
              <FaLaravel className="text-red-600 text-6xl" />
            </div>
            <p className="mt-2 text-lg">Laravel</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
