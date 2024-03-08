import React from "react";
import { Link } from "react-router-dom";
import corridor from "../assets/corridor.png";
function Footer() {
  return (
    <div className="py-5 text-white bg-primary   ">
      <footer className="text-center sm:flex  sm:justify-center">
        <div>
          <img src={corridor} className="hidden sm:block" />
        </div>
        <div className="sm:flex my-auto sm:ml-16">
          <div className="flex justify-evenly flex-row sm:flex-col sm:mr-5">
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Menu</Link>
          </div>
          <div className="font-semibold max-sm:my-5 text-secondary justify-center ">
            <h1>Vancuver, Canada</h1>
            <h1>(775)123-4567</h1>
            <h1>LittleLemon@BestRestaurant.com</h1>
          </div>
          <div className="flex max-sm:justify-evenly  flex-row  sm:flex-col sm:ml-5">
            <Link>Reservations</Link>
            <Link>Order Online</Link>
            <Link>Login</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
