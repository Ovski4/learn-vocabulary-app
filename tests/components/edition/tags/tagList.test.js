import reducer from '../../../../src/reducers/index';
import { createStore } from 'redux';
import React from 'react';
import TagList from '../../../../src/components/edition/tags/tagList/connect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('TagList component', () => {

    it('Should render the component', () => {

        const store = createStore(reducer, {
            tags: [],
            config: {
                locale: 'en'
            }
        });

        const rendered = renderer.create(
            <Provider store={store}>
                <TagList />
            </Provider>
        ).toJSON();
        expect(rendered).toMatchSnapshot();
    });

});
