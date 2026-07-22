import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppPage from "./app/page";
import { ThemeProvider } from "./contexts/ThemeContext";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider>
        <AppPage />
      </ThemeProvider>
    </React.StrictMode>
  );
}
