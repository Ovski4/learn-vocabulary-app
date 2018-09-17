const initialState = {
    mode: 'revision',
    shuffled: false,
    leftTranslationsEntirelyHidden: false,
    rightTranslationsEntirelyHidden: false,
    allTranslationsRevealed: true
};

const uiReducer = (ui = initialState, action) => {
    switch (action.type) {
        case 'MODE_CHANGED':
            return onModeChanged(ui, action);
        case 'TRANSLATIONS_ENTIRELY_HIDDEN':
            return onTranslationsEntirelyHidden(ui, action);
        case 'ALL_TRANSLATIONS_REVEALED':
            return onAllTranslationsRevealed(ui);
        case 'TRANSLATION_REVEALED':
            return onTranslationRevealed(ui);
        case 'SHUFFLED_PRESSED':
            return shuffledPressed(ui);
        case 'UNSHUFFLED_PRESSED':
            return unshufflePressed(ui);
        default:
            return ui
    }
}

const shuffledPressed = (ui) => {
    return {
        mode: ui.mode,
        shuffled: true,
        leftTranslationsEntirelyHidden: ui.leftTranslationsEntirelyHidden,
        rightTranslationsEntirelyHidden: ui.rightTranslationsEntirelyHidden,
        allTranslationsRevealed: ui.allTranslationsRevealed
    }
}

const unshufflePressed = (ui) => {
    return {
        mode: ui.mode,
        shuffled: false,
        leftTranslationsEntirelyHidden: ui.leftTranslationsEntirelyHidden,
        rightTranslationsEntirelyHidden: ui.rightTranslationsEntirelyHidden,
        allTranslationsRevealed: ui.allTranslationsRevealed
    }
}

const onTranslationRevealed = (ui) => {
    return {
        mode: ui.mode,
        shuffled: ui.shuffled,
        leftTranslationsEntirelyHidden: false,
        rightTranslationsEntirelyHidden: false,
        allTranslationsRevealed: false
    }
}

const onAllTranslationsRevealed = (ui) => {
    return {
        mode: ui.mode,
        shuffled: ui.shuffled,
        leftTranslationsEntirelyHidden: false,
        rightTranslationsEntirelyHidden: false,
        allTranslationsRevealed: true
    }
}

const onTranslationsEntirelyHidden = (ui, action) => {
    return {
        mode: ui.mode,
        shuffled: ui.shuffled,
        leftTranslationsEntirelyHidden: action.side === 'left',
        rightTranslationsEntirelyHidden: action.side === 'right',
        allTranslationsRevealed: false
    }
}

const onModeChanged = (ui, action) => {
    return {
        mode: action.mode,
        shuffled: ui.shuffled,
        leftTranslationsEntirelyHidden: ui.leftTranslationsEntirelyHidden,
        rightTranslationsEntirelyHidden: ui.rightTranslationsEntirelyHidden,
        allTranslationsRevealed: ui.allTranslationsRevealed
    }
}

export default uiReducer;
