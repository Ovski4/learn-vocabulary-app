import reducer from '../../../../src/reducers/index';
import { createStore } from 'redux';
import React from 'react';
import NewTagForm from '../../../../src/components/edition/tags/newTagForm/connect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('NewTagForm component', () => {

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
                <NewTagForm />
            </Provider>
        ).toJSON();

        expect(rendered).toMatchSnapshot();
    });

    it('Should render the component with the french locale', () => {
        const rendered = renderer.create(
            <Provider store={getStore('fr')}>
                <NewTagForm />
            </Provider>
        ).toJSON();

        expect(rendered).toMatchSnapshot();
    });
});
