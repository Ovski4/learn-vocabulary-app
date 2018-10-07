import React from 'react';
import { KeyboardAvoidingView, Image, StyleSheet } from 'react-native';
import NewTranslationForm from '../newTranslationForm/connect';
import TranslationList from '../translationList/connect';

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
            <KeyboardAvoidingView style={styles.page} behavior="padding">
                <NewTranslationForm/>
                <TranslationList/>
            </KeyboardAvoidingView>
        );
    }
}

export default EditionScreen;
