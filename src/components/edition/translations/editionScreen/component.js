import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import NewTranslationForm from '../newTranslationForm/connect';
import TranslationList from '../translationList/connect';
import TranslationsSearchBar from '../../../ui/TranslationSearchBar';
import translator from '../../../../services/translator';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    page: {
        flex:1
    }
});

const mapStateToProps = (state) => {
    return {
        screenTitle: translator.get('edition.translations.list.header', state.config.locale),
    }
};

class TranslationsEditionScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: typeof(navigation.state.params) === 'undefined' || typeof(navigation.state.params.screenTitle) === 'undefined' ?
                translator.get('edition.translations.list.header', 'en') :
                navigation.state.params.screenTitle
        }
    };

    shouldComponentUpdate(nextProps) {
        if (this.props.screenTitle !== nextProps.screenTitle) {
            this.props.navigation.setParams({
                screenTitle: nextProps.screenTitle,
            });
        }

        return true;
    }

    componentDidMount() {
        this.props.navigation.setParams({
            screenTitle: this.props.screenTitle,
        });
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.page} behavior="padding">
                <NewTranslationForm/>
                <TranslationsSearchBar scope="edition"/>
                <TranslationList/>
            </KeyboardAvoidingView>
        );
    }
}

export default connect(
    mapStateToProps,
)(TranslationsEditionScreen);
