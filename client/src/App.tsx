import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, InterviewPrep, LandingPage, SignIn, SignUp } from "@/pages";
import { ROUTES } from "./constants";

const App = () => {
  return (
    <section
      className={
        import.meta.env.VITE_ENV === "development" ? "debug-screens" : ""
      }
    >
      <Router>
        <Routes>
          {/* default route */}
          <Route path={ROUTES.ROOT} element={<LandingPage />} />

          <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route
            path={`${ROUTES.INTERVIEW}/:sessionId`}
            element={<InterviewPrep />}
          />
        </Routes>
      </Router>

      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </section>
  );
};

export default App;
