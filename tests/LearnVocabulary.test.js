import reducer from '../src/reducers/index';
import { createStore } from 'redux';
import React from 'react';
import LearnVocabulary from '../src/components/LearnVocabulary';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('LearnVocabulary component', () => {

    it('Should render the component without crashing after the state is fetched without translations', () => {

        const store = createStore(reducer, {
            translations: [],
            tags: [],
            ui: {
                translationsFilteredBy: null,
                translationsSearch: {
                    edition: '',
                    revision: '',
                }
            }
        });

        const rendered = renderer.create(<Provider store={store}><LearnVocabulary /></Provider>).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('Should render the component without crashing after the state is fetched with translations and tags', () => {

        const store = createStore(reducer, {
            translations: [
                {
                    id: '1',
                    tags: ['1', '2', '3'],
                    word1: 'Blue',
                    word2: 'Bleu',
                    createdAt: new Date('December 17 1995')
                },
                {
                    id: '2',
                    tags: ['4', '5', '1'],
                    word1: 'Red',
                    word2: 'Rouge',
                    createdAt: new Date('December 18 1995')
                },
                {
                    id: '3',
                    tags: ['4', '2', '3'],
                    word1: 'Green',
                    word2: 'Color',
                    createdAt: new Date('December 20 1995')
                }
            ],
            tags: [
                {
                    id: '1',
                    translations: ['1', '2'],
                    createdAt: new Date('December 18 1995'),
                    label: 'label 1'
                },
                {
                    id: '2',
                    translations: ['1', '3'],
                    createdAt: new Date('December 18 1995'),
                    label: 'label 2'
                },
                {
                    id: '3',
                    translations: ['1', '3'],
                    createdAt: new Date('December 18 1995'),
                    label: 'label 3'
                },
                {
                    id: '4',
                    translations: ['3', '2'],
                    createdAt: new Date('December 18 1995'),
                    label: 'label 4'
                },
                {
                    id: '5',
                    translations: ['2'],
                    createdAt: new Date('December 18 1995'),
                    label: 'label 5'
                }
            ],
            ui: {
                translationsFilteredBy: null,
                translationsSearch: {
                    edition: '',
                    revision: ''
                }
            }
        });

        const rendered = renderer.create(<Provider store={store}><LearnVocabulary /></Provider>).toJSON();
        expect(rendered).toBeTruthy();
    });

});
