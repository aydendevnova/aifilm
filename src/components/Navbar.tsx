"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Power4 } from "gsap/all";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "Schedules", path: "/schedules" },
    { name: "Buy Tickets", path: "/tickets" },
    { name: "Video Upload", path: "https://aifilm3.com/video-upload/" },
  ];

  return (
    <div className="fixed top-0 z-[999] w-full select-none bg-orange-600/30 py-3 backdrop-blur-md lg:py-5">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-6 lg:px-24">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: Power4.easeInOut, duration: 2 }}
          href="/"
          className="logo"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={128}
            height={42}
            className="h-8 w-auto md:h-16 lg:h-20"
          />
        </motion.a>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <IoMdMenu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="z-[999] w-[300px] bg-black/45 p-6 backdrop-blur-md"
          >
            <SheetTitle className="text-white">Menu</SheetTitle>
            <nav className="mt-12 flex flex-col space-y-6">
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0,
                }}
                key={"home0"}
                href={"/"}
                className="text-lg font-medium text-white transition-colors hover:text-orange-400"
              >
                Home
              </motion.a>
              {navLinks.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                  key={index}
                  href={item.path}
                  className="text-lg font-medium text-white transition-colors hover:text-orange-400"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <motion.div className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((item, index) => (
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              transition={{
                ease: Power4.easeInOut,
                duration: 0.7,
                delay: index * 0.1,
              }}
              key={index}
              href={item.path}
              className="text-sm font-medium uppercase tracking-wider text-white transition-colors hover:text-orange-400"
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
