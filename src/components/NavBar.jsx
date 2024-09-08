import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/HomePage"></Link>
        </li>
        <li>
          <Link to="/About"></Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
