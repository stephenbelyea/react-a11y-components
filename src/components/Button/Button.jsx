import React from "react";
import { string } from "prop-types";
import stylish from "@dmamills/stylish";

const styles = stylish({
  border: "solid .1rem royalblue",
  padding: ".5rem 1rem",
  "font-weight": "bold",
  background: "royalblue",
  "border-radius": ".25rem",
  color: "#fff",
  cursor: "pointer",
  transition: "background 150ms, border 150ms",
  ":hover, :focus": {
    background: "navy",
    "border-color": "navy"
  }
});

function Button({ children, ...props }) {
  return (
    <button {...props} className={styles}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: string
};

Button.defaultProps = {
  type: "button"
};

export default Button;
