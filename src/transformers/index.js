import { createTransform } from 'redux-persist';
import { inboundTranslationsTransform, outboundTranslationsTransform } from './translations'

/**
 * Be careful to update the transformer using the key if another state key is whitelisted in the future
 */
const translationsTransformer = createTransform(
    inboundTranslationsTransform,
    outboundTranslationsTransform,
    { whitelist: ['translations'] }
);

export default [translationsTransformer];