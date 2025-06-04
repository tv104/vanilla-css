import styles from "./card.module.css";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const Card = ({ children, title, className, ...props }: CardProps) => {
  return (
    <div className={`${styles.card} ${className || ""}`} {...props}>
      {title && <h2 className="title">{title}</h2>}
      {children}
    </div>
  );
};
