import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    return (
      <div>
        <p> { number }</p>
        <button onClick={() => {
            if(number < 10){
                setNumber(number + 1)
            } else {
                alert("더 이상 올릴 수 없습니다.")
            }
        }}>+1 버튼</button>
      </div>
    );
}

export default Counter;
