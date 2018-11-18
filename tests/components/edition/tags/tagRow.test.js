import reducer from '../../../../src/reducers/index';
import { createStore } from 'redux';
import React from 'react';
import TagRow from '../../../../src/components/edition/tags/tagRow/connect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('TagRow component', () => {

    const getStore = (locale) => {
        return createStore(reducer, {
            tags: [
                {
                    id: '1',
                    label: 'test'
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
                <TagRow key="1" id="1"/>
            </Provider>
        ).toJSON();

        expect(rendered).toMatchSnapshot();
    });

    it('Should render the component with the french locale', () => {
        const rendered = renderer.create(
            <Provider store={getStore('fr')}>
                <TagRow key="1" id="1"/>
            </Provider>
        ).toJSON();

        expect(rendered).toMatchSnapshot();
    });

});
