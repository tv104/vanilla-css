import "./button.css";

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
    <div className="btn-container">
      <button className={`btn--${variant} ${className}`} {...props}>
        {children}
      </button>
    </div>
  );
};
