import React from 'react';
import { connect } from 'react-redux';
import { translationAdded } from '../../actions/translations';
import { TextInput, Button, Text, View } from 'react-native';

const mapDispatchToProps = (dispatch) => ({
    handleTranslationAdded: (translation) => dispatch(translationAdded(translation)),
});

class NewTranslationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            word1: props.translation.word1,
            word2: props.translation.word2,
            createdAt: props.translation.createdAt
        };
    }

    cannotBeCreated = () => {
        if (this.state.word1.trim().length === 0 ||
            this.state.word2.trim().length === 0
        ) {
            return true;
        }

        return false;
    }

    handleSubmit = () => {
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
                <View style={{
                    alignItems: 'center',
                    margin: 5
                }}>
                    <Text style={{fontWeight: 'bold'}}>Add a new translation</Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 5}}>
                    <View style={{width: '15%', margin:5}}>
                        <Text>{this.props.labelWord1}</Text>
                    </View>
                    <View style={{
                        flex: 1,
                        backgroundColor: '#eeeeee',
                        borderRadius: 2,
                        paddingLeft: 5,
                        marginLeft: 5,
                        marginRight: 5

                    }}>
                        <TextInput
                            underlineColorAndroid="transparent"
                            value={this.state.word1}
                            onChangeText={(text) => this.handleChange('word1', text)}
                        />
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 5}}>
                    <View style={{width: '15%', margin:5}}>
                        <Text>{this.props.labelWord2}</Text>
                    </View>
                    <View style={{
                        flex: 1,
                        backgroundColor: '#eeeeee',
                        borderRadius: 2,
                        paddingLeft: 5,
                        marginLeft: 5,
                        marginRight: 5
                    }}>
                        <TextInput
                            underlineColorAndroid="transparent"
                            value={this.state.word2}
                            onChangeText={(text) => this.handleChange('word2', text)}
                        />
                    </View>
                </View>
                <View style={{marginLeft: '15%'}}>
                    <View style={{marginLeft:15, marginRight: 5}}>
                        <Button disabled={this.cannotBeCreated()} title="Submit" onPress={this.handleSubmit}/>
                    </View>

                </View>
            </View>
        );
    }
}

NewTranslationForm.defaultProps = {
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
)(NewTranslationForm);
