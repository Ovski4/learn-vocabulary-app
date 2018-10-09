import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    page: {
        flex:1
    }
});

class TagsEditionScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Tags'
    };

    render() {
        return (
            <View styles={styles.page}>
                <Text>Tags Screen</Text>
            </View>
        );
    }
}

export default TagsEditionScreen;
