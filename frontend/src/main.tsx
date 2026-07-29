import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";
import { InterviewProvider } from "./context/InterviewContext";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>

    <AuthProvider>

      <InterviewProvider>

        <App />

      </InterviewProvider>

    </AuthProvider>

  </React.StrictMode>
);