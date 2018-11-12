import reducer from '../../../src/reducers/index';
import { createStore } from 'redux';
import React from 'react';
import TranslationList from '../../../src/components/revision/translationList/connect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('TranslationList component', () => {

    it('Should render the component', () => {

        const store = createStore(reducer, {
            translations: [],
            config: {
                locale: 'en'
            }
        });

        const rendered = renderer.create(<Provider store={store}><TranslationList /></Provider>).toJSON();
        expect(rendered).toMatchSnapshot();
    });

});
