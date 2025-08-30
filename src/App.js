import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;