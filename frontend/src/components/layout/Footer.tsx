import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              Prep<span className="text-cyan-400">AI</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              AI-powered interview preparation platform designed
              to help students crack interviews with confidence.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-cyan-400">Features</a></li>
              <li><a href="#" className="hover:text-cyan-400">Pricing</a></li>
              <li><a href="#" className="hover:text-cyan-400">AI Interview</a></li>
              <li><a href="#" className="hover:text-cyan-400">Resume Analyzer</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-cyan-400">About</a></li>
              <li><a href="#" className="hover:text-cyan-400">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Connect
            </h3>

            <div className="space-y-4">

              <a
                href="#"
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400"
              >
                <Mail size={18} />
                contact@prepai.com
              </a>

              <a
                href="#"
                className="block text-slate-400 hover:text-cyan-400"
              >
                GitHub
              </a>

              <a
                href="#"
                className="block text-slate-400 hover:text-cyan-400"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="block text-slate-400 hover:text-cyan-400"
              >
                X (Twitter)
              </a>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © 2026 PrepAI. All rights reserved.
        </div>

      </div>
    </footer>
  );
}