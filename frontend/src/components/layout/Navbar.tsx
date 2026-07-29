import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-white shadow-lg shadow-cyan-500/30">
            P
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              Prep<span className="text-cyan-400">AI</span>
            </h1>

            <p className="text-xs text-slate-400">
              AI Interview Assistant
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden gap-8 text-sm text-slate-300 lg:flex">

          <a href="#features" className="transition hover:text-cyan-400">
            Features
          </a>

          <a href="#pricing" className="transition hover:text-cyan-400">
            Pricing
          </a>

          <a href="#faq" className="transition hover:text-cyan-400">
            FAQ
          </a>

          <a href="#footer" className="transition hover:text-cyan-400">
            Contact
          </a>

        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">

          <Link to="/login">
            <Button variant="ghost">
              Login
            </Button>
          </Link>

          <Link to="/register">
            <Button className="bg-cyan-500 hover:bg-cyan-400">
              Get Started →
            </Button>
          </Link>

        </div>

      </div>
    </header>
  );
}