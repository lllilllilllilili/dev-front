import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    return (
      <div>
        <p> { number }</p>
        <button onClick={() => setNumber(number + 1)}>+1 버튼</button>
      </div>
    );
}

export default Counter;
