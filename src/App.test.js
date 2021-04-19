import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('App component', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('starts with a count of 0', () => {
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: 0');
  });

  it('increments count by 1 when the increment button is clicked', () => {
    wrapper.setProps({'test': 'value'});
    const incrementBtn = wrapper.find('button.increment');
    incrementBtn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: 1');
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
