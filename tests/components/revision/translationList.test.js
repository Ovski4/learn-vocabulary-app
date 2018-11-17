import reducer from '../../../src/reducers/index';
import { createStore } from 'redux';
import React from 'react';
import TranslationList from '../../../src/components/revision/translationList/connect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('TranslationList component', () => {

    const getStore = (locale) => {
        return createStore(reducer, {
            translations: [],
            config: {
                locale: locale
            }
        });
    };

    it('Should render the component with the english locale', () => {
        const rendered = renderer.create(
            <Provider store={getStore('en')}>
                <TranslationList />
            </Provider>).toJSON();

        expect(rendered).toMatchSnapshot();
    });

    it('Should render the component with the french locale', () => {
        const rendered = renderer.create(
            <Provider store={getStore('fr')}>
                <TranslationList />
            </Provider>).toJSON();

        expect(rendered).toMatchSnapshot();
    });

});
