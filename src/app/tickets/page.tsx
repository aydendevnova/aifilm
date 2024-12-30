"use client";
import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import Image from "next/image";
import Link from "next/link";

export default function BuyPage() {
  const tickets = [
    {
      name: "Full Event",
      duration: "3-Day",
      price: "125",
      features: ["AMC Theater", "Art Showcase", "Panels"],
      buttonText: "Purchase",
      link: "https://lu.ma/8tqsb694",
    },
    {
      name: "Single Day",
      duration: "Select Day at Purchase",
      price: "50",
      features: ["AMC Theater", "Art Showcase", "Panels"],
      buttonText: "Purchase",
      link: "https://lu.ma/8tqsb694",
    },
    {
      name: "VIP",
      duration: "3-Day Exclusive",
      price: "1500",
      features: [
        "AMC Theater",
        "Art Showcase",
        "Panels",
        "Red Carpet",
        "VIP Reception",
      ],
      buttonText: "Purchase",
      highlighted: true,
      link: "https://lu.ma/8tqsb694",
    },
    {
      name: "Media/Artist",
      duration: "Must be Verified",
      price: "Free",
      features: ["AMC Theater", "Art Showcase", "Panels"],
      buttonText: "Purchase",
      link: "https://lu.ma/8tqsb694",
    },
    {
      name: "Virtual Only",
      duration: "7 Days - Post Live Event",
      price: "75",
      features: [
        "Content Access (films)",
        "Speaker/Panel Recordings",
        "Behind the Scenes Exclusive",
      ],
      buttonText: "Purchase",
      link: "https://www.entertainmint.com/theaters/ai-film-3-festival",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 pt-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: Power4.easeOut }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 text-5xl font-bold">Buy Tickets</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Experience the future of cinema at Arizona&apos;s premier AI Film
            Festival. Join us for daily AI Film showings, panel discussions, art
            exhibits, and more!
          </p>
          <p className="mt-4 text-xl font-semibold text-yellow-400">
            CHILDREN UNDER 5 FREE
          </p>
        </motion.div>

        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tickets.map((ticket, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`rounded-2xl border ${
                ticket.highlighted
                  ? "border-yellow-400 bg-gradient-to-b from-gray-800 to-black"
                  : "border-gray-700 bg-black/50"
              } p-8 backdrop-blur-sm`}
            >
              <div className="mb-4 text-center">
                <h3 className="text-2xl font-bold">{ticket.name}</h3>
                <p className="text-gray-400">{ticket.duration}</p>
              </div>
              <div className="mb-6 text-center">
                <span className="text-4xl font-bold">${ticket.price}</span>
              </div>
              <ul className="mb-8 space-y-4">
                {ticket.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="mr-3 h-5 w-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={ticket.link}
                className={`block w-full rounded-lg ${
                  ticket.highlighted
                    ? "bg-yellow-400 text-black hover:bg-yellow-300"
                    : "bg-white text-black hover:bg-gray-100"
                } py-3 text-center font-semibold transition duration-300`}
              >
                {ticket.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="backdrop-blur-s mx-auto mb-16 w-fit rounded-2xl border border-gray-700 bg-black/50 p-8 py-20 text-center md:px-28">
          <h2 className="mb-4 text-2xl font-bold">
            All Tickets Available to Purchase ONLINE ONLY
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="https://lu.ma/8tqsb694"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-black transition duration-300 hover:bg-gray-100"
            >
              Buy In Person Tickets Now
            </Link>
            <Link
              href="https://www.entertainmint.com/theaters/ai-film-3-festival"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-black transition duration-300 hover:bg-gray-100"
            >
              Buy Virtual Tickets Now
            </Link>
          </div>
        </div>

        <div className="mb-16 text-center">
          <p className="text-lg text-gray-300">
            Discover the AI Film and Art Festival, where we showcase the future
            of AI-driven filmmaking. Join us for a captivating blend of art,
            entertainment, and technological innovation.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            Celebrate the exciting possibilities of AI in film and creativity!
          </p>
        </div>

        <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-400">
          <div className="mb-4 flex justify-center space-x-6">
            <Link href="#" className="hover:text-white">
              About Us
            </Link>
            <Link href="#" className="hover:text-white">
              Terms and Conditions
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Cookie Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Copyright Takedown Notice
            </Link>
          </div>
          <p>Glendale, Arizona • October 31 – November 2</p>
        </footer>
      </div>
    </div>
  );
}
