import reducer from '../../../../src/reducers/index';
import { createStore } from 'redux';
import React from 'react';
import EditTagForm from '../../../../src/components/edition/tags/editTagForm/connect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('EditTagForm component', () => {

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
                <EditTagForm tag={{id: '1', label: 'test'}} />
            </Provider>
        ).toJSON();
        expect(rendered).toMatchSnapshot();
    });

});
