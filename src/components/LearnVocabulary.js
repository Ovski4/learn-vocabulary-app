import RevisionScreen from './revision/revisionScreen/component';
import SettingsScreen from './settings/settingsScreen/connect';
import EditionNavigator from './edition/navigator/EditionNavigator';
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import translator from '../services/translator';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        screenTitles: translator.get('screens', state.config.locale),
    }
};

class LearnVocabulary extends React.Component {

    constructor(props) {

        super(props);

        this.rootStack = createBottomTabNavigator(
            {
                Revision: {
                    screen: RevisionScreen,
                },
                Edition: {
                    screen: EditionNavigator,
                },
                Settings: {
                    screen: SettingsScreen,
                },
            },
            {
                initialRouteName: 'Revision',
                tabBarOptions: {
                    activeTintColor: '#03A9F4'
                }
            }
        );

    }

    componentDidCatch (error, info) {
        console.log(error, info);
    }

    render() {
        const RootStack = this.rootStack;

        return <RootStack screenProps={{titles: this.props.screenTitles}}/>;
    }
};

export default connect(
    mapStateToProps,
)(LearnVocabulary);
