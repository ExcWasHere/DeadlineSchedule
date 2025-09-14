import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./routes/DashboardPage";
import "./styles/index.css";
import { Loader } from "./components/loader";
import Head from "next/head";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  author?: string;
}

export default function SEO({ title, description, keywords, author }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
    </Head>
  );
}

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
