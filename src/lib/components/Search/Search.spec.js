import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';

const props = {
  id: 'foo',
  onSubmit: jest.fn(),
  inputText: {
    label: 'Foo'
  },
  buttonLabel: 'Bar'
};

describe('<Search />', () => {
  const wrapper = shallow(<Search {...props} />);

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('returns a form element', () => {
    expect(wrapper.type()).toBe('form');
  });

  it('marks the form with a search role', () => {
    expect(wrapper.exists('form[role="search"]')).toBe(true);
  });
});
