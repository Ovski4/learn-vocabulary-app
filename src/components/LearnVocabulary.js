import RevisionScreen from './revision/RevisionScreen';
import EditionScreen from './edition/EditionScreen';
import SettingsScreen from './settings/SettingsScreen';
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

const RootStack = createBottomTabNavigator(
    {
        Revision: RevisionScreen,
        Edition: EditionScreen,
        Settings: SettingsScreen,
    },
    {
        initialRouteName: 'Edition',
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
