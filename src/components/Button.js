import React from "react";

function Button(props) {
  return (
    <button
      style={{ backgroundColor: props.color }}
      onClick={props.onClick}
      className="btn"
    >
      {props.text}
    </button>
  );
}

export default Button;
