/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';

import { InputLabel } from '.';

const props = {
  htmlFor: 'foo',
  allText: {
    label: 'Foo'
  }
};

describe('<InputLabel />', () => {
  const wrapper = shallow(<InputLabel {...props} />);

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('returns a label element', () => {
    expect(wrapper.type()).toBe('label');
  });

  it('binds htmlFor to the label', () => {
    expect(wrapper.exists(`label[htmlFor='${props.htmlFor}']`)).toBe(true);
  });
});
