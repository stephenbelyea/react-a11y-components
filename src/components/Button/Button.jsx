import React from "react";
import { string, bool } from "prop-types";
import "./Button.css";

function Button({ solid, className, children, ...props }) {
  const styles = solid
    ? `rap-button solid ${className}`
    : `rap-button hollow ${className}`;
  return (
    <button {...props} className={styles}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: string,
  solid: bool,
  className: string
};

Button.defaultProps = {
  type: "button",
  solid: false,
  className: ""
};

export default Button;
