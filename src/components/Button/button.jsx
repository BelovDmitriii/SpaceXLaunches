import React from "react";
import './button.css';

function Button({onClick, text}){
  
  const buttonOnClick = (e) => {
    e.preventDefault();
    onClick && onClick();
  };
  return(
    <button onClick={buttonOnClick} className="button">
      {text}
    </button>
  )
}

export default Button;