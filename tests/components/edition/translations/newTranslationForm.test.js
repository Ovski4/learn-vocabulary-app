import reducer from '../../../../src/reducers/index';
import { createStore } from 'redux';
import React from 'react';
import NewTranslationForm from '../../../../src/components/edition/translations/newTranslationForm/connect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('NewTranslationForm component', () => {

    const getStore = (locale) => {
        return createStore(reducer, {
            config: {
                locale: locale
            }
        });
    };

    it('Should render the component with the english locale', () => {
        const rendered = renderer.create(
            <Provider store={getStore('en')}>
                <NewTranslationForm />
            </Provider>
        ).toJSON();

        expect(rendered).toMatchSnapshot();
    });

    it('Should render the component with the french locale', () => {
        const rendered = renderer.create(
            <Provider store={getStore('fr')}>
                <NewTranslationForm />
            </Provider>
        ).toJSON();

        expect(rendered).toMatchSnapshot();
    });

});
