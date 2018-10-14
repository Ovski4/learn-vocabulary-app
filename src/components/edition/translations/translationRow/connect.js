import { translationDeleted } from '../../../../actions/translations';
import { connect } from 'react-redux';
import TranslationRow from './component';

const mapStateToProps = (state, ownProps) => {
    return {
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
