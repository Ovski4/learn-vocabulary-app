import { connect } from 'react-redux';
import { translationRevealed } from '../../../actions/uiTranslations';
import TranslationRow from './component';

const mapStateToProps = (state, ownProps) => {
    return {
        translation: state.translations.find((translation) => {
            return ownProps.id === translation.id;
        })
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClickLeftWord: (hiddenSide) => {
            if (hiddenSide === 'left') {
                dispatch(translationRevealed(ownProps.id));
            }
        },
        handleClickRightWord: (hiddenSide) => {
            if (hiddenSide === 'right') {
                dispatch(translationRevealed(ownProps.id));
            }
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TranslationRow);
