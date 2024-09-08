import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./containers/About";
import HomePage from "./containers/HomePage";
import NavBar from "./components/NavBar";

function App() {
  const rootPath = "/alittlesnowy";
  return (
    <Router>
      {/* Have the Navbar will be rendered on every page */}
      <NavBar />

      {/* Define routes for the different pages */}
      <Routes>
        {/*Set HomePage as the default landing page */}
        <Route path={rootPath + "/"} element={<HomePage />} />
        <Route path={rootPath + "/about"} element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
