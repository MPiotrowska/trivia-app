import React from "react";
import './RadioButton.css'

export const RadioButton = ({ value, checked= false, onChange, onClick }) => {
  return (
    <button name={value} className='container'onClick={onClick}>
      <input
        type="radio"
        id={value}
        name={value}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className='label'for={value}>{value}</label>
    </button>
  );
};
