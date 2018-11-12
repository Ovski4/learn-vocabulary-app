import reducer from '../../../../src/reducers/index';
import { createStore } from 'redux';
import React from 'react';
import TagRow from '../../../../src/components/edition/tags/tagRow/connect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('TagRow component', () => {

    it('Should render the component', () => {

        const store = createStore(reducer, {
            tags: [
                {
                    id: '1',
                    label: 'test'
                }
            ],
            config: {
                locale: 'en'
            }
        });

        const rendered = renderer.create(
            <Provider store={store}>
                <TagRow key="1" id="1"/>
            </Provider>
        ).toJSON();
        expect(rendered).toMatchSnapshot();
    });

});
