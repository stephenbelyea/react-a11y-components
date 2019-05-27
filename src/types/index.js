import { shape, string } from 'prop-types';

export const inputTextType = shape({
  label: string.isRequired,
  description: string,
  error: string
});

export default { inputTextType };
