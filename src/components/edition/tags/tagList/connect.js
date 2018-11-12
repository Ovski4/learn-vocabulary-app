import { connect } from 'react-redux';
import TagList from './component';
import translator from '../../../../services/translator';

const mapStateToProps = (state) => {
    return {
        tags: [...state.tags].reverse(),
        literals: translator.get('edition.tags.list', state.config.locale)
    }
};

export default connect(mapStateToProps)(TagList);
