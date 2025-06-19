import React from "react";
import Medicines from "./pages/Medicines";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar/>
      <h1>App</h1>
      <Medicines/>
    </>
  );
};

export default App;
