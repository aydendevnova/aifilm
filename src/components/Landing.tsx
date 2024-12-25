import { motion } from "framer-motion";
import React from "react";

function Landing() {
  return (
    <div className="relative w-full h-[100vh] bg-black">
      <div className="picture w-full h-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          className="w-full h-full object-cover opacity-50"
          alt="AI Film Festival"
        />
      </div>

      <div className="absolute top-0 w-full">
        <div className="text-white max-w-screen-2xl h-full mx-auto px-5 sm:px-24">
          <div className="para leading-tight mt-32 sm:mt-[12rem]">
            {[
              "AI Film 3 Festival",
              "Where Innovation Meets Imagination",
              "Glendale, Arizona • October 31 - November 2",
            ].map((items, index) => {
              return (
                <p
                  key={index}
                  className="text-xl sm:text-3xl overflow-hidden font-light"
                >
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 0.5,
                      delay: index * 0.2,
                    }}
                    className="inline-block"
                  >
                    {items}
                  </motion.span>
                </p>
              );
            })}
          </div>
          <div className="headings mt-7">
            {["Create.", "Innovate.", "Transform."].map((items, index) => {
              return (
                <h1
                  key={index}
                  className="text-6xl sm:text-[8rem] font-bold -mt-8 py-6 tracking-tight leading-none overflow-hidden"
                >
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 1,
                      delay: 1 + index * 0.2,
                    }}
                    className="inline-block"
                  >
                    {items}
                  </motion.span>
                </h1>
              );
            })}
          </div>
          <div className="stats mt-16 sm:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="stat">
              <h3 className="text-4xl sm:text-5xl font-bold">157+</h3>
              <p className="text-sm sm:text-base mt-2">Films Showcased</p>
            </div>
            <div className="stat">
              <h3 className="text-4xl sm:text-5xl font-bold">200+</h3>
              <p className="text-sm sm:text-base mt-2">Art Exhibits</p>
            </div>
            <div className="stat">
              <h3 className="text-4xl sm:text-5xl font-bold">40+</h3>
              <p className="text-sm sm:text-base mt-2">Industry Speakers</p>
            </div>
            <div className="stat">
              <h3 className="text-4xl sm:text-5xl font-bold">400+</h3>
              <p className="text-sm sm:text-base mt-2">Total Attendees</p>
            </div>
          </div>
          <div className="cta-buttons mt-16 flex gap-6">
            <a
              href="#tickets"
              className="bg-white text-black px-8 py-4 text-lg font-medium rounded-full hover:bg-opacity-90 transition-all"
            >
              Buy Tickets
            </a>
            <a
              href="#virtual"
              className="border border-white px-8 py-4 text-lg font-medium rounded-full hover:bg-white hover:text-black transition-all"
            >
              Virtual Experience
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
