// "use client";

import Camp from "@/component/Camp";
import Features from "@/component/Features";
import GetApp from "@/component/GetApp";
import Guide from "@/component/Guide";
import Hero from "@/component/Hero";
import VideoSection from "@/component/VideoSection";


export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
      <VideoSection />
    </>
  );
}
