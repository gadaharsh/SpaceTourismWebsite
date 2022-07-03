import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/shared/logo.svg";
export default function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={logo} alt="Space Logo" title="Space Logo" />
        </Link>
      </div>
    </header>
  );
}
