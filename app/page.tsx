import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  About,
  Projects,
  Skills,
  Experience,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
