import RevisionScreen from './revision/revisionScreen/component';
import EditionScreen from './edition/editionScreen/component';
import SettingsScreen from './settings/settingsScreen/component';
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

const RootStack = createBottomTabNavigator(
    {
        Revision: RevisionScreen,
        Edition: EditionScreen,
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
