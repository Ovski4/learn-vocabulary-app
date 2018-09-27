// TODO use immutable js

const tagsReducer =  (tags = [], action) => {

    switch (action.type) {
        case 'TAGS_ADDED':
            return onTagsAdded(tags, action);
        case 'TAGS_UPDATED':
            return onTagsUpdated(tags, action);
        case 'TAGS_DELETED':
            return onTagsDeleted(tags, action);
        default:
            return tags;
    }
}

const onTagsAdded = (tags, action) => {
    const newTags = [];
    const existingTags = [...tags];
    for(let i = 0; i < action.tags.length; i++) {
        const existingTag = findTag(tags, action.tags[i].id);
        if (typeof existingTag === 'object') {
            // Add new translation id on existing tag
            if (!existingTags[i].translations.includes(action.translationId)) {
                existingTags[i].translations.push(action.translationId);
            }
        } else {
            // Add new tag with the translation id
            const newTag = action.tags[i];

            newTag.translations = [action.translationId];
            newTags.push(newTag);
        }
    }

    return existingTags.concat(newTags);
}

const onTagsUpdated = (tags, action) => {
    let existingTags = [...tags];

    for(let i = 0; i < existingTags.length; i++) {
        // If a tag in the state has the translation, check if it's still the case after update (could be removed)
        if (existingTags[i].translations.includes(action.translationId)) {
            // Remove the tag if needed
            const tagId = existingTags[i].id;
            if (!findTag(action.tags, tagId)) {
                existingTags[i].translations.splice(
                    existingTags[i].translations.indexOf(action.translationId),
                    1
                );
            }
        }
    }

    // Delete tags without any translation
    existingTags = existingTags.filter(tag => tag.translations.length > 0);

    return onTagsAdded(existingTags, action);
}

const onTagsDeleted = (tags, action) => {
    let existingTags = [...tags];

    // Delete the translation from the tags that contains it
    for(let i = 0; i < existingTags.length; i++) {
        if (existingTags[i].translations.includes(action.translationId)) {
            existingTags[i].translations.splice(
                existingTags[i].translations.indexOf(action.translationId),
                1
            );
        }
    }

    // Delete tags without any translation
    existingTags = existingTags.filter(tag => tag.translations.length > 0);

    return existingTags;
}

const findTag = (tags, tagId) => {
    return tags.find(tag => tag.id === tagId);
}

export default tagsReducer;
