import React from "react";
import AllRoutes from "./allRoutes/AllRoutes";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
