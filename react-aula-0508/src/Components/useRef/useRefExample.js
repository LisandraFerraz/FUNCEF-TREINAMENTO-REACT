import React, { useRef, useState } from "react";

function UseRefExemple() {
  const inputRef = useRef("");

  const [texto, setTexto] = useState("");

  return (
    <>
      <input
        ref={inputRef}
        onChange={(e) => setTexto(e.target.value)}
        type="text"
      />
      <p>Input text: {texto}</p>
    </>
  );
}

export default UseRefExemple;
