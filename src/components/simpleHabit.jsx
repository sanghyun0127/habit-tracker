import React, { useRef, useState } from "react";

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  /*
  useCallback : 만약 handleIncrement가 자식 컴포넌트라면 onClick의 prop에 새로운 콜백이 전달되면
  memo를 써도 함수 자체가 변경되기 때문에 계속 업데이트가 되는 문제가 있음. 이를 방지하기 위해 사용
  => 리액트가 자동으로 동일한 콜백함수를 전달
  */
  const handleIncrement = () => {
    setCount(count + 1);
  };

  /* 
  두번째 인자의 어떤 값이 변경되었을 때만 호출.
  아무것도 안쓰면 state 중 아무거나 변경되면 호출
  [] => 처음에만 호출
  */

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
