"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Footer from "./footer";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-gray-500 to-gray-800">
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="w-fit h-fit fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default bg-black z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24 w-[calc(100vw-2rem)]">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
        <div className="h-24 w-screen bottom-0 left-0 right-0 text-white flex items-center justify-center">
          <Footer />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
