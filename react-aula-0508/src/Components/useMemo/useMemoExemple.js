import { useMemo } from "react";
import { MemoDataExample } from "../../data/memo-data-example";

function UseMemoExample() {
  const data = MemoDataExample;

  const componentData = useMemo(() => {
    return data.map((item) => (
      <ul>
        <li key={item.id}>{item.nomFuncionario}</li>
      </ul>
    ));
  }, [data]);

  return <>{componentData}</>;
}

export default UseMemoExample;
