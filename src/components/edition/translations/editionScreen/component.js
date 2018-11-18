import React from 'react';
import TranslationsEditionPage from '../editionPage/component';

class TranslationsEditionScreen extends React.Component {

    static navigationOptions = ({ screenProps }) => {
        return {
            title: screenProps.titles.translations
        }
    };

    render() {
        return (
            <TranslationsEditionPage/>
        );
    }
}

export default TranslationsEditionScreen;
