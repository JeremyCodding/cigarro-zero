import { ComponentProps } from "react";
import "./button.css";

export default function Button({
  children,
  ...props
}: ComponentProps<"button">) {
  return (
    <button className="styled-button" {...props}>
      <p className="btn-cta-text">{children}</p>
    </button>
  );
}
