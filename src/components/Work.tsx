import React, { useState } from "react";
import { motion } from "framer-motion";

interface FestivalHighlight {
  heading: string;
  subheading: string;
  description: string;
  image: string;
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
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
    },
    {
      heading: "Art Exhibition",
      subheading: "200+ Digital Masterpieces",
      description:
        "Immerse yourself in a stunning collection of AI-generated artwork, showcasing the intersection of technology and creative expression.",
      image: "https://images.unsplash.com/photo-1561089489-f13d5e730d72",
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
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
    },
  ]);

  return (
    <div className="w-full relative bg-white py-20">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-24">
        <div className="featured flex gap-3 items-center">
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
          <h3 className="text-lg sm:text-2xl font-medium">
            Festival Highlights
          </h3>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-16">
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
                <img
                  src={item.image}
                  alt={item.heading}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {item.subheading}
                </h4>
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold">
                  {item.heading}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#tickets"
            className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all"
          >
            Get Your Tickets Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
