import React from "react";
import { Item } from "./Item";
import style from "./List.module.scss";

function List() {
  const Tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
    },
    {
      tarefa: "Typescript",
      tempo: "03:00:00",
    },
  ];
  return (
    <aside className={style.listaTarefas}>
      <ul>
        <h2>Estudos do dia</h2>
        {Tarefas.map((item, index) => (
          <Item {...item} key={index} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
