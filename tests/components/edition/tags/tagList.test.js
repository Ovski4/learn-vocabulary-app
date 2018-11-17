import reducer from '../../../../src/reducers/index';
import { createStore } from 'redux';
import React from 'react';
import TagList from '../../../../src/components/edition/tags/tagList/connect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('TagList component', () => {

    const getStore = (locale) => {
        return createStore(reducer, {
            tags: [],
            config: {
                locale: locale
            }
        });
    }

    it('Should render the component with the english locale', () => {
        const rendered = renderer.create(
            <Provider store={getStore('en')}>
                <TagList />
            </Provider>
        ).toJSON();

        expect(rendered).toMatchSnapshot();
    });

});
