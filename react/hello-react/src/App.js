import "./App.css";

function App() {
  const array = [1, 2, 4, 8];
  const arrayItems = array.map((number) => <ul>{number}</ul>);
  onkeypress = (event) => {
    console.log("event");
  };
  return (
    <div className="App">
      <input></input>
      <button onClick={onkeypress}>추가</button>
      {arrayItems}
    </div>
  );
}

export default App;
