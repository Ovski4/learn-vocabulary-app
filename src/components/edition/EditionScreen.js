import React from 'react';
import NewTranslationForm from './NewTranslationForm';
import TranslationList from './TranslationList';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        flex:1,
        marginTop: 30
    }
});

class EditionScreen extends React.PureComponent {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => <Image
            source={require('./assets/icon.png')}
            style={{ height: 30, width: 30, tintColor: tintColor}}
        />
    }

    render() {
        return (
            <View style={styles.page}>
                <NewTranslationForm/>
                <TranslationList/>
            </View>
        );
    }
}

export default EditionScreen;