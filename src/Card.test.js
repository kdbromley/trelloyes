const { findAllInRenderedTree } = require("react-dom/test-utils");
import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';


describe('Card component', () => {
    it('renders w/o crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const tree = renderer 
        .create(<Card title='First Card' content='lorem ipsum' />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    })
})