import { connect } from 'react-redux';
import RevisionScreen from './component';

const mapStateToProps = (state) => {
    return {
        translationsLength: state.translations.length
    }
};

export default connect(mapStateToProps)(RevisionScreen);