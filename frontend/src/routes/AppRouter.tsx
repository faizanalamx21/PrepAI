import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../features/landing/LandingPage";



function LoginPage() {
  return <h1>Login Page</h1>;
}

function SignupPage() {
  return <h1>Signup Page</h1>;
}

function DashboardPage() {
  return <h1>Dashboard</h1>;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}