"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full bg-black">
        <div className="absolute inset-0">
          <img
            src="https://aifilm3.com/wp-content/uploads/2024/08/nexartis-hero-img.jpg"
            alt="Hero background"
            className="h-full w-full object-cover opacity-50"
          />
        </div>
        <div className="relative mx-auto max-w-screen-2xl px-5 py-20 text-white sm:px-24">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-20"
          >
            <h1 className="text-4xl font-bold sm:text-6xl">About Us</h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl">
              AI Film 3, A Prometheus Production LLC Event. We are dedicated to
              exploring the limitless potential of AI in filmmaking.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-screen-2xl px-5 py-20 sm:px-24">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg max-w-none"
        >
          <p className="text-lg leading-relaxed">
            Welcome to the AI Film 3 Film Festival, a pioneering event in
            Arizona, taking place October 31 – November 2. At the AI Film and
            Art Festival, we celebrate the intersection of artificial
            intelligence and cinematic art. Our mission is to highlight the
            transformative power of AI in filmmaking by presenting a diverse
            array of innovative films and artistic projects.
          </p>

          <div className="my-16 rounded-lg bg-gray-50 p-8">
            <h2 className="text-2xl font-bold">Prometheus Productions LLC</h2>
            <p className="mt-4">
              At Prometheus Productions we are pioneering at the intersection of
              artificial intelligence (AI) and human creativity, producing
              groundbreaking art and entertainment that challenges perceptions,
              inspires innovation, and redefines the boundaries of possibility.
            </p>
          </div>

          <div className="my-16 rounded-lg bg-black p-8 text-white">
            <h2 className="text-2xl font-bold">
              Revolutionizing Digital Media Attribution
            </h2>
            <p className="mt-4">
              Nexartis is at the forefront of digital media technology,
              developing innovative solutions to maintain accurate attributions
              and royalty splits. Our groundbreaking Split Sheet technology is
              already in action, streamlining compensation for creators.
            </p>
            <ul className="mt-6 list-disc pl-6">
              <li>
                Currently powering content for the AI Music and Video Channel.
              </li>
              <li>
                We are paving the way for a more transparent digital media
                landscape.
              </li>
            </ul>
          </div>

          <div className="my-16">
            <h2 className="text-2xl font-bold">
              Open Commercial Media Ecosystem
            </h2>
            <p className="mt-4">
              AI Film 3 is also a proud curator within the Open Commercial Media
              ecosystem. This initiative supports artists by providing
              transparent royalty payments and new distribution opportunities.
              By fostering an environment of fairness and innovation, we aim to
              empower artists to develop their professions and reach new
              audiences.
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
          <h2 className="text-2xl font-bold">Join our Mailing List</h2>
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
          <h2 className="text-2xl font-bold">
            Join us at the AI Film 3 Film Festival
          </h2>
          <p className="mt-4 text-lg">
            Explore the future of filmmaking, where technology meets creativity
            in the most spectacular ways.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#tickets"
              className="rounded-full bg-black px-8 py-4 text-lg font-medium text-white transition-all hover:bg-opacity-90"
            >
              Buy In Person Tickets
            </a>
            <a
              href="#virtual"
              className="rounded-full border border-black px-8 py-4 text-lg font-medium transition-all hover:bg-black hover:text-white"
            >
              Buy Virtual Tickets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
