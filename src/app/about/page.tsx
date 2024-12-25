"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full bg-black">
        <div className="picture h-full w-full overflow-hidden">
          <video
            data-scroll
            data-scroll-speed="-1"
            src="/ai/flower-bee.mp4"
            className="h-full w-full object-cover opacity-50"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="absolute top-0 w-full">
          <div className="mx-auto h-full max-w-screen-2xl px-5 text-white sm:px-24">
            <div className="para mt-32 leading-tight sm:mt-[12rem]">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-2xl font-medium sm:text-4xl">
                  About AI Film 3
                </p>
                <p className="mt-4 text-xl font-light text-gray-300 sm:text-3xl">
                  Where Innovation Meets Imagination
                </p>
                <p className="mt-2 text-sm font-light tracking-wide text-gray-300 sm:text-base">
                  A Prometheus Production LLC Event
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-screen-2xl px-5 py-20 sm:px-24">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 gap-16 sm:grid-cols-2"
        >
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We are dedicated to exploring the limitless potential of AI in
                filmmaking. Welcome to the AI Film 3 Film Festival, a pioneering
                event in Arizona, taking place October 31 – November 2. At the
                AI Film and Art Festival, we celebrate the intersection of
                artificial intelligence and cinematic art. Our mission is to
                highlight the transformative power of AI in filmmaking by
                presenting a diverse array of innovative films and artistic
                projects.
              </p>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-gray-600">
                We are committed to fostering a deeper understanding of how
                technology shapes storytelling and drives creative expression in
                the film industry. Explore how we are pushing the boundaries of
                both art and technology and witness the evolution of cinema and
                artistic expression through the lens of AI.
              </p>
            </div>
          </div>

          <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
            <img
              src="https://aifilm3.com/wp-content/uploads/2024/08/nexartis-hero-img.jpg"
              alt="AI Filmmaking"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <p className="text-lg leading-relaxed text-gray-600">
            The partnership of AI Film 3 and the AI Music and Video Channel is
            bringing cutting-edge AI-generated content to a wider audience. This
            collaboration will showcase select works from our event on their
            Live Show and channel, offering creators an exciting platform for
            exposure. Thanks to the channel's innovative Split Sheet Technology,
            participating artists can earn royalties when their videos are
            played, fostering a new era of opportunity in AI-driven creativity.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-44"
        >
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
            <h3 className="text-lg font-medium sm:text-2xl">Our Initiatives</h3>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-8">
              <h2 className="text-2xl font-bold">Prometheus Productions LLC</h2>
              <p className="mt-4 text-gray-600">
                At Prometheus Productions we are pioneering at the intersection
                of artificial intelligence (AI) and human creativity, producing
                groundbreaking art and entertainment that challenges
                perceptions, inspires innovation, and redefines the boundaries
                of possibility.
              </p>
            </div>

            <div className="rounded-lg bg-black p-8 text-white">
              <h2 className="text-2xl font-bold">Digital Media Innovation</h2>
              <p className="mt-4">
                Nexartis is at the forefront of digital media technology,
                developing innovative solutions for attribution and royalty
                management. Our Split Sheet technology streamlines compensation
                for creators in the digital age.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Nexartis Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg bg-black">
              <img
                src="/nexartis.png"
                alt="Nexartis Technology"
                className="h-full w-full object-contain p-10"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold">
                Revolutionizing Digital Media Attribution
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Nexartis is at the forefront of digital media technology,
                developing innovative solutions to maintain accurate
                attributions and royalty splits. Our groundbreaking Split Sheet
                technology is already in action, streamlining compensation for
                creators.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-600">
                    Currently powering content for the AI Music and Video
                    Channel.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-600">
                    We are paving the way for a more transparent digital media
                    landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Open Commercial Media Ecosystem Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="rounded-lg bg-gray-50 p-8">
            <h2 className="text-3xl font-bold">
              Open Commercial Media Ecosystem
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              AI Film 3 is also a proud curator within the Open Commercial Media
              ecosystem. This initiative supports artists by providing
              transparent royalty payments and new distribution opportunities.
              By fostering an environment of fairness and innovation, we aim to
              empower artists to develop their professions and reach new
              audiences.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              AI Film 3 will soon have a dedicated channel to continue to
              support, and promote filmmakers, artists, and creatives.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Join us at the AI Film 3 Film Festival to explore the future of
              filmmaking, where technology meets creativity in the most
              spectacular ways.
            </p>
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 rounded-lg bg-gray-50 p-8"
        >
          <h2 className="text-2xl font-bold">Stay Updated</h2>
          <p className="mt-4 text-gray-600">
            Join our mailing list to receive the latest news about AI Film 3
            Festival.
          </p>
          <form className="mt-6">
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-gray-300 px-6 py-3 focus:border-black focus:outline-none"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-black px-8 py-3 text-white transition-all hover:bg-opacity-90"
              >
                Subscribe
              </button>
            </div>
          </form>
        </motion.div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold">Experience the Future of Film</h2>
          <p className="mt-4 text-lg text-gray-600">
            Join us at AI Film 3 Festival where technology meets creativity in
            spectacular ways.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#tickets"
              className="rounded-full bg-black px-8 py-4 text-lg font-medium text-white transition-all hover:bg-opacity-90"
            >
              Get In-Person Tickets
            </a>
            <a
              href="#virtual"
              className="rounded-full border border-black px-8 py-4 text-lg font-medium transition-all hover:bg-black hover:text-white"
            >
              Join Virtually
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
