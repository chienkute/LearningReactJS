import React, { useState } from "react";
import "./ToggleStyle.css";
// stateless functional component : component nhưng k sử dụng state
// function Toggle() {
//   return <div className="toggle"></div>;
// }
// // stateful functional component : component có sd state
// function Toggle2() {
//   return <div className="toggle"></div>;
// }
function Toggle() {
  // 1. enabling state : useState(initialize value)
  // initialize value : boolean(true,false), number,string ,undefined,null,array,object
  // 2. initialize state : useState(false)
  // 3. reading state :
  // 4. update state
  // const[value, callback :function()]
  const [on, setOn] = useState(false);
  //state change -> re-render :
  const handleToggle = () => {
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}
export default Toggle;
