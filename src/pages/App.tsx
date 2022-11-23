import Form from "../components/Form";
import List from "../components/List";
import { Stopwatch } from "../components/Stopwatch";

import style from "./App.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <Stopwatch />
      <List />
    </div>
  );
}

export default App;
