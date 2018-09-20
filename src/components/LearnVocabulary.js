import React from 'react';
import { connect } from 'react-redux';
import NewTranslationForm from './edition/NewTranslationForm';
import TranslationRevisionForm from './revision/TranslationRevisionForm';
import TranslationModeChooser from './TranslationModeChooser';
import TranslationList from './TranslationList';
import { View } from 'react-native';

const mapStateToProps = (state) => {
    return {
        mode: state.mode
    }
};

class LearnVocabulary extends React.PureComponent {
    render() {
        const FormComponents = {
            'edition': NewTranslationForm,
            'revision': TranslationRevisionForm
        }

        return (
            <View style={{flex:1}}>
                <TranslationModeChooser/>
                {React.createElement(FormComponents[this.props.mode])}
                <TranslationList/>
            </View>
        );
    }
}

export default connect(
    mapStateToProps
)(LearnVocabulary);
