import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./containers/About";
import HomePage from "./containers/HomePage";
import NavBar from "./components/NavBar";

function App() {
  const basename = process.env.NODE_ENV === "production" ? "/alittlesnowy" : "";

  return (
    <Router basename={basename}>
      {/* Have the Navbar will be rendered on every page */}
      <NavBar />

      {/* Define routes for the different pages */}
      <Routes>
        {/*Set HomePage as the default landing page */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
