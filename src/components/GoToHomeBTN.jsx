import React from "react";
import { Link } from "react-router-dom";

export const GoToHomeBTN = () => {
  return (
    <>
      <button>
        <Link to="/">Go to home</Link>
      </button>
    </>
  );
};
