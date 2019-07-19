import React from "react";
import { string } from "prop-types";

function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

Button.propTypes = {
  type: string
};

Button.defaultProps = {
  type: "button"
};

export default Button;
