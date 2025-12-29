import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import BiDashboard from "./static/Dashboard.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Subscription from "./pages/Subscribe.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<BiDashboard />} />
        <Route path="/subscribe" element={<Subscription />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
