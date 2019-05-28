import React from 'react';
import { string, node } from 'prop-types';

function Button(props) {
  // eslint-disable-next-line react/button-has-type
  return <button {...props} />;
}

Button.propTypes = {
  children: node.isRequired,
  type: string
};

Button.defaultProps = {
  type: 'button'
};

export default Button;
