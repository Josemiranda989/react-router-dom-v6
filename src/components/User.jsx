import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../data/users.jsx";

export const User = () => {
  let { id } = useParams(); //typeof String

  const [user, setUser] = useState("");

  useEffect(() => {
    let userFound = Data.find((e) => {
      return e.id === parseInt(id);
    });
    setUser(userFound);
  }, []);

  /* Opción con un IF
   if (user) {
    return (
      <div>
        <h1>User number {user.name}</h1>
        <img src={user.img} alt={user.name} />
        <hr />
        <h2>Number #{user.id}</h2>
      </div>
    );
  } else {
    return <div>User Not Found</div>;
  } */
  return user ? (
    <div>
      <h1>User: {user.name}</h1>
      <img src={user.img} alt={user.name} />
      <hr />
      <h2>Number #{user.id}</h2>
    </div>
  ) : (
    <div>User Not Found</div>
  );
};
