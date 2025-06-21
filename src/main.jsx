import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import FetchContext from "./context/FetchContext.jsx";
import AuthContext from "./context/AuthContext.jsx";
import CartProvider from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <FetchContext>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </FetchContext>
    </AuthContext>
  </StrictMode>
);
