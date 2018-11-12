import reducer from '../../../../src/reducers/index';
import { createStore } from 'redux';
import React from 'react';
import NewTagForm from '../../../../src/components/edition/tags/newTagForm/connect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('NewTagForm component', () => {

    it('Should render the component', () => {

        const store = createStore(reducer, {
            tags: [],
            config: {
                locale: 'en'
            }
        });

        const rendered = renderer.create(
            <Provider store={store}>
                <NewTagForm />
            </Provider>
        ).toJSON();
        expect(rendered).toMatchSnapshot();
    });

});
