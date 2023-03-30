import React from "react";
import { Link } from "react-router-dom";

export const GoToHome = () => {
  return (
    <>
      <button>
        <Link to="/">GoToHomeBTN</Link>
      </button>
    </>
  );
};
