import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import TopBar from "@/components/layout/TopBar";

export default function Home() {
  return (
    <>
      <TopBar/>
      <Navbar/>
      <Hero/>
      <Footer/>
    </>
  );
}
