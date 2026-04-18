import React from "react";
import { Toaster } from "react-hot-toast";

import { Navbar } from "./components";
import {
  About,
  Certifications,
  Contact,
  Experience,
  Footer,
  Header,
  Skills,
  Tech,
  Work,
} from "./container";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main className="app__main">
        <Header />
        <About />
        <Skills />
        <Work />
        <Tech />
        <Certifications />
        <Experience />
        <Contact />
      </main>

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#383d50",
            color: "#f4f5f8",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          },
          success: {
            iconTheme: {
              primary: "#f2b53d",
              secondary: "#1f2230",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#ffffff",
            },
          },
        }}
      />

      <Footer />
    </div>
  );
};

export default App;
