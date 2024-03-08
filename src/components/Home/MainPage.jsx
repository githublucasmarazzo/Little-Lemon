import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import dish1 from "../assets/rectangle.svg";
import Dishes from "./Dishes/Dishes";
import person from "../assets/person.png";
import Section from "./section/Section";

import food from "../assets/food1.png";
import food2 from "../assets/food2.png";
import Footer from "../Footer/Footer";

function MainPage() {
  const [size, setSize] = useState({ width: window.innerWidth });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
  }, []);

  console.log(size.width);
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <header className=" max-sm:bg-dish bg-no-repeat bg-cover  sm:bg-primary   flex  max-sm:items-center max-sm:justify-center max-sm:text-center md:justify-center    ">
        <div className="flex flex-col w-96 pl-2  lg:mr-60 ">
          <span className="text-6xl text-secondary ">Little Lemon</span>
          <span className="text-3xl mt-4">Chicago</span>
          <span className="text-xl mt-14">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            perspiciatis alias nemo repellendus nesciunt quis, similique ut. At,
            ipsam.
          </span>
          <div className="mt-10 mb-10">
            <Link
              to="reservations"
              className="px-10 py-4 bg-secondary text-black font-bold rounded-md"
            >
              Reserve a Tab
            </Link>
          </div>
        </div>
        <div className=" max-sm:hidden relative top-10   mb-5">
          <img src={dish1} alt="" />
        </div>
      </header>

      <main>
        <div className="  items-center mt-10  sm:mt-32  sm:w-2/3  	 mx-auto      ">
          <div className=" flex sm:justify-between max-sm:flex-col items-center ">
            <span className=" text-black text-4xl font-semibold">
              This weeks Specials
            </span>
            <span className="text-black max-sm:p-2 sm:p-4 text-xl mt-10 bg-secondary rounded-lg">
              Online Menu
            </span>
          </div>
        </div>
        <div className="flex  justify-center mt-10 px-4">
          <Dishes className="px-4" />
        </div>
      </main>
      <section className=" bg-weekback text-white  mt-10  pb-10">
        <div className="pt-20 mx-10">
          <span className="flex items-center justify-center text-xl font-bold text-black mb-5  ">
            Testimonials
          </span>
          {size.width < 600 && (
            <div>
              <div className="bg-primary  rounded-lg p-8 max-w-80  mx-auto">
                <div className="flex mb-5 justify-between">
                  <h1>Rating</h1>
                  <h1>3</h1>
                </div>
                <div>
                  <img src={person} alt="" className="rounded" />
                  <h1 className="text-center my-4 ">Federic</h1>
                </div>
                <h1 className="italic text-sm text-center">
                  I Love this restaurant
                </h1>
              </div>
            </div>
          )}
          {size.width > 600 && (
            <div className=" flex flex-wrap justify-center gap-2">
              <Section />
            </div>
          )}
        </div>
      </section>
      <section className="text-black mx-10 text-balance pb-10  md:flex md:justify-center ">
        <div className=" text-center md:w-80 ">
          <h4 className=" font-bold text-3xl mt-10">Little Lemon</h4>
          <h2 className=" font-semibold">Chicago</h2>
          <p className=" my-10 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            voluptas rem ducimus, ab illum excepturi. Quas, molestiae. Velit
            quisquam, illum eius at quod optio, repudiandae, cumque eaque fuga
            animi rem.
          </p>
        </div>
        <div className="flex max-sm:justify-evenly
         justify-center md:ml-10 md:mt-10">
          <img src={food} className=" w-28  sm:w-40" />
          <img
            src={food2}
            className="w-28  sm:w-40 sm:relative bottom-8  right-16  "
          />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainPage;
