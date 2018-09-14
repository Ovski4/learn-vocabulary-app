import React from 'react';
import { connect } from 'react-redux';
import { translationAdded, translationUpdated } from '../../actions/translations';
import { TextInput, Button, Text, View } from 'react-native';

const mapDispatchToProps = (dispatch) => ({
    handleTranslationAdded: (translation) => dispatch(translationAdded(translation)),
    handleTranslationUpdated: (translation) => dispatch(translationUpdated(translation))
});

class TranslationEditionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            word1: props.translation.word1,
            word2: props.translation.word2,
            createdAt: props.translation.createdAt
        };
    }

    handleSubmit = () => {
        if (this.state.createdAt === null) {
            this.props.handleTranslationAdded({
                word1: this.state.word1,
                word2: this.state.word2,
                createdAt: Date.now()
            });
            this.setState({
                word1: '',
                word2: '',
                createdAt: null
            });
        } else {
            this.props.handleTranslationUpdated({
                word1: this.state.word1,
                word2: this.state.word2,
                createdAt: this.state.createdAt
            });
            this.props.onUpdate();
        }
    }

    handleChange = (word, text) => {
        var newWord = {};
        newWord[word] = text;
        this.setState((previousState) => {
            return Object.assign({}, previousState, newWord);
        });
    }

    render() {
        return (
            <View>
                <Text>
                    {this.props.labelWord1}
                </Text>
                <TextInput className="word1" value={this.state.word1} onChangeText={(text) => this.handleChange('word1', text)} />

                <Text>
                    {this.props.labelWord2}
                </Text>
                <TextInput className="word2" value={this.state.word2} onChangeText={(text) => this.handleChange('word2', text)} />
                <Button title="Submit" className={this.props.className} onPress={this.handleSubmit}/>
            </View>
        );
    }
}

TranslationEditionForm.defaultProps = {
    labelWord1: 'Word 1:',
    labelWord2: 'Word 2:',
    className: 'new-translation',
    translation: {
        word1: '',
        word2: '',
        createdAt: null
    }
};

export default connect(
    null,
    mapDispatchToProps
)(TranslationEditionForm);
