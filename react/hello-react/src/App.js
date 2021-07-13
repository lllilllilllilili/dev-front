import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState([1, 2, 3, 4]);
  const inputValue = useRef();
  let arrayItems = number.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  const onClick = (event) => {
    const newArrayItem = [...number, inputValue.current.value];
    console.log(newArrayItem);
    setNumber(newArrayItem);
    arrayItems = number.map((number) => (
      <li key={number.toString()}>{number}</li>
    ));
  };
  return (
    <div className="App">
      <input type="text" name="inputValue" ref={inputValue}></input>
      <button onClick={onClick}>추가</button>
      {arrayItems}
    </div>
  );
}

export default App;
