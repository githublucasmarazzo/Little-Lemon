import React from "react";

import people from "./people";

function Section() {
  return (
    <>
      {people.map((element) => {
        return (
          <div className="bg-primary mx-auto rounded-lg  p-7 max-w-60 ">
            <div className="flex mb-5 ">
              <h1>Rating</h1>
              <h1>{element.rating}</h1>
            </div>
            <div className="flex items-center">
              <img src={element.img} alt="" className="rounded w-20" />
              <h1 className="text-center  ml-4 ">{element.name}</h1>
            </div>
            <h1 className="italic text-sm text-center mt-5">{element.review}</h1>
          </div>
        );
      })}
    </>
  );
}

export default Section;
