import reducer from '../../../src/reducers/index';
import { createStore } from 'redux';
import React from 'react';
import Actions from '../../../src/components/revision/actions/connect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('Actions component', () => {

    const getStore = (locale) => {
        return createStore(reducer, {
            config: {
                locale: locale,
                tagsFeature: true
            }
        });
    };

    it('Should render the component with the english locale', () => {
        const rendered = renderer.create(
            <Provider store={getStore('en')}>
                <Actions />
            </Provider>).toJSON();

        expect(rendered).toMatchSnapshot();
    });

    it('Should render the component with the french locale', () => {
        const rendered = renderer.create(
            <Provider store={getStore('fr')}>
                <Actions />
            </Provider>).toJSON();

        expect(rendered).toMatchSnapshot();
    });

});
