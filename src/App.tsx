import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/index.css";
import { Button } from "./components/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <Button
          variant="primary"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <Button
          variant="primary"
          onClick={() => setCount((count) => count + 1)}
          disabled
        >
          Disabled button
        </Button>
      </div>
    </>
  );
}

export default App;
