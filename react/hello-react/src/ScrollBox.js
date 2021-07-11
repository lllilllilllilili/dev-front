import React, { forwardRef, useRef, useImperativeHandle } from "react";
import "./css/ScrollBox.css";
export const ScrollBox = forwardRef((props, ref) => {
  //const [count, setCount] = useState(0);
  const inputRef = useRef(null || ref);
  useImperativeHandle(ref, () => ({
    scrollToBottom() {
      const { scrollHeight, clientHeight } = inputRef.current;
      /* 앞 코드에는 비구조화 할당 문법을 사용했습니다.
            다음 코드와 같은 의미입니다.
            const scrollHeight = this.box.scrollHeight;
            const clientHeight = this.box.cliengHeight;
            */
      inputRef.current.scrollTop = scrollHeight - clientHeight;
    },
  }));

  return (
    <div className="style" ref={inputRef}>
      <div className="innerStyle"></div>
    </div>
  );
});
