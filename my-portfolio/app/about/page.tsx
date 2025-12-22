import Link from "next/link";

export default function About() {
  const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "UI/UX Design",
    "Figma",
    "Git",
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description:
        "Leading frontend development team, building scalable web applications using React and Next.js.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description:
        "Developed responsive websites and web applications for various clients using modern technologies.",
    },
    {
      title: "Junior Developer",
      company: "Startup Inc.",
      period: "2018 - 2020",
      description:
        "Started my career building websites and learning modern frontend frameworks.",
    },
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      school: "University of Technology",
      period: "2016 - 2018",
      description: "Specialized in Software Engineering and Web Technologies.",
    },
    {
      degree: "Bachelor of Computer Science",
      school: "State University",
      period: "2012 - 2016",
      description:
        "Foundation in programming, algorithms, and data structures.",
    },
  ];

  return (
    <main className="min-h-[calc(100vh-4rem)] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Illustration */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm aspect-square rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-8xl shadow-lg border border-gray-200 dark:border-gray-700">
              💻
            </div>
          </div>

          {/* Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              About me.
            </h1>
            <p className="text-gray-500 mb-4 leading-relaxed">
              I&apos;m a passionate developer with a love for creating beautiful
              and functional web experiences. With expertise in frontend
              development and a keen eye for design, I bring ideas to life
              through code.
            </p>
            <p className="text-gray-500 mb-6 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or enjoying a
              good cup of coffee while brainstorming my next project.
            </p>
            <Link
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-all hover:-translate-y-0.5"
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
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Work Experience Section */}
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
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-indigo-500 border-4 border-gray-100 dark:border-gray-900"></div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700">
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
                  <p className="text-gray-500 text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
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
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
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
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-purple-500 border-4 border-gray-100 dark:border-gray-900"></div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700">
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
                  <p className="text-gray-500 text-sm">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
