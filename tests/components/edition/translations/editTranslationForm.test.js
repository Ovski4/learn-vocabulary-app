import reducer from '../../../../src/reducers/index';
import { createStore } from 'redux';
import React from 'react';
import EditTranslationForm from '../../../../src/components/edition/translations/editTranslationForm/connect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('EditTranslationForm component', () => {

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
                <EditTranslationForm translation={{
                    id: '1',
                    createdAt: new Date('December 20 1995'),
                    word1: 'word1',
                    word2: 'word2',
                    tags: []
                }} />
            </Provider>
        ).toJSON();

        expect(rendered).toMatchSnapshot();
    });

});
