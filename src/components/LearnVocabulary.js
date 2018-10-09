import RevisionScreen from './revision/revisionScreen/component';
import EditionScreen from './edition/translations/editionScreen/component';
import SettingsScreen from './settings/settingsScreen/component';
import EditionNavigator from './edition/navigator/EditionNavigator';
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

const RootStack = createBottomTabNavigator(
    {
        Revision: RevisionScreen,
        Edition: EditionNavigator,
        // Settings: SettingsScreen,
    },
    {
        initialRouteName: 'Revision',
        tabBarOptions: {
            activeTintColor: '#03A9F4'
        }
    }
);

export default class LearnVocabulary extends React.Component {
    render() {
        return <RootStack />;
    }
};
