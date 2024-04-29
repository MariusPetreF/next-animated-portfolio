"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - 2013;
  const foundationYears = currentYear - 2010;

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/architecture.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl font-bold md:text-6xl text-stone-400">
            Cine suntem?
          </h1>
          {/* DESCRIPTION */}
          <p className="md:text-xl text-stone-400">
            DH STUDIO DESIGN & MORE reprezintă o echipă tânără cu o experiență
            vastă în domeniul HORECA, construcţiilor (civile şi edilitare) și
            investițiilor.
          </p>
          <p className="md:text-xl text-stone-400">
            Oferim soluții practice și răspunsuri concrete bazate pe know-how-ul
            și experiența noastra semnificativă de peste {experienceYears} ani
            în proiectare și peste {foundationYears} ani în execuție în
            construcții civile şi management de proiecte.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black bg-white">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
