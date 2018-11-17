import reducer from '../../../../src/reducers/index';
import { createStore } from 'redux';
import React from 'react';
import TranslationRow from '../../../../src/components/edition/translations/translationRow/connect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('TranslationRow component', () => {

    const getStore = (locale) => {
        return createStore(reducer, {
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
                locale: locale
            }
        });
    };

    it('Should render the component with the english locale', () => {
        const rendered = renderer.create(
            <Provider store={getStore('en')}>
                <TranslationRow id="1" key="1"/>
            </Provider>
        ).toJSON();

        expect(rendered).toMatchSnapshot();
    });

});
