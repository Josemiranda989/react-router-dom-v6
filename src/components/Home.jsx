import React, { useState } from "react";
import { Link } from "react-router-dom";
let viteLogo =
  "https://scontent.ftuc1-1.fna.fbcdn.net/v/t39.30808-6/274699742_5150889034999240_4581059898908296187_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hbxEsyDuysgAX9Di3-i&_nc_ht=scontent.ftuc1-1.fna&oh=00_AfAry93_oFdM-6rPZURdzjxa2pUZ0uxFIZGV77ER5EmGbw&oe=642A6AF6";
import reactLogo from "../assets/react.svg";

import { Data } from "../data/users.jsx";
export const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>
        <Link to="/about">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <Link to="/contact">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>React router dom v6</p>
      </div>

      <div className="card">
        <h3>Dinamic users 📄📄</h3>
        <ul>
          {Data.map((el) => {
            return (
              <Link to={`/users/${el.id}`}>
                <li>{el.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
