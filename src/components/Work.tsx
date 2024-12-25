"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface FestivalHighlight {
  heading: string;
  subheading: string;
  description: string;
  image?: string;
  video?: string;
}

const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

const Work: React.FC = () => {
  const [highlights] = useState<FestivalHighlight[]>([
    {
      heading: "Film Screenings",
      subheading: "157 Groundbreaking AI Films",
      description:
        "Experience the future of cinema with AI-generated and AI-enhanced films across multiple genres, from avant-garde to mainstream entertainment.",
      video: "/ai/retro.mp4",
    },
    {
      heading: "Art Exhibition",
      subheading: "200+ Digital Masterpieces",
      description:
        "Immerse yourself in a stunning collection of AI-generated artwork, showcasing the intersection of technology and creative expression.",
      image: "/ai/winner.png",
    },
    {
      heading: "Industry Panels",
      subheading: "40+ Expert Speakers",
      description:
        "Join thought-provoking discussions with industry leaders, creators, and innovators about the future of AI in entertainment.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2",
    },
    {
      heading: "Virtual Experience",
      subheading: "Accessible Worldwide",
      description:
        "Can't attend in person? Experience the festival virtually with exclusive access to films, art, and behind-the-scenes content.",
      video: "/ai/pencil-frog.mp4",
    },
  ]);

  return (
    <div className="relative w-full bg-white py-20">
      <div className="relative w-full bg-black py-32">
        <div className="mx-auto max-w-screen-2xl px-5 sm:px-24">
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white sm:text-5xl">
                Experience the Future of AI Cinema
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
                Watch how artificial intelligence is revolutionizing the film
                industry. From generating stunning visuals to enhancing
                storytelling, AI is opening new frontiers in creative
                expression.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-lg shadow-2xl"
            >
              <iframe
                className="pointer-events-none absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/pBp7RYGLAZc?autoplay=1&mute=1&loop=1&playlist=pBp7RYGLAZc&controls=0&showinfo=0&rel=0&modestbranding=1"
                title="AI Film Festival Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-24 max-w-screen-2xl px-5 sm:px-24">
        <div className="featured flex items-center gap-3">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            />
          </svg>
          <h3 className="text-lg font-medium sm:text-2xl">
            Festival Highlights
          </h3>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 sm:grid-cols-2">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="highlight-card"
            >
              <motion.div
                variants={imageVariants}
                className="relative h-[300px] overflow-hidden rounded-lg"
              >
                {item.video ? (
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="h-full w-full object-cover"
                  />
                )}
              </motion.div>
              <div className="mt-6">
                <h4 className="text-sm font-medium uppercase tracking-wider text-gray-500">
                  {item.subheading}
                </h4>
                <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                  {item.heading}
                </h3>
                <p className="mt-4 leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#tickets"
            className="inline-block rounded-full bg-black px-8 py-4 text-lg font-medium text-white transition-all hover:bg-opacity-90"
          >
            Get Your Tickets Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
