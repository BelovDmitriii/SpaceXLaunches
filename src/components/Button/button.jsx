import React from "react";

function Button({onClick, text}){
  
  const buttonOnClick = (e) => {
    e.preventDefault();
    onClick && onClick();
  };
  return(
    <button onClick={buttonOnClick}>
      {text}
    </button>
  )
}

export default Button;