import React from 'react';
import { string } from 'prop-types';
import { inputTextType } from '../../types';
import { LabelText } from '.';

function InputLabel({ allText, ...labelProps }) {
  const { label, error, description } = allText;
  return (
    // eslint-disable-next-line
    <label {...labelProps}>
      <LabelText type="label" text={label} />
      <LabelText type="error" text={error} />
      <LabelText type="description" text={description} />
    </label>
  );
}

InputLabel.propTypes = {
  htmlFor: string.isRequired,
  allText: inputTextType.isRequired
};

export default InputLabel;
