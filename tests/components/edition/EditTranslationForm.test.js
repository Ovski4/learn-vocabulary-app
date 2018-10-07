import React from 'react';
import EditTranslationForm from '../../../src/components/edition/translations/editTranslationForm/component';
import renderer from 'react-test-renderer';

describe('EditTranslationForm component', () => {

    it('Should render the EditTranslationForm component without crashing', async (done) => {
        const rendered = (await renderer.create(<EditTranslationForm />)).toJSON();
        expect(rendered).toBeTruthy();
        done();
    });

});
