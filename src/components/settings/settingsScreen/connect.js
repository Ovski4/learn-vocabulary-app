import { connect } from 'react-redux';
import { localeUpdated, disableTagsFeature } from '../../../actions/config';
import SettingsScreen from './component';

const mapStateToProps = (state) => {
    return {
        locale: state.config.locale,
        tagsFeatureDisabled: !state.config.tagsFeature
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleUpdateLocale: (locale) => {
            dispatch(localeUpdated(locale));
        },
        handleUpdateTagsFeatureDisabled: (disabled) => {
            dispatch(disableTagsFeature(disabled));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsScreen);
