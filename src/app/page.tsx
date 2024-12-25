"use client";

import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import Work from "@/components/Work";
import PlayReel from "@/components/PlayReel";
import Images from "@/components/Images";
import Spread from "@/components/Spread";
import Footer from "@/components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

export default function LayoutClient() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <Landing />
      <Work />
      <PlayReel />
      <Images />
      <Spread />
    </div>
  );
}
