import { connect } from 'react-redux';
import { translationUpdated } from '../../../actions/translations';
import { tagsUpdated } from '../../../actions/tags';
import EditTranslationForm from './component';

const mapStateToProps = (state) => ({
    tags: state.tags
});

const mapDispatchToProps = (dispatch) => ({
    handleTranslationUpdated: (translation) => dispatch(translationUpdated(translation)),
    handleTagsUpdated: (tags, translationId) => dispatch(tagsUpdated(tags, translationId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditTranslationForm);
