import "./progress.css";

interface ProgressProps {
  progress: number;
}

export const Progress = ({ progress }: ProgressProps) => {
  const isSuccess = progress === 100;

  return (
    <div className="progress">
      <div
        className={`progress-bar ${isSuccess ? "success" : ""}`}
        style={{ "--progress": `${progress}%` } as React.CSSProperties}
      >
        {progress}%
      </div>
    </div>
  );
};
