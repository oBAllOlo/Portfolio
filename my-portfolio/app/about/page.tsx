"use client";

import Link from "next/link";
import ScrollAnimation from "../components/ScrollAnimation";
import SkillBar from "../components/SkillBar";

export default function About() {
  // Skill categories for SVGL
  const skillCategories = [
    {
      title: "Computer Languages",
      skills: [
        { name: "JavaScript", icon: "javascript.svg" },
        { name: "TypeScript", icon: "typescript.svg" },
        { name: "Java", icon: "java.svg" },
        { name: "HTML5", icon: "html5.svg" },
        { name: "CSS3", icon: "css.svg" },
        { name: "C", icon: "c.svg" },
        { name: "C#", icon: "csharp.svg" },
        { name: "Python", icon: "python.svg" },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React", icon: "react_dark.svg" },
        { name: "Next.js", icon: "nextjs_icon_dark.svg" },
        { name: "Vite", icon: "vite.svg" },
        { name: "Node.js", icon: "nodejs.svg" },
        { name: "Spring Boot", icon: "spring.svg" },
        { name: "Playwright", icon: "playwright.svg" },
        { name: "Tailwind CSS", icon: "tailwindcss.svg" },
        { name: "Bootstrap", icon: "bootstrap.svg" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "PostgreSQL", icon: "postgresql.svg" },
        { name: "MySQL", icon: "mysql-icon-dark.svg" },
        { name: "MongoDB", icon: "mongodb-icon-dark.svg" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "VS Code", icon: "vscode.svg" },
        { name: "Eclipse IDE", icon: "eclipse.svg" },
        { name: "GitHub", icon: "github_dark.svg" },
        { name: "Git", icon: "git.svg" },
      ],
    },
  ];

  const experiences = [
    {
      title: "Software Tester",
      company: "Think Bit Company Limited",
      period: "September 2025 - Present",
      description:
        "Responsible for manual and automated system testing, validating data accuracy within the system, writing test cases, and developing automated tests using Playwright and JavaScript.",
      responsibilities: [
        "Collaborated with the development team to identify, report, and resolve system defects",
      ],
    },
    {
      title: "Internship: High-Performance Programming with Huge Database",
      company: "Innovative Software Consulting",
      period: "November 2024 - March 2025",
      description:
        "During my internship at Innovative Software Consulting, I worked on optimizing data import/export processes using PostgreSQL 16 on CentOS 9. The project aimed at improving the handling of large datasets (50 million records across 4 partitioned files) through various methods, including Batch Insert, Thread, and Parallel Processing.",
      responsibilities: [
        "Optimized data import/export processes using Batch Insert, Thread, Parallel Processing, and Internal Queue",
        "Developed and optimized the COPY command for faster data handling",
        "Collaborated with the team to ensure efficient data export to 4 files",
        "Gained practical experience with Java, PostgreSQL, and database optimization techniques",
      ],
    },
    {
      title: "Project: Custom Keyboard System",
      company: "Kasetsart University Kamphaeng Saen Campus",
      period: "June 2024 - November 2024",
      description:
        "Developed as part of my graduation project at Kasetsart University, Kamphaeng Saen Campus, the Custom Keyboard System is a web-based application that allows users to customize every component of a keyboard, including keycaps, switches, and base frames. The platform also features integrated e-commerce functionality to support the purchase of fully customized keyboards.",
      responsibilities: [
        "Developed a fully functional web application for complete keyboard customization",
        "Integrated e-commerce features to enable direct purchasing through the platform",
        "Collaborated in a team of 2 developers with a primary focus on web development",
        "Utilized React.js and JavaScript (JS) for the front end Node.js and Express for the back end; and MongoDB for database management",
        "Gained hands-on experience in full-stack development, covering both front-end and back-end technologies",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "Kasetsart University Kamphaeng Saen Campus",
      period: "2021 - 2024",
      description: "Computer Science program with GPA: 2.73",
    },
    {
      degree: "High School Diploma - Computer Science",
      school: "Mattayomthanbinkamphangsaen School",
      period: "2018 - 2021",
      description: "Computer Science program with GPA: 3.16",
    },
  ];

  return (
    <main className="min-h-[calc(100vh-4rem)] py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm aspect-square rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <img
                  src="/images/me_2.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="max-w-lg">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                About me
              </h1>
              <p className="text-gray-500 mb-4 leading-relaxed text-justify">
                I am a Computer Science graduate from Kasetsart University. My
                journey started with developing a web application for my Custom
                Keyboard project using React and Node.js, followed by an
                internship where I worked with Java and PostgreSQL to handle
                large databases.
              </p>
              <p className="text-gray-500 mb-6 leading-relaxed text-justify">
                These experiences helped me understand how software is built
                from both front-end and back-end perspectives. Now, I use this
                understanding in Software Testing, applying my coding skills to
                write automated tests with Playwright and ensure the system
                works reliably.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/documents/Curriculum Vitae.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  DOWNLOAD CV
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m4-5l5 5 5-5m-5 5V3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/documents/transcript.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-transparent text-indigo-500 font-medium rounded-lg border-2 border-indigo-500 hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-900/30 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  DOWNLOAD TRANSCRIPT
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m4-5l5 5 5-5m-5 5V3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Skills Section - Categorized */}
        <ScrollAnimation delay={100}>
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 italic">
              Skills & Proficiencies
            </h2>
            <div className="space-y-8">
              {skillCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                    {category.skills.map((skill, index) => {
                      const isDarkIcon = [
                        "github_dark.svg",
                        "mysql-icon-dark.svg",
                        "mongodb-icon-dark.svg",
                        "nextjs_icon_dark.svg",
                      ].includes(skill.icon);
                      return (
                        <div
                          key={index}
                          className="group aspect-square bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-3 hover:-translate-y-1"
                          title={skill.name}
                        >
                          <img
                            src={`https://svgl.app/library/${skill.icon}`}
                            alt={skill.name}
                            className={`w-10 h-10 ${isDarkIcon ? "icon-invert-light" : ""}`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Work Experience Section */}
        <ScrollAnimation delay={300}>
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-indigo-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Work Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-6 border-l-2 border-indigo-500/30 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-indigo-500 border-4 border-gray-100 dark:border-gray-900"></div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <span className="px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-indigo-500 font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 text-sm text-justify">
                      {exp.description}
                    </p>
                    {exp.responsibilities &&
                      exp.responsibilities.length > 0 && (
                        <ul className="mt-3 space-y-1">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li
                              key={respIndex}
                              className="text-gray-500 text-sm flex items-start gap-2 text-justify"
                            >
                              <span className="text-indigo-500 mt-1">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Education Section */}
        <ScrollAnimation delay={400}>
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-6 border-l-2 border-purple-500/30 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-purple-500 border-4 border-gray-100 dark:border-gray-900"></div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-purple-500 font-medium mb-2">
                      {edu.school}
                    </p>
                    <p className="text-gray-500 text-sm text-justify">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </main>
  );
}
