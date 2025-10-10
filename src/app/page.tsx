import Header from "@/features/landing/header";
import Hero from "@/features/landing/hero";
import Features from "@/features/landing/features";
import CTA from "@/features/landing/cta";
import Footer from "@/features/landing/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
