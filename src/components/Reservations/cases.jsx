import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      if (state.guest === 7) {
        alert(
          "We dont have tables for more of seven people sorry for the inconveience"
        );
        return state;
      } else {
        return { ...state, guest: state.guest + 1 };
      }
    case "DECREASE":
      if (state.guest === 0) {
        alert("Cannot go below zero");
        return state;
      } else {
        return { ...state, guest: state.guest - 1 };
      }
    case "OPEN":
      return { ...state, open: !state.open };
    case "ESCPECIAL":
      return { ...state, occasion: "Especial Event" };
    case "VALENTIN":
      return { ...state, occasion: "Valentin Day" };
    case "NORMAL":
      return { ...state, occasion: "Normal Date" };
    case "DAY":
      return { ...state, day: action.payload };
    case "TIME":
      return { ...state, time: action.payload };
    case "CLOSE":
      return { ...state, isActive: !state.isActive };
    case "MODULE":
      if (
        state.guest === 0 ||
        state.occasion === "OCCASION" ||
        state.time === ""
      ) {
        return { ...state };
      } else {
        return { ...state, isActive: !state.isActive };
      }

    default:
      return state;
  }
};

export default reducer;
