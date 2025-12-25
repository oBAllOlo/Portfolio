"use client";

import TypeWriter from "./components/TypeWriter";
import ScrollAnimation from "./components/ScrollAnimation";
import Link from "next/link";

export default function Home() {
  const roles = [
    "Software Tester",
    "Manual Tester",
    "Automated Tester",
    "Java Developer",
  ];

  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <ScrollAnimation className="order-2 md:order-1">
          <p className="text-lg text-gray-500 mb-2">Hi 👋, my name is</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
            Your Name
          </h1>
          <div className="text-xl md:text-2xl mb-6 h-8">
            <TypeWriter words={roles} />
          </div>
          <p className="text-gray-500 mb-8 leading-relaxed">
            I create beautiful and functional web experiences. Passionate about
            clean code, modern design, and bringing ideas to life.
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
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-6xl shadow-2xl animate-pulse">
              👨‍💻
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center text-2xl shadow-lg animate-bounce">
              ⚡
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-xl shadow-lg animate-bounce delay-150">
              ✨
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </main>
  );
}
