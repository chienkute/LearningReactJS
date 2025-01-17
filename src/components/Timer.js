import React, { useEffect, useState } from "react";

const Timer = () => {
  const [message, setMessage] = useState("Chien");
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(message);
    }, 2000);
    //cleanup function : trc khi thực thi hàm sẽ xóa code cũ
    return () => {
      clearInterval(timer);
    };
  }, [message]);
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default Timer;
