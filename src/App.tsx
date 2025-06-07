import { useLayoutEffect, useState } from "react";
import "./styles/index.css";
import { Button } from "./components/button";
import { Card } from "./components/card";
import { ColorSwatch } from "./components/color-swatch";
import { Progress } from "./components/progress";

const steps = ["0%", "10%", "25%", "33%", "66%", "80%", "100%", "100%"];
function App() {
  const [count, setCount] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      const nextStep = (currentStep + 1) % steps.length;
      const value = parseInt(steps[nextStep]);

      setCurrentStep(nextStep);
      setProgress(value);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentStep]);

  const blueColors = [
    "--blue-50",
    "--blue-100",
    "--blue-200",
    "--blue-400",
    "--blue-600",
    "--blue-800",
    "--blue-900",
  ];

  const neutralColors = [
    "--neutral-0",
    "--neutral-50",
    "--neutral-100",
    "--neutral-200",
    "--neutral-400",
    "--neutral-600",
    "--neutral-800",
    "--neutral-900",
    "--neutral-1000",
  ];

  return (
    <>
      <Card title="Color Primitives">
        <ColorSwatch title="Blue Primitives" colors={blueColors} />
        <ColorSwatch title="Neutral Primitives" colors={neutralColors} />
      </Card>

      <Progress progress={progress} />

      <div>
        <Card title="Container Query Demo">
          <p>
            This card component uses container queries to adapt its layout based
            on its own size, not the viewport. Resize the window to see how the
            title size and padding change responsively.
          </p>
          <Button
            variant="primary"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
        </Card>
      </div>
    </>
  );
}

export default App;
