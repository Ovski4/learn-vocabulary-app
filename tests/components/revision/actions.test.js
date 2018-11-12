import reducer from '../../../src/reducers/index';
import { createStore } from 'redux';
import React from 'react';
import Actions from '../../../src/components/revision/actions/connect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('Actions component', () => {

    it('Should render the component', () => {

        const store = createStore(reducer, {
            config: {
                locale: 'en'
            }
        });

        const rendered = renderer.create(<Provider store={store}><Actions /></Provider>).toJSON();
        expect(rendered).toMatchSnapshot();
    });

});
