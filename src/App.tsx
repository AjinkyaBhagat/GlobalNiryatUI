import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: "16px" }}>
        <h1>Welcome to AirSeaEximUI</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;
