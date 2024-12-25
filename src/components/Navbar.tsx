import React from "react";
import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  return (
    <div className="fixed z-[999] w-full py-5 select-none">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-5 sm:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: Power4.easeInOut, duration: 2 }}
          className="logo"
        >
          <svg
            width="72"
            height="32"
            viewBox="0 0 72 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 sm:w-16"
          >
            <path
              d="M0 31.8891V0.110901H10.6667C15.4667 0.110901 19.2 1.47757 21.8667 4.2109C24.5333 6.94424 25.8667 10.7442 25.8667 15.6109C25.8667 20.4776 24.5333 24.2776 21.8667 27.0109C19.2 29.7442 15.4667 31.1109 10.6667 31.1109H0V31.8891ZM10.6667 30.3327C15.0667 30.3327 18.5333 29.0994 21.0667 26.6327C23.6 24.1661 24.8667 20.5327 24.8667 15.7327C24.8667 10.9327 23.6 7.29924 21.0667 4.8326C18.5333 2.36594 15.0667 1.1326 10.6667 1.1326H1V30.3327H10.6667Z"
              fill="currentColor"
            />
            <path
              d="M71.4667 31.8891H70.4667L45.4667 1.1326V31.8891H44.4667V0.110901H45.4667L70.4667 30.8674V0.110901H71.4667V31.8891Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
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
            "About Us",
            "Schedules",
            "Buy Tickets",
            "Hotel",
            "Video Upload",
            "Sponsors",
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
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-white text-sm uppercase tracking-wider font-medium"
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
