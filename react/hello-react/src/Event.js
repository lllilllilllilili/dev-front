import React, { useRef } from 'react';

const Event = () => {
    const userReference = useRef()
    const contentReference = useRef()

    const onClick = () => {
        if(userReference.current.value && contentReference.current.value){
            alert(contentReference.current.value);
        }
    }

    const checkFull = (e) => {
        if(e.key === 'Enter') {
            onClick();
        }
    }

    return (
      <div>
        <input ref={userReference} placeholder="사용자를 입력하세요" onKeyPress={checkFull}></input>
        <input ref={contentReference} placeholder="내용을 입력하세요" onKeyPress={checkFull}></input>
        <button onClick={onClick}>입력</button>
      </div>
    );
  }
  
  export default Event;
  