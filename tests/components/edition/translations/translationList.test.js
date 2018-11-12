import reducer from '../../../../src/reducers/index';
import { createStore } from 'redux';
import React from 'react';
import TranslationList from '../../../../src/components/edition/translations/translationList/connect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('TranslationList component', () => {

    it('Should render the component with an empty list', () => {

        const store = createStore(reducer, {
            translations: [],
            config: {
                locale: 'en'
            }
        });

        const rendered = renderer.create(
            <Provider store={store}>
                <TranslationList />
            </Provider>
        ).toJSON();
        expect(rendered).toMatchSnapshot();
    });

    it('Should render the component with translations', () => {

        const store = createStore(reducer, {
            translations: [
                {
                    id: '1',
                    createdAt: new Date('December 20 1995'),
                    word1: 'word1',
                    word2: 'word2',
                    tags: []
                },
                {
                    id: '2',
                    createdAt: new Date('December 20 1995'),
                    word1: 'word3',
                    word2: 'word4',
                    tags: []
                }
            ],
            config: {
                locale: 'en'
            }
        });

        const rendered = renderer.create(
            <Provider store={store}>
                <TranslationList />
            </Provider>
        ).toJSON();
        expect(rendered).toMatchSnapshot();
    });

});
