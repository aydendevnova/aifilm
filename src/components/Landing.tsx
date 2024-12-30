import { motion } from "framer-motion";
import React from "react";

function Landing() {
  return (
    <div className="relative h-[100vh] w-full bg-black md:h-[120vh]">
      <div className="picture h-full w-full overflow-hidden">
        <video
          data-scroll
          data-scroll-speed="-1"
          src="https://utfs.io/f/Wmyz7oM4mNQFxoDfOZsHfsLz076qZ52ynQhDlCkRb9HMaEBd"
          className="h-full w-full object-cover opacity-20"
          muted
          loop
          playsInline
        />
      </div>

      <div className="absolute top-32 w-full md:top-16 lg:top-0">
        <div className="mx-auto h-full max-w-screen-2xl px-4 text-white md:px-5 lg:px-24">
          <div className="para mt-20 leading-tight md:mt-32 lg:mt-[12rem]">
            {[
              {
                text: "AI Film 3 Festival",
                className:
                  "text-xl md:text-2xl lg:text-4xl font-medium text-white",
              },
              {
                text: "Where Innovation Meets Imagination",
                className:
                  "text-lg md:text-xl lg:text-3xl font-light text-gray-300",
              },
              {
                text: "Glendale, Arizona • October 31 - November 2",
                className:
                  "text-xs md:text-sm lg:text-base font-light text-gray-300 tracking-wide",
              },
            ].map(({ text, className }, index) => {
              return (
                <p key={index} className={`overflow-hidden ${className}`}>
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
                    {text}
                  </motion.span>
                </p>
              );
            })}
          </div>
          <div className="headings mt-4 md:mt-7">
            {["Create."].map((items, index) => {
              return (
                <h1
                  key={index}
                  className="-mt-4 overflow-hidden py-4 text-4xl font-bold leading-none tracking-tight md:-mt-8 md:py-6 md:text-6xl lg:text-[8rem]"
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
          <div className="stats mt-4 grid grid-cols-2 gap-4 md:mt-8 md:gap-8">
            <div className="stat">
              <h3 className="text-2xl font-bold md:text-4xl lg:text-5xl">
                157+
              </h3>
              <p className="mt-1 text-xs md:mt-2 md:text-sm lg:text-base">
                Films Showcased
              </p>
            </div>
            <div className="stat">
              <h3 className="text-2xl font-bold md:text-4xl lg:text-5xl">
                200+
              </h3>
              <p className="mt-1 text-xs md:mt-2 md:text-sm lg:text-base">
                Art Exhibits
              </p>
            </div>
            <div className="stat">
              <h3 className="text-2xl font-bold md:text-4xl lg:text-5xl">
                40+
              </h3>
              <p className="mt-1 text-xs md:mt-2 md:text-sm lg:text-base">
                Industry Speakers
              </p>
            </div>
            <div className="stat">
              <h3 className="text-2xl font-bold md:text-4xl lg:text-5xl">
                400+
              </h3>
              <p className="mt-1 text-xs md:mt-2 md:text-sm lg:text-base">
                Total Attendees
              </p>
            </div>
          </div>
          <div className="cta-buttons mt-8 flex flex-col gap-4 md:mt-16 md:flex-row md:gap-6">
            <a
              href="/tickets"
              className="rounded-full bg-white px-6 py-3 text-center text-base font-medium text-black transition-all hover:bg-opacity-90 md:px-8 md:py-4 md:text-lg"
            >
              Buy Tickets
            </a>
            <a
              href="https://www.entertainmint.com/theaters/ai-film-3-festival"
              className="rounded-full border border-white px-6 py-3 text-center text-base font-medium transition-all hover:bg-white hover:text-black md:px-8 md:py-4 md:text-lg"
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
