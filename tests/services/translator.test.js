import translator from '../../src/services/translator';

describe('Translator', () => {

    it('Should retrieve a translation', async () => {
        expect(translator.get('revision.actions.filterLabel', 'fr')).toEqual('Filtrer par');
    });

    it('Should not find translations for a given locale', async () => {
        expect(() => { translator.get('revision.actions.filterLabel', 'de') }).toThrow(`Could not find translations for locale 'de'`);
    });

    it('Should throw if the path is not defined', async () => {
        expect(() => { translator.get() }).toThrow(`Path must be defined`);
    });

    it('Should fail to find a translation value for a wrong path', async () => {
        expect(() => { translator.get('revision.wrong', 'fr') }).toThrow(`Could not find a translation value for path 'revision.wrong'`);
    });

    it('Should get the locales', async () => {
        expect(translator.getLocales()).toEqual([
            { id: 'en', label: 'English' },
            { id: 'fr', label: 'Français' }
        ]);
    });

});
