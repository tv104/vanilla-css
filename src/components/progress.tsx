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
            "--progress": progress,
          } as React.CSSProperties
        }
      />
    </div>
  );
};
