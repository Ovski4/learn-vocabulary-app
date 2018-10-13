import { connect } from 'react-redux';
import { tagAdded } from '../../../../actions/tags';
import NewTagForm from './component';

const mapStateToProps = (state) => {
    return {
        tagLabels: state.tags.map(tag => tag.label)
    }
};

const mapDispatchToProps = (dispatch) => ({
    handleTagAdded: (tag) => dispatch(tagAdded(tag)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewTagForm);
