import { connect } from 'react-redux';
import { translationAdded } from '../../../../actions/translations';
import NewTranslationForm from './component';
import translator from '../../../../services/translator';

const mapStateToProps = (state) => ({
    tags: state.tags,
    literals: Object.assign(
        translator.get('edition.translations.edit', state.config.locale),
        { form: translator.get('form', state.config.locale) },
        { header: translator.get('edition.translations.new.header', state.config.locale) }
    )
});

const mapDispatchToProps = (dispatch) => ({
    handleTranslationAdded: (translation) => dispatch(translationAdded(translation))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewTranslationForm);
