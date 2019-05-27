/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

function createTestText() {
  return {
    label: 'Foo',
    placeholder: 'Foo Bar',
    description: 'Bar'
  };
}

function createTestProps(props) {
  return {
    id: 'foo',
    allText: createTestText(),
    value: 'bar',
    onClick: jest.fn(),
    ...props
  };
}

let wrapper;
const createWrapper = props => shallow(<Input {...props} />);
beforeEach(() => {
  const props = createTestProps();
  wrapper = createWrapper(props);
});

describe('<Input />', () => {
  it('renders without crashing', () => {
    expect(wrapper);
  });
});
