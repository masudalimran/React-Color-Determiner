import React from "react";
import "../../styles/square.css";

export default function Square({ color, hexColor }) {
  return (
    <div className="squareBox" style={{ background: color }}>
      {color === "" ? (
        <p>Empty Value</p>
      ) : (
        <p className="withColorP">
          {color} <span>{hexColor}</span>
        </p>
      )}
    </div>
  );
}
