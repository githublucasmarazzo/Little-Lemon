import React from "react";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import weekSalad from "./weekSalad";
import WindowsDishes from "./WindowsDishes";

function Dishes() {
  const [screenW, setScreenW] = useState({ width: window.innerWidth });
  const carousel = useRef();
  useEffect(() => {
    const handleResize = () => {
      setScreenW({
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {screenW.width < 1000 && (
        <motion.div
          ref={carousel}
          className="carousel cursor-grab overflow-hidden  mt-10 "
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -480 }}
            className="inner flex  "
          >
            {weekSalad.map((items) => {
              return (
                <div key={items.img}>
                  <div className=" bg-weekback flex flex-col    rounded-t-xl  mx-10  text-sm text-black">
                    <img
                      src={items.img}
                      alt="img"
                      className="rounded-t-lg  max-w-52"
                    />
                    <div className="flex justify-between mx-2 my-2">
                      <span className=" font-bold">{items.name}</span>
                      <span className=" text-third">{items.price}</span>
                    </div>
                    <span className=" text-xs mt-3 text-four mx-2 italic">
                      "More Details of this Delecius Plate"
                    </span>
                    <div className=" flex mx-2 mt-2">
                      <span className=" font-bold ">Order a Delivery</span>
                      <div className="ml-5">
                        <DeliveryDiningIcon />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      )}
      {screenW.width > 1000 && (
        <div className="flex mx-10">
          <WindowsDishes />
        </div>
      )}
    </>
  );
}

export default Dishes;
