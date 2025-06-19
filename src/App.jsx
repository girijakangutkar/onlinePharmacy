import React from "react";
import AllRoutes from "./allRoutes/AllRoutes";
import "./App.css";

import Medicines from "./pages/Medicines";
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <>
      <Navbar />
      <h1>App</h1>
      <Medicines />
    </>
  );
};

export default App;
