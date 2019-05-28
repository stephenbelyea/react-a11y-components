import React from 'react';
import { string } from 'prop-types';

function LabelText({ type, text }) {
  if (!text) return null;
  return <span className={`input-${type}`}>{text}</span>;
}

LabelText.propTypes = {
  type: string.isRequired,
  text: string
};

LabelText.defaultProps = {
  text: ''
};

export default LabelText;
