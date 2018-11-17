import reducer from '../../../../src/reducers/index';
import { createStore } from 'redux';
import React from 'react';
import EditTagForm from '../../../../src/components/edition/tags/editTagForm/connect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('EditTagForm component', () => {

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
    }

    it('Should render the component with the english locale', () => {
        const rendered = renderer.create(
            <Provider store={getStore('en')}>
                <EditTagForm tag={{id: '1', label: 'test'}} />
            </Provider>
        ).toJSON();

        expect(rendered).toMatchSnapshot();
    });

});
