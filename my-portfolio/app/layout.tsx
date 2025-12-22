import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BackToTop from "./components/BackToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "My Portfolio | Developer & Designer",
  description:
    "Welcome to my portfolio. I am a creative developer and designer building digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300`}
      >
        <Sidebar />
        <div className="ml-0 mr-0 md:ml-16 md:mr-16 min-h-screen">
          <Navbar />
          {children}
        </div>
        <BackToTop />
      </body>
    </html>
  );
}
