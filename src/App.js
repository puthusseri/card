
import Home from './components/Home/Home';
import React from 'react'

import { ThemeProvider } from './ThemeContext.jsx'; // Adjust the path as needed
import "./App.css"

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
