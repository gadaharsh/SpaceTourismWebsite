import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import { Header } from "./components";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact></Route>
        <Route path="/desitnation" exact></Route>
        <Route path="/crew" exact></Route>
        <Route path="/technology" exact></Route>
      </Routes>
    </Router>
  );
}

export default App;
