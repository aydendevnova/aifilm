import { motion } from "framer-motion";
import React from "react";

function Landing() {
  return (
    <div className="relative h-[100vh] w-full bg-black">
      <div className="picture h-full w-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          className="h-full w-full object-cover opacity-50"
          alt="AI Film Festival"
        />
      </div>

      <div className="absolute top-0 w-full">
        <div className="mx-auto h-full max-w-screen-2xl px-5 text-white sm:px-24">
          <div className="para mt-32 leading-tight sm:mt-[12rem]">
            {[
              "AI Film 3 Festival",
              "Where Innovation Meets Imagination",
              "Glendale, Arizona • October 31 - November 2",
            ].map((items, index) => {
              return (
                <p
                  key={index}
                  className="overflow-hidden text-xl font-light sm:text-3xl"
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
                  className="-mt-8 overflow-hidden py-6 text-6xl font-bold leading-none tracking-tight sm:text-[8rem]"
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
          <div className="stats mt-16 grid grid-cols-2 gap-8 sm:mt-24 sm:grid-cols-4">
            <div className="stat">
              <h3 className="text-4xl font-bold sm:text-5xl">157+</h3>
              <p className="mt-2 text-sm sm:text-base">Films Showcased</p>
            </div>
            <div className="stat">
              <h3 className="text-4xl font-bold sm:text-5xl">200+</h3>
              <p className="mt-2 text-sm sm:text-base">Art Exhibits</p>
            </div>
            <div className="stat">
              <h3 className="text-4xl font-bold sm:text-5xl">40+</h3>
              <p className="mt-2 text-sm sm:text-base">Industry Speakers</p>
            </div>
            <div className="stat">
              <h3 className="text-4xl font-bold sm:text-5xl">400+</h3>
              <p className="mt-2 text-sm sm:text-base">Total Attendees</p>
            </div>
          </div>
          <div className="cta-buttons mt-16 flex gap-6">
            <a
              href="#tickets"
              className="rounded-full bg-white px-8 py-4 text-lg font-medium text-black transition-all hover:bg-opacity-90"
            >
              Buy Tickets
            </a>
            <a
              href="#virtual"
              className="rounded-full border border-white px-8 py-4 text-lg font-medium transition-all hover:bg-white hover:text-black"
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
