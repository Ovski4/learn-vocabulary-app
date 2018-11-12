import { createMaterialTopTabNavigator } from 'react-navigation';
import TagsEditionScreen from '../../edition/tags/editionScreen/component';
import TranslationsEditionScreen from '../../edition/translations/editionScreen/component';
import React from 'react';
import { View, Image, StyleSheet, StatusBar, Platform } from 'react-native';

const styles = StyleSheet.create({
    screen: {
        flex:1,
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
});

const TopTabs = createMaterialTopTabNavigator(
    {
        Translations: TranslationsEditionScreen,
        Tags: TagsEditionScreen
    },
    {
        tabBarOptions: {
            indicatorStyle: {
               backgroundColor: '#fff',
               height: 3
            },
            tabStyle: {
                height: 40
            },
            labelStyle: {
                fontSize: 12
            }
        }
    }
);

class EditionNavigator extends React.Component {

    static router = TopTabs.router;

    static navigationOptions = ({ screenProps }) => {
        return {
            tabBarLabel: screenProps.titles.edition,
            tabBarIcon: ({tintColor}) => <Image
                source={require('./assets/icon.png')}
                style={{ height: 30, width: 30, tintColor: tintColor}}
            />
        }
    };

    render() {
      return (
        <View style={styles.screen}>
            <TopTabs navigation={this.props.navigation} />
        </View>
      );
    }
}

export default EditionNavigator;
