// src/pages/About.jsx
import React from "react";
import Button from "../components/Button";
import { technicalSkills, experience, achievements } from "../data/projects";

const About = () => {
  return (
    <section className="py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent mb-6 font-jetbrains">
            About Me
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed font-jetbrains">
            Passionate developer with expertise in full-stack development,
            machine learning, and AI solutions.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-emerald-400 mb-8 font-jetbrains">
            Experience
          </h2>
          <ul className="space-y-6">
            {experience.map((item, idx) => (
              <li
                key={idx}
                className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-10 font-jetbrains"
              >
                <div className="flex justify-between flex-col md:flex-row">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-emerald-300">{item.company}</p>
                  </div>
                  <div className="text-gray-400 mt-3 md:mt-0">
                    {item.period}
                  </div>
                </div>
                <p className="mt-3 text-gray-300">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Skills */}
        <div className="mb-12">
          <h2 className="text-2xl font-jetbrains font-bold text-emerald-400 mb-6">
            Technical Skills
          </h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-white mb-2">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.programmingLanguages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 bg-emerald-700/20 text-emerald-300 rounded-full text-sm font-jetbrains"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Web Development</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.webDevelopment.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-cyan-700/20 text-cyan-200 rounded-full text-sm font-jetbrains"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Data Science</h3>
              <div className="mb-2">
                <div className="text-emerald-400 mb-1">Visualization:</div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {technicalSkills.dataScience.visualization.map((v) => (
                    <span
                      key={v}
                      className="bg-emerald-500/10 text-emerald-300 px-2 py-1 rounded-full text-xs"
                    >
                      {v}
                    </span>
                  ))}
                </div>
                <div className="text-emerald-400 mb-1">ML/DL:</div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {technicalSkills.dataScience.mlDl.map((v) => (
                    <span
                      key={v}
                      className="bg-emerald-500/10 text-emerald-300 px-2 py-1 rounded-full text-xs"
                    >
                      {v}
                    </span>
                  ))}
                </div>
                <div className="text-emerald-400 mb-1">NLP:</div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {technicalSkills.dataScience.nlp.map((v) => (
                    <span
                      key={v}
                      className="bg-emerald-500/10 text-emerald-300 px-2 py-1 rounded-full text-xs"
                    >
                      {v}
                    </span>
                  ))}
                </div>
                <div className="text-emerald-400 mb-1">Statistics:</div>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.dataScience.statistics.map((v) => (
                    <span
                      key={v}
                      className="bg-emerald-500/10 text-emerald-300 px-2 py-1 rounded-full text-xs"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">MLOps</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.mlops.map((tool) => (
                  <span
                    key={tool}
                    className="bg-emerald-600/10 text-emerald-300 px-2 py-1 rounded-full text-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Achievements Section */}
        <div>
          <h2 className="text-3xl font-bold text-emerald-400 mb-8 font-jetbrains">
            Achievements & Certifications
          </h2>
          <ul className="space-y-6">
            {achievements.map((item, idx) => (
              <li
                key={idx}
                className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-10 font-jetbrains"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
                <p className="text-xs text-emerald-300">{item.type}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-10 font-jetbrains">
          <h3 className="text-3xl font-bold mb-4 text-white">
            Let&apos;s Connect!
          </h3>
          <p className="mb-8 text-gray-300 max-w-xl mx-auto">
            Interested in collaborating? Feel free to reach out via email or
            social media.
          </p>
          <div className="flex justify-center gap-6">
            <Button
              href="mailto:anisshaikh.dev@gmail.com"
              variant="primary"
              size="large"
            >
              Email Me
            </Button>
            <Button href="/resume.pdf" variant="accent" size="large" download>
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
