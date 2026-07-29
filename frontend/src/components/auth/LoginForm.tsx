import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";

import { signIn } from "../../services/auth";

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    const { error } = await signIn(
      email,
      password
    );

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    navigate("/dashboard");
  }

  return (
    <form
      onSubmit={handleLogin}
      className="space-y-6"
    >
      {/* Email */}
      <div>

        <label className="mb-2 block text-sm font-medium text-slate-300">
          Email
        </label>

        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="h-11"
        />

      </div>

      {/* Password */}
      <div>

        <label className="mb-2 block text-sm font-medium text-slate-300">
          Password
        </label>

        <div className="relative">

          <Input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="h-11 pr-12"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>

        </div>

      </div>

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <Checkbox id="remember" />

          <label
            htmlFor="remember"
            className="text-sm text-slate-400"
          >
            Remember me
          </label>

        </div>

        <Link
          to="/forgot-password"
          className="text-sm text-cyan-400"
        >
          Forgot Password?
        </Link>

      </div>

      <Button
        type="submit"
        disabled={loading}
        className="h-11 w-full bg-cyan-500 hover:bg-cyan-400"
      >
        {loading
          ? "Signing In..."
          : "Sign In"}
      </Button>

      <p className="text-center text-sm text-slate-400">

        Don't have an account?{" "}

        <Link
          to="/register"
          className="text-cyan-400"
        >
          Create Account
        </Link>

      </p>

    </form>
  );
}