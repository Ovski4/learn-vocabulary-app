import { connect } from 'react-redux';
import { translationAdded } from '../../../../actions/translations';
import NewTranslationForm from './component';

const mapStateToProps = (state) => ({
    tags: state.tags
});

const mapDispatchToProps = (dispatch) => ({
    handleTranslationAdded: (translation) => dispatch(translationAdded(translation))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewTranslationForm);
