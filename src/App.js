import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Viewer from "./Render/User"
import Admin from "./Render/Controller"
import { ThemeProvider } from "styled-components";
import { theme } from "./Components/Theme";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
      <Routes>
        <Route path="*" element={<Viewer/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
