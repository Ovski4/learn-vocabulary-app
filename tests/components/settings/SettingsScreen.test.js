import React from 'react';
import SettingsScreen from '../../../src/components/settings/SettingsScreen';
import renderer from 'react-test-renderer';

describe('SettingsScreen component', () => {

    it('Should render the settings screen without crashing', async (done) => {
        const rendered = (await renderer.create(<SettingsScreen />)).toJSON();
        expect(rendered).toBeTruthy();
        done();
    });

});
