import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const styles = StyleSheet.create({
    page: {
        flex:1,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class SettingsScreen extends React.PureComponent {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => <Image
            source={require('./assets/icon.png')}
            style={{ height: 30, width: 30, tintColor: tintColor}}
        />
    }

    render() {
        return (
            <View style={styles.page}>
                <Text>Coming soon!</Text>
            </View>
        );
    }
}

export default SettingsScreen;
