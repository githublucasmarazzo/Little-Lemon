import React from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <>
      <div className="flex space-x-2 md:space-x-6">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/reservations">Reservation</Link>
        </li>
        <li>
          <Link to="/">Order Online</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </div>
    </>
  );
}

export default NavLinks;
