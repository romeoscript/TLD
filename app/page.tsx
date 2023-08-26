import Image from "next/image";
import Hero from "./components/Hero";
import ServiceDigital from "./components/ServiceDigital";
import Services from "./components/Services";
import Why from "./components/Why";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ServiceDigital />
      <Why />
      <Services />
    </main>
  );
}
