import { useState } from "react";
import "./App.css";
import Inp from "./assets/componens/Inp";
import Two from "./assets/componens/Two";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Inp />
      <Two />
    </div>
  );
}

export default App;
