"use client";

import { useState } from "react";

export default function Button() {
  const [name, setName] = useState("SYGYASGASYGYAGSYG");

  const handleChangeName = () => {
    setName("Vinícius");
  };
  return (
    <>
      <button onClick={handleChangeName}>Alterar nome</button>
      <h3>Nome: {name}</h3>
    </>
  );
}
