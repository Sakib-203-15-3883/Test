// App.js
import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import MainScreen from "./Screens/MainScreen"; 

const App = () => {
  return (
    <ThemeProvider>
      <MainScreen />
    </ThemeProvider>
  );
};

export default App;
