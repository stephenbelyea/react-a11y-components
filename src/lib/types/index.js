import { shape, string, element, oneOfType } from 'prop-types';

export const labelType = oneOfType([string, element]);

export const inputTextType = shape({
  label: labelType.isRequired,
  description: labelType,
  error: labelType
});

export default { labelType, inputTextType };
