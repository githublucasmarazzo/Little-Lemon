import React from "react";
import greek from "../assets/greek1.svg";
import brucheta from "../assets/brucheta.svg";
import lemond from "../assets/lemondessert.svg";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
function WindowsDishes() {
  const weekSalad = [
    {
      name: "Greek salad",
      img: greek,
      price: 12.99,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
    {
      name: "Bruchetta",
      img: brucheta,
      price: 12.99,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
    {
      name: "Lemon Dessert",
      img: lemond,
      price: 12.99,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
  ];

  return (
    <>
      {weekSalad.map((items) => {
        return (
          <div key={items.img}>
            <div className=" bg-weekback flex flex-col max-w-72  rounded-t-xl  mx-10 text-sm text-black">
              <img src={items.img} alt="img" className="rounded-t-lg" />
              <div className="flex justify-between mx-2 my-2">
                <span className=" font-bold">{items.name}</span>
                <span className=" text-third">{items.price}</span>
              </div>
              <span className=" text-sm mt-3 text-four mx-2">
                {items.description}
              </span>
              <div className=" flex mx-2 mt-10">
                <span className=" font-bold ">Order a Delivery</span>
                <div className="ml-5">
                  <DeliveryDiningIcon />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default WindowsDishes;
