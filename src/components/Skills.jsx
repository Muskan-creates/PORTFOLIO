import React from "react";

const technicalSkills = [
  "React.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Java",
  "Python",
  "Git",
  "GitHub",
  "ServiceNow",
  "Postman",
];

const softSkills = [
  "Communication",
  "Leadership",
  "Teamwork",
  "Problem Solving",
  "Time Management",
  "Public Speaking",
  "Adaptability",
  "Critical Thinking",
  "Event Management",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,rgba(128,128,128,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.04)_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block border border-[#800020]/20 rounded-full px-6 py-3 text-[#000000] font-bold uppercase tracking-widest">
            Skills & Expertise
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#800020] to-[#4B5563] bg-clip-text text-transparent">
            Technologies I Work With
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            A blend of technical expertise and professional skills that help me
            build scalable applications and collaborate effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Technical Skills */}
          <div className="bg-[#111111] border border-[#800020]/20 rounded-3xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
            <h3 className="text-3xl font-black text-white mb-8">
              Technical Skills
            </h3>

            <div className="flex flex-wrap gap-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="px-5 py-3 rounded-full bg-[#800020]/15 border border-[#800020]/20 text-[#D4A5B0] font-medium hover:bg-[#800020] hover:text-white transition-all duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-[#111111] border border-[#800020]/20 rounded-3xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
            <h3 className="text-3xl font-black text-white mb-8">
              Soft Skills
            </h3>

            <div className="flex flex-wrap gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="px-5 py-3 rounded-full bg-[#4B5563]/20 border border-gray-600 text-gray-300 font-medium hover:bg-[#800020] hover:border-[#800020] hover:text-white transition-all duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;