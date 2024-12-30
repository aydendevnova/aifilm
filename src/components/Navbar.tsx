"use client";
import React from "react";
import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import { IoMdMenu } from "react-icons/io";
import Image from "next/image";

function Navbar() {
  return (
    <div className="absolute z-[999] w-full select-none bg-orange-600/30 py-5 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-5 sm:px-24">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: Power4.easeInOut, duration: 2 }}
          href="/"
          className="logo"
        >
          <Image src="/logo.png" alt="Logo" width={128} height={42} />
        </motion.a>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ ease: Power4.easeInOut, duration: 0.7 }}
          className="sm:hidden"
        >
          <IoMdMenu className="h-30" />
        </motion.span>
        <motion.div className="links hidden sm:flex sm:items-center sm:gap-8">
          {[
            { name: "About Us", path: "/about" },
            { name: "Schedules", path: "/schedules" },
            { name: "Buy Tickets", path: "/tickets" },
            // { name: "Hotel", path: "/hotel" },
            { name: "Video Upload", path: "https://aifilm3.com/video-upload/" },
            // { name: "Sponsors", path: "/sponsors" },
          ].map((item, index) => (
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              transition={{
                ease: Power4.easeInOut,
                duration: 0.7,
                staggerChildren: 0.3,
                delay: index * 0.1,
              }}
              key={index}
              href={item.path}
              className="text-sm font-medium uppercase tracking-wider text-white"
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
