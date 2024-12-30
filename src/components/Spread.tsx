import { motion } from "framer-motion";
import React from "react";

function Spread() {
  return (
    <div className="mx-auto my-10 w-full max-w-2xl bg-white text-center text-black">
      <div className="head mt-36 flex items-center justify-center gap-3 text-center">
        <svg
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 sm:w-6"
          data-v-669b4a84=""
        >
          <path
            d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
            fill="currentColor"
            data-v-669b4a84=""
          ></path>
        </svg>
        <h3 className="sm:text-lg">In the media</h3>
      </div>
      <div className="mt-5">
        {["Spread", "the news"].map((v, i) => {
          return (
            <h1
              className="overflow-hidden py-5 text-5xl capitalize tracking-tight sm:text-9xl"
              key={i}
            >
              <motion.span
                initial={{ rotate: 90, y: "100%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  duration: 0.8,
                  delay: i * 0.5,
                }}
                className="inline-block origin-left"
              >
                {v}
              </motion.span>
            </h1>
          );
        })}
        <p className="mt-8 px-10 text-lg sm:mt-16 sm:px-20">
          Find out more about our work on these leading design and technology
          platforms.
        </p>
        {/* <a
          href="#"
          className="mt-10 inline-block cursor-pointer border-b-[1px] border-black text-lg text-black"
        >
          Browse all news
        </a> */}
      </div>
    </div>
  );
}

export default Spread;
