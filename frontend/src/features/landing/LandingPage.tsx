import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/sections/Hero";
import TrustedBy from "../../components/sections/TrustedBy";
import Stats from "../../components/sections/Stats";
import Features from "../../components/sections/Features";
import HowItWorks from "../../components/sections/HowItWorks";
import Testimonials from "../../components/sections/Testimonials";
import Pricing from "../../components/sections/Pricing";
import FAQ from "../../components/sections/FAQ";
import Footer from "../../components/layout/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Trusted By */}
      <TrustedBy />

      {/* Statistics */}
      <Stats />

      {/* Features */}
      <Features />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing */}
      <Pricing />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />

    </main>
  );
}