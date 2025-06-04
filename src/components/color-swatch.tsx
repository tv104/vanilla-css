import "./color-swatch.css";

interface ColorSwatchProps {
  title: string;
  colors: string[];
}

export const ColorSwatch = ({ title, colors }: ColorSwatchProps) => {
  return (
    <div className="color-swatch">
      <h3>{title}</h3>
      <div className="colors">
        {colors.map((color) => (
          <div key={color} className="color">
            <div
              className="color-box"
              style={{ backgroundColor: `var(${color})` }}
            />
            <span className="color-name">{color}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
