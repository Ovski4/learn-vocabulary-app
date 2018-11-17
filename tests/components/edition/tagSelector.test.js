import reducer from '../../../src/reducers/index';
import { createStore } from 'redux';
import React from 'react';
import TagSelector from '../../../src/components/edition/tagSelector/connect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('TagSelector component', () => {

    it('Should render the component with the english locale', () => {

        const store = createStore(reducer, {
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
                locale: 'en'
            }
        });

        const rendered = renderer.create(
            <Provider store={store}>
                <TagSelector initialSelectedTags={[{
                    id: '1',
                    label: 'test'
                }]}/>
            </Provider>
        ).toJSON();
        expect(rendered).toMatchSnapshot();
    });

});
