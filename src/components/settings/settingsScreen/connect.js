import { connect } from 'react-redux';
import { localeUpdated } from '../../../actions/config';
import SettingsScreen from './component';

const mapStateToProps = (state) => {
    return {
        locale: state.config.locale
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleUpdateLocale: (locale) => {
            dispatch(localeUpdated(locale));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsScreen);
