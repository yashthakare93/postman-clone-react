import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const ThemeToggle = () => {
  const [themeMode, setThemeMode] = useState("dark");

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  const currentTheme = themeMode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div >
        <FormControlLabel
          control={<Switch checked={themeMode === "dark"} onChange={toggleTheme} />}
        />

      </div>
    </ThemeProvider>
  );
};

export default ThemeToggle;
