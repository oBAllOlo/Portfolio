"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FacebookIcon, GitHubIcon, InstagramIcon } from "./SocialIcons";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/portfolio" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-gray-100/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold">
          <span className="text-gray-500">{"{ "}</span>
          <span className="text-gray-800 dark:text-gray-100">
            Sittipong Jongrungsumran
          </span>
          <span className="text-gray-500">{" }"}</span>
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-gray-900 dark:text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-indigo-500 after:rounded"
                    : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-lg">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`py-3 px-4 rounded-lg transition-colors ${
                  pathname === link.href
                    ? "bg-indigo-500 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Social Links & Contact */}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
              <div className="flex items-center justify-center gap-6">
                <Link
                  href="https://web.facebook.com/sittipong.jongrungsumran/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-500 transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </Link>
                <Link
                  href="https://github.com/oBAllOlo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-500 transition-colors"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </Link>
                <Link
                  href="https://www.instagram.com/byballolo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-500 transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </Link>
              </div>
              <Link
                href="mailto:sittipongj74@gmail.com"
                className="block text-center text-gray-500 hover:text-indigo-500 transition-colors text-sm"
              >
                sittipongj74@gmail.com
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
