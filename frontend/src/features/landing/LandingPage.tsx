import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/sections/Hero";
import Stats from "../../components/sections/Stats";
import Features from "../../components/sections/Features";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Statistics */}
      <Stats />

      {/* Features */}
      <Features />
    </main>
  );
}