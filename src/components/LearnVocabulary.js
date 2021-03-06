import RevisionScreen from './revision/revisionScreen/connect';
import SettingsScreen from './settings/settingsScreen/connect';
import EditionNavigator from './edition/navigator/connect';
import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import translator from '../services/translator';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
    return {
        screenTitles: translator.get('screens', state.config.locale),
        tagsFeatureDisabled: !state.config.tagsFeature,
    }
};

class LearnVocabulary extends React.Component {

    constructor(props) {

        super(props);

        this.rootStack = createAppContainer(createBottomTabNavigator(
            {
                Revision: RevisionScreen,
                Edition: EditionNavigator,
                Settings: SettingsScreen,
            },
            {
                initialRouteName: 'Revision',
                tabBarOptions: {
                    activeTintColor: '#03A9F4'
                }
            }
        ));

    }

    static propTypes = {
        screenTitles: PropTypes.object.isRequired,
        tagsFeatureDisabled: PropTypes.bool.isRequired
    };

    // componentDidCatch (error, info) {
    //     // Todo: store in state for further use
    //     // console.log(error, info);
    // }

    render() {
        const RootStack = this.rootStack;

        return <RootStack screenProps={{
            titles: this.props.screenTitles,
            tagsFeatureDisabled: this.props.tagsFeatureDisabled
        }}/>;
    }
}

export default connect(
    mapStateToProps,
)(LearnVocabulary);
