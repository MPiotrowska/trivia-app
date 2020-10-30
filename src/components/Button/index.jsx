import React from "react";
import "./Button.css";

export const Button = ({ onClick, children, disabled}) => {
  return <button className='button' disabled={disabled} onClick={onClick}>{children}</button>;
};
