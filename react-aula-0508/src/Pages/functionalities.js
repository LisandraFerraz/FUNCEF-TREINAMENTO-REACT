import { useState } from "react";
import UseEffectExample from "../Components/useEffect/useEffectExample";
import UseMemoExample from "../Components/useMemo/useMemoExemple";
import UseRefExemple from "../Components/useRef/useRefExample";
import { Link } from "react-router-dom";

function Functionalities() {
  const [nomFuncionario, setNomFuncionario] = useState("");
  const [nomFuncionarios, setNomFuncionarios] = useState([]);
  return (
    <>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
      </ul>
      <h1>Veja todas as Funcionalidades!</h1>

      <div>
        <div>
          <h3>Binding (useState)</h3>
          <input
            type="text"
            value={nomFuncionario}
            onChange={(el) => setNomFuncionario(el.target.value)}
          />
          <button onClick={() => setNomFuncionarios(nomFuncionario)}>
            SUBMMIT
          </button>
          <p>Nome: {nomFuncionario}</p>
        </div>
        <div>
          <h3>After submmit (useEffect)</h3>
          <UseEffectExample nomFuncionarios={nomFuncionarios} />
        </div>
        <div>
          <h3>List Funcionarios (useMemo)</h3>
          <UseMemoExample />
        </div>
        <div>
          <h3>Inserir texto (useRef)</h3>
          <UseRefExemple />
        </div>
      </div>
    </>
  );
}

export default Functionalities;
