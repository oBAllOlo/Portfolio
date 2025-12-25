"use client";

import TypeWriter from "./components/TypeWriter";
import ScrollAnimation from "./components/ScrollAnimation";
import Link from "next/link";

export default function Home() {
  const roles = [
    "Software Tester",
    "Java Developer",
    "Full-stack development"
  ];

  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <ScrollAnimation className="order-2 md:order-1 max-w-lg">
          <p className="text-lg text-gray-500 mb-2">Hi 👋, my name is</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
            Sittipong Jongrungsumran
          </h1>
          <div className="text-xl md:text-2xl mb-6 h-8">
            <TypeWriter words={roles} />
          </div>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Computer Science graduate skilled in Java and full-stack technologies with professional experience in automated software testing. Adept at leveraging development expertise to build efficient testing frameworks and optimize system performance.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              ABOUT ME
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
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-indigo-500 dark:hover:border-indigo-500 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-all hover:-translate-y-0.5"
            >
              VIEW WORK
            </Link>
          </div>
        </ScrollAnimation>

        {/* Avatar/Illustration */}
        <ScrollAnimation
          delay={200}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-2xl overflow-hidden">
              <img
                src="/me.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute top-0 right-0 md:-top-4 md:-right-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-lg animate-bounce">
              <img
                src="https://svgl.app/library/java.svg"
                alt="Java"
                className="w-10 h-10"
              />
            </div>
            <div className="absolute bottom-0 left-0 md:-bottom-4 md:-left-4 w-14 h-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-150">
              <img
                src="https://svgl.app/library/javascript.svg"
                alt="JavaScript"
                className="w-8 h-8"
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </main>
  );
}
