import { BrowserRouter, Routes, Route } from "react-router-dom";


import LandingPage from "../features/landing/LandingPage";

import InterviewPage from "../features/interview/InterviewPage";

import InterviewResultPage from "../pages/interview/InterviewResultPage";

import HistoryPage from "../features/history/HistoryPage";







function LoginPage() {

  return (

    <h1>

      Login Page

    </h1>

  );

}







function SignupPage() {

  return (

    <h1>

      Signup Page

    </h1>

  );

}







function DashboardPage() {

  return (

    <h1>

      Dashboard

    </h1>

  );

}











export default function AppRouter() {


  return (

    <BrowserRouter>


      <Routes>


        {/* Landing */}

        <Route

          path="/"

          element={<LandingPage />}

        />





        {/* Authentication */}

        <Route

          path="/login"

          element={<LoginPage />}

        />





        <Route

          path="/signup"

          element={<SignupPage />}

        />







        {/* Dashboard */}

        <Route

          path="/dashboard"

          element={<DashboardPage />}

        />







        {/* Interview */}

        <Route

          path="/interview"

          element={<InterviewPage />}

        />







        {/* Interview Result */}

        <Route

          path="/interview/result"

          element={<InterviewResultPage />}

        />







        {/* Interview History */}

        <Route

          path="/interview/history"

          element={<HistoryPage />}

        />





      </Routes>


    </BrowserRouter>

  );


}