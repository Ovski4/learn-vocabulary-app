import { connect } from 'react-redux';
import { tagAdded } from '../../../../actions/tags';
import NewTagForm from './component';
import translator from '../../../../services/translator';

const mapStateToProps = (state) => {
    return {
        tagLabels: state.tags.map(tag => tag.label),
        literals: {
            form: translator.get('form', state.config.locale),
            header: translator.get('edition.tags.new.header', state.config.locale),
        }
    }
};

const mapDispatchToProps = (dispatch) => ({
    handleTagAdded: (tag) => dispatch(tagAdded(tag)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewTagForm);
