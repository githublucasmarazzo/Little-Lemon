import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import logo from "../assets/Logo.svg";
import BurgerNav from "./BurgerNav";
function Nav() {
  return (
    <div className=" flex  items-center justify-center max-sm:justify-between lg:space-x-64 p-8">
      <div className="">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <nav className=" lg:text-xl  md:text-md  text-black ml-10">
        <ul className="max-sm:hidden">
          <NavLinks />
        </ul>
        <ul className="sm:hidden">
          <BurgerNav />
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
