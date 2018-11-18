import { connect } from 'react-redux';
import { translationUpdated } from '../../../../actions/translations';
import { tagsUpdated } from '../../../../actions/tags';
import EditTranslationForm from './component';
import translator from '../../../../services/translator';

const mapStateToProps = (state) => ({
    tags: state.tags,
    tagsFeatureDisabled: !state.config.tagsFeature,
    literals: Object.assign(
        translator.get('edition.translations.edit', state.config.locale),
        { form: translator.get('form', state.config.locale) }
    )
});

const mapDispatchToProps = (dispatch) => ({
    handleTranslationUpdated: (translation) => dispatch(translationUpdated(translation)),
    handleTagsUpdated: (tags, translationId) => dispatch(tagsUpdated(tags, translationId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditTranslationForm);
