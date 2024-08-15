import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import RagDataRegister from "./pages/RagDataRegister";
import RagChat from "./pages/RagChat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RagDataRegister" element={<RagDataRegister />} />
        <Route path="/RagChat" element={<RagChat />} />
      </Routes>
    </Router>
  );
}

export default App;
