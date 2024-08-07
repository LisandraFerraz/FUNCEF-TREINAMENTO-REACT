import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UserDetailsComponent() {
  const data = {
    name: "Lisandra",
    age: 21,
    company: "Digisystem",
  };

  const [userDetails, setUserDetails] = useState(data);

  useEffect(() => {
    localStorage.setItem("@userInfo", JSON.stringify(userDetails));

    console.log("User Info | ", localStorage.getItem("@userInfo"));

    return () => {
      console.log("Limpando Storage");
      localStorage.removeItem("@userInfo");
    };
  }, [userDetails]);

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
      </ul>
      <h1>Detalhes Usuário:</h1>
      <p>Nome: {userDetails.name}</p>
      <p>Idade: {userDetails.age}</p>
      <p>Empresa: {userDetails.company}</p>
    </div>
  );
}

export default UserDetailsComponent;
