import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import toJson from 'enzyme-to-json';

test('Should render header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
