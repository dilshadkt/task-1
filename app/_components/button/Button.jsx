import React from "react";

const Button = ({ value, color }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="p-2 px-4 bg-blue-500 text-white rounded-lg"
    >
      {value}
    </button>
  );
};

export default Button;
