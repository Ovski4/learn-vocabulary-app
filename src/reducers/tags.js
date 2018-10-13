import { createReducer } from '../services/helpers';

const actionHandlers = {
    TAG_ADDED: (tags, action) => onTagAdded(tags, action),
    TAG_UPDATED: (tags, action) => onTagUpdated(tags, action),
    TAG_DELETED: (tags, action) => onTagDeleted(tags, action)
};

const onTagAdded = (tags, action) => {
    return [
        ...tags,
        action.tag
    ];
}

const onTagDeleted = (tags, action) => {
    return tags.filter(
        (element) => element.id !== action.id
    );
}

const onTagUpdated = (tags, action) => {
    return tags.map((tag) => {
        if (tag.id !== action.tag.id) {
            return tag;
        } else {
            return {
                ...tag,
                ...action.tag
            };
        }
    });
}

const tagsReducer = createReducer([], actionHandlers);

export default tagsReducer;
