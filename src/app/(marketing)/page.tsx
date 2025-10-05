import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { Features } from "@/components/home/features";
import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Features />
      <About />
      <Contact />
    </main>
  );
}