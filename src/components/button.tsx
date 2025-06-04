import styles from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
}

export const Button = ({
  children,
  variant,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.btn} ${styles[`btn--${variant}`]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
