import { createTransform } from 'redux-persist';
import { inboundTranslationsTransform, outboundTranslationsTransform } from './translations'

const translationsTransformer = createTransform(
    inboundTranslationsTransform,
    outboundTranslationsTransform,
    { whitelist: ['translations'] }
);

export default [translationsTransformer];