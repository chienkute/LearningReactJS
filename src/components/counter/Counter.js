import React, { useEffect, useState } from "react";

const Counter = () => {
  //stale state : lỗi lấy giá trị bên ngoài ban đầu
  const [count, setCount] = useState(0);
  // const handleIncrement = () => {
  //   setTimeout(function delay() {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // };
  const [info, setInfo] = useState({
    firstname: "tran",
    lastname: "chien",
  });
  useEffect(() => {
    console.log("from input");
  }, [info.firstname]);

  // useEffect(() => {
  //   // setCount(count + 1); : chạy vô tận
  //   console.log(`count: ${count}`);
  // }, [count]);
  // khi giá trị trong dependencies thay đổi thì sẽ chạy code trong effect
  return (
    <div className="p-5 flex gap-x-4 items-center">
      <input
        type="text"
        name="firstName"
        value={info.firstname}
        onChange={(e) =>
          setInfo({
            ...info,
            firstname: e.target.value,
          })
        }
      />
      <span className="text-2xl font-bold">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="inline-block p-3 bg-green-400 text-white"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
