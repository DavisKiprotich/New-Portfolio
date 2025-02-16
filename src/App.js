import React from "react";

import {
  About,
  Footer,
  Header,
  Work,
  Skills,
  Tech,
  Contact,
  Experience,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Tech />
      <Experience />
      <Work />
      <Contact />
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            style: {
              background: "var(--text-color)",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
            },
          },
        }}
      />
      <Footer />
    </div>
  );
};

export default App;
