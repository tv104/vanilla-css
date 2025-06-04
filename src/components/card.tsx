import "./card.css";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const Card = ({ children, title, className, ...props }: CardProps) => {
  return (
    <div className="card-container">
      <div className={`card ${className || ""}`} {...props}>
        {title && <h2 className="card-title">{title}</h2>}
        {children}
      </div>
    </div>
  );
};
