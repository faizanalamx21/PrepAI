import { Link } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

export default function ForgotPassword() {
  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle="Enter your email and we'll send you a password reset link."
    >
      <form className="space-y-6">

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Email Address
          </label>

          <Input
            type="email"
            placeholder="Enter your email"
            className="h-11"
          />
        </div>

        <Button className="h-11 w-full bg-cyan-500 hover:bg-cyan-400">
          Send Reset Link
        </Button>

        <p className="text-center text-sm text-slate-400">
          Remember your password?{" "}

          <Link
            to="/login"
            className="font-medium text-cyan-400 hover:underline"
          >
            Back to Login
          </Link>
        </p>

      </form>
    </AuthLayout>
  );
}