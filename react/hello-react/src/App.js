import "./css/App.css";
import react, { useRef } from "react";
import { ScrollBox } from "./ScrollBox";
function App() {
  const scrollBox = useRef();
  console.log(scrollBox);
  return (
    <div>
      <ScrollBox ref={scrollBox}></ScrollBox>
      <button onClick={() => scrollBox.current.scrollToBottom()}>
        맨 밑으로
      </button>
    </div>
  );
}

export default App;
