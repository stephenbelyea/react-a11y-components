import React from 'react';
import { string } from 'prop-types';
import { inputTextType } from '../../types';
import { LabelText } from '.';

function getLabelTextChildren({ label, error, description }) {
  return [
    { type: 'label', value: label },
    { type: 'description', value: description || null },
    { type: 'error', value: error || null }
  ];
}

function InputLabel({ allText, ...labelProps }) {
  return (
    // eslint-disable-next-line
    <label {...labelProps}>
      {getLabelTextChildren(allText).map(({ type, value }) => {
        if (!value) return null;
        return (
          <LabelText key={type} type={type}>
            {value}
          </LabelText>
        );
      })}
    </label>
  );
}

InputLabel.propTypes = {
  htmlFor: string.isRequired,
  allText: inputTextType.isRequired
};

export default InputLabel;
