import React from "react";
import colorNames from "colornames";
import "../../styles/changeColorForm.css";

export default function ChangeColorForm({ color, setColor, setHexColor }) {
  return (
    <form className="changeColorForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="changeColor">Enter Color</label>
      <input
        autoFocus
        id="changeColor"
        role="form"
        type="text"
        placeholder="Enter Color Name"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setHexColor(colorNames(e.target.value));
        }}
      />
    </form>
  );
}
