"use client"

import Categories from "./components/landingpage/Categories";
import CtaOne from "./components/landingpage/CtaOne";
import Hero from "./components/landingpage/Hero";


export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <CtaOne />
      <Categories />
    </div>
  );
}
