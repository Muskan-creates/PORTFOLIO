import React from "react";

const Education = () => {
  return (
    <section
  id="education"
  className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,rgba(128,128,128,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.04)_1px,transparent_1px)] bg-[size:80px_80px]"
>
    
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#800020] to-[#4B5563] bg-clip-text text-transparent">
            Education & Certifications
          </span>

          <h2 className="bg-gradient-to-r from-[#800020] to-[#4B5563] bg-clip-text text-transparent">
            Learning & Professional Growth
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My academic journey and professional certifications that have
            strengthened my technical foundation and industry knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Education Card */}
          <div className="bg-[#111111] border border-[#800020]/30 rounded-3xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">

            <h3 className="text-2xl font-bold text-white mb-8">
              Education
            </h3>

            <div className="space-y-8">

              {/* BTech */}
              <div className="border-l-4 border-[#800020] pl-5">
                <h4 className="text-white text-lg font-semibold">
                  Bachelor of Technology
                </h4>

                <p className="text-[#800020] font-medium">
                  Computer Science Engineering (Data Science)
                </p>

                <p className="text-gray-300">
                  Institute of Technology & Management (ITM), Gwalior
                </p>

                <p className="text-gray-500 mt-1">
                  2023 – 2027 | CGPA: 8.2
                </p>
              </div>

              {/* Class 12 */}
              <div className="border-l-4 border-gray-500 pl-5">
                <h4 className="text-white text-lg font-semibold">
                  Senior Secondary (Class XII)
                </h4>

                <p className="text-gray-300">
                  Central Board of Secondary Education (CBSE)
                </p>

                <p className="text-gray-500 mt-1">
                  2022 | 74%
                </p>
              </div>

              {/* Class 10 */}
              <div className="border-l-4 border-gray-500 pl-5">
                <h4 className="text-white text-lg font-semibold">
                  Secondary School (Class X)
                </h4>

                <p className="text-gray-300">
                  Central Board of Secondary Education (CBSE)
                </p>

                <p className="text-gray-500 mt-1">
                  2020 | 89%
                </p>
              </div>

            </div>
          </div>

          {/* Certifications Card */}
          <div className="bg-[#111111] border border-[#800020]/30 rounded-3xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">

            <h3 className="text-2xl font-bold text-white mb-8">
              Certifications
            </h3>

            <div className="space-y-8">

              <div className="border-l-4 border-[#800020] pl-5">
                <h4 className="text-white text-lg font-semibold">
                  ServiceNow CSA
                </h4>

                <p className="text-gray-300">
                  Certified System Administrator
                </p>

                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-[#800020]/20 text-[#D4A5B0] text-sm">
                  Certified
                </span>
              </div>

              <div className="border-l-4 border-[#800020] pl-5">
                <h4 className="text-white text-lg font-semibold">
                  ServiceNow CAD
                </h4>

                <p className="text-gray-300">
                  Certified Application Developer
                </p>

                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-[#800020]/20 text-[#D4A5B0] text-sm">
                  Certified
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;