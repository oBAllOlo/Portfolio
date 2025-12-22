import TypeWriter from "./components/TypeWriter";
import Link from "next/link";

export default function Home() {
  const roles = ["Frontend Developer", "UI/UX Designer", "Creative Coder"];

  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1">
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
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-all hover:-translate-y-0.5"
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
        </div>

        {/* Avatar/Illustration */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-6xl shadow-2xl">
            👨‍💻
          </div>
        </div>
      </div>
    </main>
  );
}
