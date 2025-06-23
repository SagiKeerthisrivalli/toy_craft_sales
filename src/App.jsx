import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import Story from "./Story";
import Signup from "./Signup";
import './index.css'; // we'll add styling here

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div className="nav-bar">
        <button onClick={() => navigate("/")} className="nav-btn">Home</button>
        <button onClick={() => navigate("/about")} className="nav-btn">About</button>
        <button onClick={() => navigate("/dashboard")} className="nav-btn">Dashboard</button>
        <button onClick={() => navigate("/story")} className="nav-btn">Story</button>
      </div>

      <Routes>
        <Route path="/" element={<Home loggedIn={loggedIn} />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/story" element={<Story />} />
        <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
