import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoItsFor from "@/components/WhoItsFor";
import HowItWorks from "@/components/HowItWorks";
import Curriculum from "@/components/Curriculum";
import Enrollment from "@/components/Enrollment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
        <div className="flex flex-col w-full text-on-surface">
          <Hero />
          <WhoItsFor />
          <HowItWorks />
          <Curriculum />
          <Enrollment />
        </div>
      </main>
      <Footer />
    </>
  );
}
