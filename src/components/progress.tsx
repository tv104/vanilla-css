import "./progress.css";

interface ProgressProps {
  progress: number;
}

export const Progress = ({ progress }: ProgressProps) => {
  return (
    <div className="progress">
      <div
        className="progress-bar"
        style={
          {
            "--progress": `${progress}%`,
            "--hue": `${(progress + 40) * 0.9}deg`,
          } as React.CSSProperties
        }
      />
    </div>
  );
};
