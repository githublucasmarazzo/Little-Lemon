import React, { useState } from "react";
import reducer from "./cases";
function Dates({ days, childValue }) {
  const time = [
    ["12:00 PM"],
    ["6:00 AM", "11:00 AM", "8:00 AM", "2:00 PM"],
    ["7:00 AM", "6:00 PM", "2:00 PM", "9:00 AM", "4:00 PM"],
    ["10:00 PM", "3:00 PM", "11:00 AM"],
    ["8:00 AM"],
    ["8:00 AM", "7:00 PM", "4:00 PM", "5:00 PM"],
    ["1:00 PM", "2:00 PM", "5:00 AM", "5:00 PM", "6:00 AM"],
    ["1:00 PM", "6:00 PM", "3:00 PM", "2:00 AM"],
    ["1:00 PM", "6:00 PM", "3:00 PM", "2:00 AM"],
    ["3:00 PM", "9:00 PM", "8:00 AM", "1:00 PM", "6:00 PM"],
    ["1:00 PM", "11:00 AM", "6:00 PM", "8:00 PM"],
    ["5:00 PM", "8:00 PM", "3:00 PM", "12:00 PM"],
    [],
    ["9:00 AM", "3:00 PM", "5:00 PM", "12:00 PM", "10:00 AM", "11:00 AM"],
    ["2:00 PM", "11:00 AM", "4:00 PM", "1:00 PM"],
    ["2:00 PM", "10:00 AM", "7:00 AM", "6:00 PM"],
    ["11:00 AM", "10:00 PM", "3:00 PM", "7:00 PM"],
    ["9:00 PM"],
    ["8:00 AM", "7:00 PM", "5:00 PM", "4:00 PM"],
    ["8:00 PM", "5:00 PM", "1:00 PM", "5:00 AM"],
    ["3:00 AM", "2:00 PM"],
    ["12:00 PM", "4:00 PM", "10:00 AM", "9:00 AM"],
    ["9:00 PM", "7:00 PM", "11:00 PM"],
    ["11:00 AM", "8:00 AM", "1:00 PM"],
    ["5:00 PM", "12:00 PM", "8:00 PM", "3:00 PM"],
    ["4:00 PM", "2:00 PM", "10:00 AM", "7:00 PM"],
    [],
    ["6:00 AM", "2:00 PM", "11:00 AM", "8:00 AM"],
    ["10:00 AM", "7:00 AM"],
    ["10:00 PM", "7:00 PM", "11:00 AM", "10:00 AM"],
    ["9:00 PM", "8:00 PM", "5:00 PM", "12:00 PM"],
  ];

  const [selectedTime, setSelectedTime] = useState(null);

  const handleRadioChange = (timeValue) => {
    setSelectedTime(timeValue);
    childValue(timeValue);
  };

  return (
    <form className="grid grid-cols-2 place-items-center gap-3">
      {time[days].map((timeValue, index) => (
        <div
          onClick={() => handleRadioChange(timeValue)}
          key={index}
          className="bg-primary text-xl w-32 rounded-md text-white font-bold"
        >
          <input type="radio" checked={selectedTime === timeValue} />
          <h1>{timeValue}</h1>
        </div>
      ))}
    </form>
  );
}

export default Dates;
