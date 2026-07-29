import { BrowserRouter, Routes, Route } from "react-router-dom";


// Landing
import LandingPage from "./features/landing/LandingPage";


// Authentication
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";


// Dashboard
import Dashboard from "./pages/dashboard/Dashboard";


// Resume
import ResumePage from "./features/resume/ResumePage";
import ResumeHistory from "./pages/resume/ResumeHistory";


// Interview
import InterviewSetupPage from "./pages/interview/InterviewSetupPage";
import InterviewPage from "./pages/interview/InterviewPage";
import InterviewResultPage from "./pages/interview/InterviewResultPage";
import HistoryPage from "./features/history/HistoryPage";


// Auth Protection
import ProtectedRoute from "./components/auth/ProtectedRoute";






export default function App() {


  return (


    <BrowserRouter>


      <Routes>





        {/* =====================
            Landing
        ====================== */}


        <Route

          path="/"

          element={<LandingPage />}

        />








        {/* =====================
            Authentication
        ====================== */}


        <Route

          path="/login"

          element={<Login />}

        />


        <Route

          path="/register"

          element={<Register />}

        />


        <Route

          path="/forgot-password"

          element={<ForgotPassword />}

        />









        {/* =====================
            Dashboard
        ====================== */}


        <Route

          path="/dashboard"

          element={

            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>

          }

        />









        {/* =====================
            Resume Analyzer
        ====================== */}


        <Route

          path="/resume"

          element={

            <ProtectedRoute>

              <ResumePage />

            </ProtectedRoute>

          }

        />





        {/* Resume History */}

        <Route

          path="/resume/history"

          element={

            <ProtectedRoute>

              <ResumeHistory />

            </ProtectedRoute>

          }

        />









        {/* =====================
            Interview
        ====================== */}


        <Route

          path="/interview"

          element={

            <ProtectedRoute>

              <InterviewSetupPage />

            </ProtectedRoute>

          }

        />





        <Route

          path="/interview/session"

          element={

            <ProtectedRoute>

              <InterviewPage />

            </ProtectedRoute>

          }

        />





        <Route

          path="/interview/result"

          element={

            <ProtectedRoute>

              <InterviewResultPage />

            </ProtectedRoute>

          }

        />





        {/* Interview History */}

        <Route

          path="/interview/history"

          element={

            <ProtectedRoute>

              <HistoryPage />

            </ProtectedRoute>

          }

        />





      </Routes>


    </BrowserRouter>


  );

}