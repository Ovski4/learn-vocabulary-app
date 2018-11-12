import { tagDeleted } from '../../../../actions/tags';
import { connect } from 'react-redux';
import TagRow from './component';
import translator from '../../../../services/translator';

const mapStateToProps = (state, ownProps) => {
    return {
        literals: translator.get('form', state.config.locale),
        tag: state.tags.find((tag) => {
            return ownProps.id === tag.id;
        })
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleDelete: () => {
        dispatch(tagDeleted(ownProps.id))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagRow);
