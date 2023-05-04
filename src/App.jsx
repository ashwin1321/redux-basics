import { useState } from "react";
import Navbar from "./navbar";
import "./App.css";
import Shop from "./Shop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container">
        <Shop />
      </div>
    </>
  );
}

export default App;
