import React from "react";
import Image from "next/image";
const Skill = () => {
  return (
    <div>
      <section id="skills" className="bg-[#0a0f1a] text-white py-10">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-10 mt-10">
          My Skills & Technologies
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Programming */}
          <div className="bg-[#1F2833] p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">
              Programming
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { name: "Java", level: "Intermediate", icon: "/icons/java.png" },
                { name: "JavaScript", level: "Advanced", icon: "/icons/js.png" },
                { name: "DSA (Trees)", level: "Intermediate", icon: "/icons/dsa.png" },
              ].map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 bg-[#0B0C10] p-3 rounded-xl">
                  <Image src={skill.icon} alt={skill.name} width={32} height={32} className="w-8 h-8" />
                  <div>
                    <p className="font-semibold">{skill.name}</p>
                    <p className="text-sm text-gray-400">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="bg-[#1F2833] p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">
              Frontend Development
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { name: "HTML5", level: "Advanced", icon: "/icons/html5.png" },
                { name: "CSS3", level: "Advanced", icon: "/icons/css3.png" },
                { name: "Tailwind CSS", level: "Advanced", icon: "/icons/tailwind.png" },
                { name: "React.js", level: "Advanced", icon: "/icons/react.png" },
                { name: "Next.js", level: "Intermediate", icon: "/icons/next.png" },
              ].map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 bg-[#0B0C10] p-3 rounded-xl">
                  <Image src={skill.icon} alt={skill.name} width={32} height={32} className="w-8 h-8" />
                  <div>
                    <p className="font-semibold">{skill.name}</p>
                    <p className="text-sm text-gray-400">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-[#1F2833] p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">
              Backend Development
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { name: "Node.js", level: "Intermediate", icon: "/icons/nodejs.png" },
                { name: "Express.js", level: "Intermediate", icon: "/icons/express.png" },
                { name: "Mongoose", level: "Intermediate", icon: "/icons/mongoose.png" },
              ].map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 bg-[#0B0C10] p-3 rounded-xl">
                  <Image src={skill.icon} alt={skill.name} width={32} height={32} className="w-8 h-8" />
                  <div>
                    <p className="font-semibold">{skill.name}</p>
                    <p className="text-sm text-gray-400">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="bg-[#1F2833] p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">
              Databases & Tools
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { name: "MongoDB", level: "Intermediate", icon: "/icons/mongodb.png" },
                { name: "MySQL", level: "Intermediate", icon: "/icons/mysql.png" },
                { name: "Git & GitHub", level: "Intermediate", icon: "/icons/github.png" },
                { name: "Postman / Thunder Client", level: "Intermediate", icon: "/icons/postman.png" },
              ].map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 bg-[#0B0C10] p-3 rounded-xl">
                  <Image src={skill.icon} alt={skill.name} width={32} height={32} className="w-8 h-8" />
                  <div>
                    <p className="font-semibold">{skill.name}</p>
                    <p className="text-sm text-gray-400">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Skill;
