import React from 'react';
import { createStore } from 'redux';
import reducer from '../../../src/reducers/index';
import SettingsScreen from '../../../src/components/settings/settingsScreen/connect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

describe('SettingsScreen component', () => {

    const getStore = (locale) => {
        return createStore(reducer, {
            config: {
                locale: locale
            }
        });
    };

    it('Should render the settings screen with the english locale', () => {
        const rendered = renderer.create(
            <Provider store={getStore('en')}>
                <SettingsScreen />
            </Provider>).toJSON();

        expect(rendered).toMatchSnapshot();
    });

    it('Should render the settings screen with the french locale', () => {
        const rendered = renderer.create(
            <Provider store={getStore('fr')}>
                <SettingsScreen />
            </Provider>).toJSON();

        expect(rendered).toMatchSnapshot();
    });

});
