import { connect } from 'react-redux';
import translator from '../../../services/translator';
import EditionNavigator from './component';

const mapStateToProps = (state) => {
    return {
        titles: {
            tags: translator.get('edition.tags.list.header', state.config.locale),
            translations: translator.get('edition.translations.list.header', state.config.locale)
        }
    }
};

export default connect(
    mapStateToProps,
)(EditionNavigator);
