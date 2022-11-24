import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import { Stopwatch } from "../components/Stopwatch";
import { ITarefa } from "../types/tarefa";

import style from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }

  function finaizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return { ...tarefa, selecionado: false, completado: true };
          }
          return tarefa;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <Stopwatch selecionado={selecionado} finaizarTarefa={finaizarTarefa} />
      <List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
    </div>
  );
}

export default App;
