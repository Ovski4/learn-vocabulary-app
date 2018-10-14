export const tagAdded = tag => ({
    type: 'TAG_ADDED',
    tag
});

export const tagUpdated = tag => ({
    type: 'TAG_UPDATED',
    tag,
});

export const tagDeleted = id => ({
    type: 'TAG_DELETED',
    id
});
