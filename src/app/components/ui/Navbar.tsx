"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar({intersecting}) {

  return (
    <>
      <div
        className={`h-16 flex w-full flex-row ml-auto fixed z-30 duration-300 bg-blend-difference ${
          intersecting ? "text-black" : "text-white"
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
          className={`flex justify-center items-center md:pl-10 pl-5`}
        >
          <Link
            className="md:text-xl text-lg font-bold cursor-pointer mix-blend-difference"
            href="/"
          >
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
          className={`flex ml-auto text-center text-black justify-center items-center md:mr-10 mr-5 duration-300 transition-all`}
        >
          <Link
            href="/#contact"
            className="flex justify-center items-center md:w-32 md:h-10 w-28 h-9 bg-ardent rounded-full font-medium duration-300 md:text-base text-sm text-white"
          >
            {"Let's Connect"}
          </Link>
        </motion.div>
      </div>
    </>
  );
}
