import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          if (count >= 10) alert("더 이상 증가시킬 수 없습니다.");
          else setCount(count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Counter;
