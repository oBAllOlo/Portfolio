"use client";

import Image from "next/image";
import ScrollAnimation from "../components/ScrollAnimation";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  imageUrl: string;
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      title: "Custom Keyboard System",
      description:
        "A full-featured online store with cart, checkout, and payment integration.",
      technologies: ["Next.js", "Tailwind CSS"],
      link: "https://my-ecom-rho.vercel.app/",
      imageUrl: "/images/cover_image_ecom.png",
    },
  ];

  return (
    <main className="min-h-[calc(100vh-4rem)] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
            My Projects
          </h1>
          <p className="text-gray-500 text-center mb-12 max-w-3xl mx-auto">
            Here are some of my recent projects. Each one was built with passion
            and attention to detail.
          </p>
        </ScrollAnimation>

        {/* Project Grid */}
        <div className="flex justify-center gap-6 flex-wrap">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="block group h-full max-w-sm cursor-not-allowed select-none">
                <article className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 opacity-80">
                  {/* Project Preview Image */}
                  <div className="h-40 relative overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">
                        {project.title}
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-gray-400">Built with:</span>
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </main>
  );
}
