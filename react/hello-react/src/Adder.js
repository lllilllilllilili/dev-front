import React, { useState, useRef } from 'react';

const Adder = () => {
    const [list, setList] = useState([]);
    const inputRef = useRef();

    const onClick = () => {
        if (inputRef.current.value) {
            setList(list.concat(inputRef.current.value));
            inputRef.current.value = "";   
        }
    };

    const removeData = (item) => {
        setList(list.filter(ele => ele !== item));
    }

    return (
        <div>
            <input ref={inputRef}></input>
            <button onClick={onClick}>추가</button>
            <ul>
                {list.map((item) => {
                    return (
                        <li onDoubleClick={() => removeData(item)}>
                            {item}
                        </li>
                )})}
            </ul>
        </div>
    )
}

export default Adder;