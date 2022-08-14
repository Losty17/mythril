import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterCard from "./components/v2/cards/CharacterCard";
import { useAppSelector } from "./hooks";
import "./index.css";
import { Auth, Board, Home, Logout, NotFound } from "./pages";
import store from "./store";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxl: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
});

const App = () => {
  const user = useAppSelector((state) => state.user.value);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/app/*" element={<Board />} />
          <Route path="/logout" element={<Logout />} />
          {["/auth", "/register", "/login"].map((path, i) => (
            <Route key={i} path={path} element={<Auth />} />
          ))}
          <Route path="/" element={<Home user={user} />} />
          <Route
            path="/testes"
            element={
              <CharacterCard
                character={{
                  id: "0a67b-8asdz-12312-adas8",
                  name: "Yulia Draconia",
                  description: "Lorem Ipsum dolor sit",
                  race: "Half-Dragonborn",
                  class: "Wizard",
                  level: 7,
                  image: "https://i.imgur.com/gik61z5.jpg",
                  cover: "https://pbs.twimg.com/media/DjS-BciXcAU-7C2.jpg",
                  updatedAt: new Date(),
                  createdAt: new Date(),
                }}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ReduxProvider>
);
