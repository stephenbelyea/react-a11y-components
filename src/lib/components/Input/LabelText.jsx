import React from 'react';
import { string, node } from 'prop-types';

function LabelText({ type, ...props }) {
  return <span className={`label-text-${type}`} {...props} />;
}

LabelText.propTypes = {
  children: node.isRequired,
  type: string.isRequired
};

export default LabelText;
