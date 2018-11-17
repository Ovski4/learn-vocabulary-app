import React from 'react';
import SettingsScreen from '../../../src/components/settings/settingsScreen/component';
import renderer from 'react-test-renderer';

describe('SettingsScreen component', () => {

    it('Should render the settings screen without crashing with english locale', async (done) => {
        const rendered = (await renderer.create(<SettingsScreen locale="en" />)).toJSON();
        expect(rendered).toMatchSnapshot();
        done();
    });

    it('Should render the settings screen without crashing with french locale', async (done) => {
        const rendered = (await renderer.create(<SettingsScreen locale="fr" />)).toJSON();
        expect(rendered).toMatchSnapshot();
        done();
    });

});
