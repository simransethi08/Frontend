// __tests__/CheckboxWithLabel-test.js

//Enzyme is a JavaScript Testing utility for React that makes it easier to
// assert, manipulate, and traverse your React Components' output.

//Shallow rendering is useful to constrain yourself to 
//testing a component as a unit, and to ensure that your 
//tests aren't indirectly asserting on behavior of
// child components.

import React from 'react';
import { shallow } from 'enzyme';
import CheckboxWithLabel from '../CheckboxWithLabel';

test('CheckboxWithLabel changes the text after click', () => {
    // Render a checkbox with label in the document
    const checkbox = shallow(
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
    );

    expect(checkbox.text()).toEqual('Off');

    checkbox.find('input').simulate('change');

    expect(checkbox.text()).toEqual('On');
});