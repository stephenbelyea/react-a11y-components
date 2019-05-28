/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';

import { LabelText } from '.';

const props = {
  type: 'foo',
  text: 'bar'
};

describe('<LabelText />', () => {
  const wrapper = shallow(<LabelText {...props} />);

  it('renders without crashing', () => {
    expect(wrapper);
  });

  it('creates className from the type', () => {
    expect(wrapper.hasClass(`input-${props.type}`)).toBe(true);
  });

  it('contains the passed text', () => {
    expect(wrapper.text()).toBe(props.text);
  });

  it('returns null when no text is passed', () => {
    const nullWrapper = shallow(<LabelText type={props.type} />);
    expect(nullWrapper.isEmptyRender()).toBe(true);
  });
});
