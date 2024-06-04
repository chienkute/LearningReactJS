import React from "react";
//object destructuring
// const student = {
//   name: "Chien",
//   age: 18,
// };
// const { name, age } = student;
const Cell = ({ value, onClick, className }) => {
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
