import reducer from '../../../src/reducers/index';
import { createStore } from 'redux';
import React from 'react';
import TagSelector from '../../../src/components/edition/tagSelector/connect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('TagSelector component', () => {

    const getStore = (locale) => {
        return createStore(reducer, {
            tags: [
                {
                    id: '1',
                    label: 'test'
                },
                {
                    id: '2',
                    label: 'test2'
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
                <TagSelector initialSelectedTags={[{
                    id: '1',
                    label: 'test'
                }]}/>
            </Provider>
        ).toJSON();

        expect(rendered).toMatchSnapshot();
    });

    it('Should render the component with the french locale', () => {
        const rendered = renderer.create(
            <Provider store={getStore('fr')}>
                <TagSelector initialSelectedTags={[{
                    id: '1',
                    label: 'test'
                }]}/>
            </Provider>
        ).toJSON();

        expect(rendered).toMatchSnapshot();
    });

});
