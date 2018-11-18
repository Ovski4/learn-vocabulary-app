import { connect } from 'react-redux';
import TagSelector from './component';
import translator from '../../../services/translator';

const mapStateToProps = (state) => ({
    literals: translator.get('tagSelector', state.config.locale),
    tags: state.tags
});

export default connect(
    mapStateToProps
)(TagSelector);
