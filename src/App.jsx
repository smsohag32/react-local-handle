import { useState } from "react";
import "./App.css";
import Cosmetics from "./components/Cosmetics/Cosmetics";
import Shoes from "./components/Shoes/Shoes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Cosmetics />
      <Shoes />
    </div>
  );
}

export default App;
