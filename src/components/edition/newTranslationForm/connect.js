import { connect } from 'react-redux';
import { translationAdded } from '../../../actions/translations';
import { tagsAdded } from '../../../actions/tags';
import NewTranslationForm from './component';

const mapStateToProps = (state) => ({
    tags: state.tags
});

const mapDispatchToProps = (dispatch) => ({
    handleTranslationAdded: (translation) => dispatch(translationAdded(translation)),
    handleTagsAdded: (tags, translationId) => dispatch(tagsAdded(tags, translationId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewTranslationForm);
