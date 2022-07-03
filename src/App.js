import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import { Header, Home } from "./components";
import { Destination, Crew, Technology } from "./pages";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/destination" exact element={<Destination />} />
        <Route path="/crew" exact element={<Crew />} />
        <Route path="/technology" exact element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;
