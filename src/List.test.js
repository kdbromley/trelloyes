import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import STORE from './store'

const cards = STORE.allCards;


describe('List component', () => {
    it('renders w/o crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const tree = renderer 
        .create(<List header='First List' cards={cards} />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    })
})