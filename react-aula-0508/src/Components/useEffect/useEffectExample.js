import { useEffect, useState } from "react";

function UseEffectExample(params) {
  const [nomeFuncionario, setNomeFuncionario] = useState([]);

  useEffect(() => {
    console.log(params.nomFuncionarios);
    setNomeFuncionario(params.nomFuncionarios);
    // setNomesFuncionarios(params.nomFuncionario);
  }, [params.nomFuncionarios]);

  return <p>Nome: {nomeFuncionario}</p>;
}
export default UseEffectExample;
