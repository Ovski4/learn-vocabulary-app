import reducer from '../../../../src/reducers/index';
import { createStore } from 'redux';
import React from 'react';
import EditTranslationForm from '../../../../src/components/edition/translations/editTranslationForm/connect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('EditTranslationForm component', () => {

    it('Should render the component', () => {

        const store = createStore(reducer, {
            config: {
                locale: 'en'
            }
        });

        const rendered = renderer.create(
            <Provider store={store}>
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
