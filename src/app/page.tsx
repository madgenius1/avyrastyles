"use client"

import Categories from "./components/landingpage/Categories";
import CtaOne from "./components/landingpage/CtaOne";
import CtaThree from "./components/landingpage/CtaThree";
import CtaTwo from "./components/landingpage/CtaTwo";
import Hero from "./components/landingpage/Hero";
import WhyAvyra from "./components/landingpage/WhyAvyra";


export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <CtaOne />
      <Categories />
      <CtaTwo />
      <CtaThree />
      <WhyAvyra />
    </div>
  );
}
