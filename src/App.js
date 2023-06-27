import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import BestSeller from "./pages/BestSeller";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/about" element={<About />} />
        <Route path="/bestseller" element={<BestSeller />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
