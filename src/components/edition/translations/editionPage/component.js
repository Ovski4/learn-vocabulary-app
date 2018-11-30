import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import NewTranslationForm from '../newTranslationForm/connect';
import TranslationList from '../translationList/connect';
import TranslationsSearchBar from '../../../ui/TranslationSearchBar';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    page: {
        flex: 1
    }
});

class TranslationsEditionPage extends React.Component {

    static propTypes = {
        topTabs: PropTypes.bool.isRequired,
    };

    render() {
        const keyboardVerticalOffset = this.props.topTabs ? 70 : 25;

        return (
            <KeyboardAvoidingView keyboardVerticalOffset={keyboardVerticalOffset} style={styles.page} behavior="padding">
                <NewTranslationForm/>
                <TranslationsSearchBar scope="edition"/>
                <TranslationList/>
            </KeyboardAvoidingView>
        );
    }
}

TranslationsEditionPage.defaultProps = {
    topTabs: true
};

export default TranslationsEditionPage;
