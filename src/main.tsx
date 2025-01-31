import "@fontsource/poppins/400.css"; // Regular
import "@fontsource/poppins/500.css"; // Medium
import "@fontsource/poppins/600.css"; // SemiBold
import "@fontsource/poppins/700.css"; // Bold
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import Join from "./pages/Join/Join.tsx";
import BoardMembers from "./pages/BoardMembers/BoardMembers.tsx";
import { ViewportProvider } from "./ViewportContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ViewportProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/join" element={<Join />} />
          <Route path="board-members" element={<BoardMembers />} />
        </Routes>
      </BrowserRouter>
    </ViewportProvider>
  </StrictMode>,
);
