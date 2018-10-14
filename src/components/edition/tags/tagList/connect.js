import { connect } from 'react-redux';
import TagList from './component';

const mapStateToProps = (state) => {
    return {
        tags: [...state.tags].reverse()
    }
};

export default connect(mapStateToProps)(TagList);
