import React from "react";
import { useState } from "react";
function Submit({ handleState }) {
  return (
    <div className="fixed top-1/3  bg-primary rounded-lg py-4 px-2 w-1/2">
      <button
        onClick={handleState}
        className=" absolute corner bg-weekback text-black font-bold text-xl px-3 py-1  rounded-full"
      >
        X
      </button>
      <form action="/" className="  ">
        <div>
          <h1 className="ml-3">Name</h1>
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full text-center rounded-md"
          />
        </div>
        <div>
          <h1 className="ml-3">Phone Number</h1>
          <input
            type="text"
            placeholder="775-555-4321"
            required
            className="w-full text-center rounded-md"
          />
        </div>
        <div>
          <h1 className="ml-3">Email confirmation</h1>
          <input
            type="text"
            placeholder="LittleLemon@"
            required
            className="w-full text-center rounded-md"
          />
        </div>
        <div className="flex justify-center ">
          <button
            type="submit"
            className=" mt-5 bg-weekback text-black font-bold py-2 px-1 rounded-md "
          >
            Confirm Reservation
          </button>
        </div>
      </form>

      <div className="mt-10 text-center">
        <h1 className="italic text-2xl font-semibold">
          "Your Reservation is for <span className=" underline">3</span> people
          at <span className=" underline"> 1:00 PM</span> in the{" "}
          <span className=" underline">19</span> of
          <span className=" underline"> November</span>"
        </h1>
      </div>
    </div>
  );
}

export default Submit;
