import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./hooks";
import "./index.css";
import { Auth, Board, Home, Logout, NotFound } from "./pages";
import store from "./store";

const App = () => {
  const user = useAppSelector((state) => state.user.value);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<Board />} />
          <Route path="/logout" element={<Logout />} />
          {["/auth", "/register", "/login"].map((path, i) => (
            <Route key={i} path={path} element={<Auth />} />
          ))}
          <Route path="/" element={<Home user={user} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);
