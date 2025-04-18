"use client";
import Image from "next/image";
import HeroComponent from "@/components/HeroComponent";
import GlobalNav from "@/components/GlobalNav";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  const heroNav: Array<{ id: number; text: string; anchor: string }> = [
    { id: 1, text: "About", anchor: "#about" },
    { id: 2, text: "Work", anchor: "#work" },
  ];

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
  },[]);

  return (
    <div className="w-full mb-[100vh]">
      <GlobalNav />
      <HeroComponent
        title="Hi! I am Tyron, a passionate & ambitious web developer."
        subTitle="From the beautiful city of Vancouver, BC."
        nav={heroNav}
      />
    </div>
  );
}
