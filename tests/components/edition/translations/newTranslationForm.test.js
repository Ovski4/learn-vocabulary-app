import reducer from '../../../../src/reducers/index';
import { createStore } from 'redux';
import React from 'react';
import NewTranslationForm from '../../../../src/components/edition/translations/newTranslationForm/connect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('NewTranslationForm component', () => {

    it('Should render the component', () => {

        const store = createStore(reducer, {
            config: {
                locale: 'en'
            }
        });

        const rendered = renderer.create(
            <Provider store={store}>
                <NewTranslationForm />
            </Provider>
        ).toJSON();
        expect(rendered).toMatchSnapshot();
    });

});
