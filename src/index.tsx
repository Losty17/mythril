import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Auth, Home, NotFound, Board } from "./pages";
import { User } from "./types";

const App = () => {
  const user: User = {
    name: "Pwcca",
    email: "vnk@interact.com.br",
    avatar: "",
  };
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<Board user={user} />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
