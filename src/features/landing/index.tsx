import Header from "./header";
import Hero from "./hero";
import Features from "./features";
import CTA from "./cta";
import Footer from "./footer";

export default function LandingPage() {
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
