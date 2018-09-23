import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

describe('App render', () => {

    it('Should renders without crashing', async (done) => {
        const rendered = (await renderer.create(<App />)).toJSON();
        expect(rendered).toBeTruthy();
        done();
    });
});
