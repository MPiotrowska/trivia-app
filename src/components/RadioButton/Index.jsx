import React from "react";

export const RadioButton = ({ value, checked= false, onChange }) => {
  return (
    <div>
      <input
        type="radio"
        id={value}
        name={value}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label for={value}>{value}</label>
    </div>
  );
};
