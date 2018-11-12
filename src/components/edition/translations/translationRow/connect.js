import { translationDeleted } from '../../../../actions/translations';
import { connect } from 'react-redux';
import TranslationRow from './component';
import translator from '../../../../services/translator';

const mapStateToProps = (state, ownProps) => {
    return {
        literals: translator.get('form', state.config.locale),
        translation: state.translations.find((translation) => {
            return ownProps.id === translation.id;
        })
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleDelete: () => {
        dispatch(translationDeleted(ownProps.id))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TranslationRow);
