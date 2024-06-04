import React, { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  // KHAI BÁO REF
  // const countRef = React.useRef(0);
  // truy xuất ref
  // console.log(countRef.current);
  // update giá trị của ref
  // countRef.current = 10;
  // BÀI TẬP ĐỒNG HỒ SD USEREF
  const timeRef = useRef(null);
  const [count, setCount] = useState(0);
  const handleStart = () => {
    if (timeRef.current) return;
    timeRef.current = setInterval(() => {
      setCount((counter) => counter + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };
  useEffect(() => {
    return () => clearInterval(timeRef.current);
  }, []);
  return (
    <div>
      <h3>Timer: {count}s</h3>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};

export default StopWatch;
