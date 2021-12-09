import { useState } from "react";
import "./App.css";
import ChangeColorForm from "./components/color/ChangeColorForm";
import Square from "./components/color/Square";

function App() {
  const [color, setColor] = useState("");
  const [hexColor, setHexColor] = useState("");
  return (
    <div className="App">
      <Square color={color} hexColor={hexColor} />
      <ChangeColorForm
        color={color}
        setColor={setColor}
        setHexColor={setHexColor}
      />
      <></>
    </div>
  );
}

export default App;
