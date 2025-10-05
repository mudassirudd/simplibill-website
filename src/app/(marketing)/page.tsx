import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { Features } from "@/components/home/features";
import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}