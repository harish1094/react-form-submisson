// App.js
import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NewForm from "./Pages/Form/New.tsx";
import Home from "./Pages/Home.tsx";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Use Context With multipage form submission</h1>
        <Link to="">Home</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<NewForm />} />
          <Route path="/form/*" element={<NewForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
