import { connect } from 'react-redux';
import TagSelector from './component';

const mapStateToProps = (state) => ({
    tags: state.tags
});

export default connect(
    mapStateToProps
)(TagSelector);
