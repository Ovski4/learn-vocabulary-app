const initialState = 'revision';

const modeReducer = (mode = initialState, action) => {
    switch (action.type) {
        case 'MODE_CHANGED':
            return onModeChanged(mode, action);
        default:
            return mode;
    }
}

const onModeChanged = (mode, action) => {
    return action.mode;
}

export default modeReducer;
