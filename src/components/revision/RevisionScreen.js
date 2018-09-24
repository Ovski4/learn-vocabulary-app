import React from 'react';
import Actions from './Actions';
import TranslationList from './TranslationList';
import { StyleSheet, View, Image } from 'react-native';

const styles = StyleSheet.create({
    page: {
        flex:1,
        marginTop: 30
    }
});

class RevisionScreen extends React.PureComponent {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => <Image
            source={require('./assets/icon.png')}
            style={{ height: 30, width: 30, tintColor: tintColor}}
        />
    }

    render() {
        return (
            <View style={styles.page}>
                <Actions/>
                <TranslationList/>
            </View>
        );
    }
}

export default RevisionScreen;
