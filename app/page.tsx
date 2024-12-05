"use client";
import Hero from "./components/Hero";
import Presence from "./components/Presence";
import ServiceDigital from "./components/ServiceDigital";
import Services from "./components/Services";
import SwiperSlider from "./components/SwiperSlider";
import Testimonial from "./components/Testimonial";
import Why from "./components/Why";
import bubble from "./images/bubble.png";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ServiceDigital />
      <Why />
      <Services />
      <SwiperSlider />

      <section className="bg-[#F16232] relative h-[70vh] relative">
        <img
          src={bubble.src}
          className="absolute top-0 right-0 h-[100px] w-[100px]"
          alt=""
        />
        {/* <Testimonial /> */}
      </section>
      <Presence />

    </main>
  );
}
