import { connect } from 'react-redux';
import TranslationList from './component';

const mapStateToProps = (state) => {
    return {
        ui: state.ui,
        translations: [...state.translations].reverse()
    }
};

export default connect(mapStateToProps)(TranslationList);
