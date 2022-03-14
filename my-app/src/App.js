import './App.css';
import Menu from "./Menu";

function App() {

  const array = ['item1', 'item2', 'item3', 'item4'];

  return (
    <div className="App">
      <ul>
          {
              // Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
              // Метод map вызывает переданную функцию один раз для каждого элемента

              array.map((item) =>
                <li>
                    <span>{item}</span>
                    <button onClick={() => alert(item)}>alert</button>
                </li>
              )
          }
      </ul>

      <Menu/>
    </div>
  );
}

export default App;
