import './App.css';
import { useRef } from "react";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

function App() {

    const inputEl = useRef(null);

    const newInputEl = () => {
        inputEl.current.focus();
    };

    const newTest = (event) => {
        if (event.target.value === "Hello") {
            inputEl.current.blur();
        }
    };

  return (
    <div className="App">

      <h1>Alex</h1>
      <input ref={inputEl} onChange={newTest} type="text" />
      <button onClick={newInputEl}>focus</button>

      <Menu/>
      <MenuItem/>
    </div>
  );
}

export default App;
