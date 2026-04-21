import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AppsGrid from "@/components/AppsGrid";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AppsGrid />
        <About />
      </main>
      <Footer />
    </>
  );
}
