import React from 'react';
import { string } from 'prop-types';
import { labelType } from '../../types';

function Button({ label, ...buttonProps }) {
  // eslint-disable-next-line react/button-has-type
  return <button {...buttonProps}>{label}</button>;
}

Button.propTypes = {
  label: labelType.isRequired,
  type: string
};

Button.defaultProps = {
  type: 'button'
};

export default Button;
