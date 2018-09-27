/**
* Transform state on its way to being serialized and persisted.
* Add view related things
*/
const inboundTranslationsTransform = (inboundTranslations, key) => {
   const transformed = [...inboundTranslations].map((translation) => {
       return {
           word1: translation.word1,
           word2: translation.word2,
           createdAt: translation.createdAt,
           id: translation.id
       }
   });

   return transformed;
}

/**
* Transform state being rehydrated
* Get rid of everything which is related to the view
*/
const outboundTranslationsTransform = (outboundTranslations, key) => {
   const transformed = [...outboundTranslations].map((translation, index) => {
       translation.hidden = false;
       translation.index = index;
       
       return translation;
   });

   return transformed;
}

export {
    inboundTranslationsTransform,
    outboundTranslationsTransform
}
