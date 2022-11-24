import React from "react";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button";
import { v4 as uuidv4 } from "uuid";

import style from "./Form.module.scss";

class Form extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
  state = {
    tarefa: "",
    tempo: "00:00",
  };

  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { ...this.state, selecionado: false, completado: false, id: uuidv4() },
    ]);
    this.setState({
      tarefa: "",
      tempo: "00:00",
    });
  }

  render() {
    return (
      <form
        onSubmit={this.adicionarTarefa.bind(this)}
        className={style.novaTarefa}
        action=""
      >
        <div className={style.inputContainer}>
          <label htmlFor="task">Tarefa</label>
          <input
            type="text"
            name="task"
            id="task"
            value={this.state.tarefa}
            onChange={(evento) =>
              this.setState({ ...this.state, tarefa: evento.target.value })
            }
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">Tempo</label>
          <input
            type="time"
            step="1"
            name="time"
            id="time"
            value={this.state.tempo}
            onChange={(evento) =>
              this.setState({ ...this.state, tempo: evento.target.value })
            }
            min="00:00:00"
            max="01:30:30"
            required
          />
        </div>
        <Button type="submit">Adicionar</Button>
      </form>
    );
  }
}

export default Form;
