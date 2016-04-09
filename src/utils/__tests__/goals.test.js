
jest.unmock('../../components/goals'); 

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
// import CheckboxWithLabel from '../../home';

// describe('goals', () => {
//   it('changes the text after click', () => {
//     // Render a checkbox with label in the document
//     const checkbox = TestUtils.renderIntoDocument(
//       <CheckboxWithLabel labelOn="On" labelOff="Off" />
//     );

//     const checkboxNode = ReactDOM.findDOMNode(checkbox);

//     // Verify that it's Off by default
//     expect(checkboxNode.textContent).toEqual('Off');

//     // ...
//   });
// });