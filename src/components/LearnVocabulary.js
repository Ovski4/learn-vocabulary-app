import React from 'react';
import { connect } from 'react-redux';
import NewTranslationForm from './edition/NewTranslationForm';
import TranslationRevisionForm from './revision/TranslationRevisionForm';
import TranslationModeChooser from './TranslationModeChooser';
import TranslationList from './TranslationList';
import { View } from 'react-native';

const mapStateToProps = (state) => {
    return {
        mode: state.ui.mode,
        translations: state.translations
    }
};

class LearnVocabulary extends React.Component {

    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        const FormComponents = {
            'edition': NewTranslationForm,
            'revision': TranslationRevisionForm
        }

        return (
            <View>
                <TranslationModeChooser/>
                {React.createElement(FormComponents[this.props.mode])}
                <TranslationList
                    mode={this.props.mode}
                    translations={this.props.translations}
                />
            </View>
        );
    }
}


export default connect(
    mapStateToProps
)(LearnVocabulary);
