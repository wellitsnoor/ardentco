import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll >= 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full h-16 flex fixed z-30 duration-300 ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className={`flex justify-center items-center pl-10`}
        >
          <Link className="text-xl font-bold cursor-pointer " href="/">
            Ardent Co.
          </Link>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          className={`flex ml-auto text-center text-black justify-center items-center mr-10 duration-300 transition-all`}
        >
          <Link
            href="#contact"
            className="flex justify-center items-center w-32 h-10 bg-yellow-400 rounded-full font-medium duration-300"
          >
            {"Let's Connect"}
          </Link>
        </motion.div>
      </div>
    </>
  );
}
