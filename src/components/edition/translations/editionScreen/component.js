import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import NewTranslationForm from '../newTranslationForm/connect';
import TranslationList from '../translationList/connect';

const styles = StyleSheet.create({
    page: {
        flex:1
    }
});

class EditionScreen extends React.PureComponent {

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
