"use client";

import Link from "next/link";

import { FacebookIcon, GitHubIcon, InstagramIcon } from "./SocialIcons";

export default function Sidebar() {
  return (
    <>
      {/* Left Sidebar - Social Links */}
      <aside className="fixed left-0 top-0 bottom-0 w-16 hidden md:flex flex-col items-center justify-center z-50">
        <div className="flex flex-col gap-4">
          <Link
            href="https://web.facebook.com/sittipong.jongrungsumran/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-500 hover:text-indigo-500 transition-colors"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </Link>
          <Link
            href="https://github.com/oBAllOlo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-500 hover:text-indigo-500 transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </Link>
          <Link
            href="https://www.instagram.com/byballolo/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-500 hover:text-indigo-500 transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </Link>
        </div>
      </aside>

      {/* Right Sidebar - Email */}
      <aside className="fixed right-0 top-0 bottom-0 w-16 hidden md:flex flex-col items-center justify-center z-50">
        <Link
          href="mailto:sittipongj74@gmail.com"
          className="text-gray-500 hover:text-indigo-500 transition-colors text-sm tracking-wider"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          sittipongj74@gmail.com
        </Link>
      </aside>
    </>
  );
}
