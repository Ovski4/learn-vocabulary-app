import { connect } from 'react-redux';
import { tagUpdated } from '../../../../actions/tags';
import EditTagForm from './component';
import translator from '../../../../services/translator';

const mapStateToProps = (state) => {
    return {
        tagLabels: state.tags.map(tag => tag.label),
        literals: translator.get('form', state.config.locale)
    }
};

const mapDispatchToProps = (dispatch) => ({
    handleTagUpdated: (tag) => dispatch(tagUpdated(tag))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditTagForm);
