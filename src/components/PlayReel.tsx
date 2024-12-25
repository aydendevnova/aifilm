"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PlayReel: React.FC = () => {
  const parent = useRef<HTMLDivElement>(null);
  const videodiv = useRef<HTMLDivElement>(null);
  const play = useRef<HTMLDivElement>(null);
  const reel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "top top",
        pin: true,
        scrub: 1,
      },
    });

    tl.to(
      videodiv.current,
      {
        width: "95%",
        height: "95%",
        ease: "power4.easeOut",
        duration: 1,
      },
      "a",
    );

    tl.to(
      play.current,
      {
        x: "50%",
        ease: "power4.easeOut",
        duration: 1,
      },
      "a",
    );

    tl.to(
      reel.current,
      {
        x: "-50%",
        ease: "power4.easeOut",
        duration: 1,
      },
      "a",
    );
  }, []);

  return (
    <div ref={parent} className="relative h-screen w-full bg-black text-white">
      <div
        ref={videodiv}
        className="video-container absolute left-1/2 top-1/2 w-32 -translate-x-1/2 -translate-y-1/2 sm:w-96"
      >
        <video
          loop
          muted
          autoPlay
          className="scale-[1.5]"
          src={"/PlayReel.mp4"}
        />
      </div>
      <div className="overlay absolute flex h-full w-full flex-col items-center justify-between py-10">
        <div className="play-reel flex items-center justify-center gap-3">
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
          <h3>Work in motion</h3>
        </div>
        <h1 className="flex items-center justify-center gap-20 sm:gap-96">
          <div ref={play} className="text-5xl font-light sm:text-9xl">
            Play
          </div>
          <div ref={reel} className="text-5xl font-light sm:text-9xl">
            Reel
          </div>
        </h1>
        <p className="px-10 text-center text-xs sm:text-sm">
          Our work is best experienced in motion. Don't forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
};

export default PlayReel;
