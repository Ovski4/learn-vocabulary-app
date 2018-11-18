import { connect } from 'react-redux';
import { translationsFilteredByTag } from '../../../actions/ui';
import {
    translationsShuffled,
    translationsUnshuffled,
    allTranslationsRevealed,
    translationsHidden
} from '../../../actions/uiTranslations';
import translator from '../../../services/translator';
import Actions from './component';

const getRandomNumbers = (arrayLength) => {
    const numbers = [];
    for (let i = 0; i < arrayLength; i++) {
        numbers.push(Math.random());
    }

    return numbers;
};

const mapStateToProps = (state) => ({
    translations: state.translations,
    tags: state.tags,
    literals: translator.get('revision.actions', state.config.locale)
});

const mapDispatchToProps = (dispatch) => ({
    handleShuffle: (translationsLength) => dispatch(translationsShuffled(
        getRandomNumbers(translationsLength)
    )),
    handleUnshuffle: () => dispatch(translationsUnshuffled()),
    handleDisplayEverything: (translations) => dispatch(allTranslationsRevealed(translations)),
    handleHideLeft: (translations) => dispatch(translationsHidden(translations, 'left')),
    handleHideRight: (translations) => dispatch(translationsHidden(translations, 'right')),
    handleFilterByTag: (tagId) => dispatch(translationsFilteredByTag(tagId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Actions);
