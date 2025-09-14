import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./routes/DashboardPage";
import "./styles/index.css";
import { Loader } from "./components/loader";



const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loader />} />

        <Route path="/dashboard" element={<DashboardPage />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
