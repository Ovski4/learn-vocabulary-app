import { connect } from 'react-redux';
import TranslationList from './component';
import translator from '../../../services/translator';

const mapStateToProps = (state) => {
    return {
        ui: state.ui,
        translations: [...state.translations].reverse(),
        literals: translator.get('revision.list', state.config.locale)
    }
};

export default connect(mapStateToProps)(TranslationList);
