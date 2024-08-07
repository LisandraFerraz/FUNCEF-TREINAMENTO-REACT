import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    console.log("User Info | ", localStorage.getItem("@userInfo"));
  });

  return (
    <>
      <h1>Bem-vindo(a)!</h1>
      <ul>
        <li>
          <Link to="/funcionalidades">Funcionalidades</Link>
        </li>
        <li>
          <Link to="/user-details">Detalhes do Usuário</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
