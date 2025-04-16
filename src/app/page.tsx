import Image from "next/image";
import HeroComponent from "@/components/HeroComponent";

export default function Home() {
  const heroNav: Array<{ id: number, text: string, anchor : string}> = [
    { id: 1, text : 'About', anchor : '#about' },
    { id: 2, text : 'Work', anchor : '#work' }
  ]

  return (
    <div className="w-full py-40">
      <HeroComponent
        title="Hi! I am Tyron, a passionate & ambitious web developer."
        nav={heroNav}
      />
    </div>
  );
}
