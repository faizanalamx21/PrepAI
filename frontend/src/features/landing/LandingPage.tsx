import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/sections/Hero";
import Stats from "../../components/sections/Stats";
import Features from "../../components/sections/Features";
import DashboardPreview from "../../components/sections/DashboardPreview";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Statistics */}
      <Stats />

      {/* Features */}
      <Features />

      {/* Dashboard Preview */}
      <DashboardPreview />
    </main>
  );
}