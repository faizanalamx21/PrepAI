import { Button } from "../../components/ui/button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-white">
          Prep<span className="text-cyan-400">AI</span>
        </h1>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#" className="transition hover:text-cyan-400">
            Features
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            Resume AI
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            Interview
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            Pricing
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Login
          </Button>

          <Button>
            Get Started
          </Button>
        </div>

      </div>
    </header>
  );
}