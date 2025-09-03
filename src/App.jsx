import { createTheme, ThemeProvider, CssBaseline, GlobalStyles } from "@mui/material";
import { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const theme = createTheme({
    palette: {
      background: { default: '#000000' },
      primary: { main: "#1f8053" },
      text: { primary: '#fff' }
    },
    typography: {
      fontFamily: "'Acari Sans', sans-serif",
      allVariants: {
        fontFamily: "'Acari Sans', sans-serif",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
