import React from "react";

export const RadioButton = ({value}) => {
  return (
    <div>
      <input type="radio" id={value} name={value} value={value} checked />
      <label for={value}>{value}</label>
    </div>
  );
};
