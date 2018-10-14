import { connect } from 'react-redux';
import { tagUpdated } from '../../../../actions/tags';
import EditTagForm from './component';

const mapStateToProps = (state) => {
    return {
        tagLabels: state.tags.map(tag => tag.label)
    }
};

const mapDispatchToProps = (dispatch) => ({
    handleTagUpdated: (tag) => dispatch(tagUpdated(tag))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditTagForm);
