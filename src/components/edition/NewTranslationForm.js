import React from 'react';
import { connect } from 'react-redux';
import { translationAdded } from '../../actions/translations';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';
import Header from '../../components/ui/Header';
import uuidv4 from 'uuid/v4';
import { waitForIt } from '../../services/helpers';

const mapDispatchToProps = (dispatch) => ({
    handleTranslationAdded: (translation) => dispatch(translationAdded(translation)),
});

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        margin: 5,
        marginBottom: 0
    },
    word1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    word2: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        backgroundColor: '#eeeeee',
        borderRadius: 2,
        paddingLeft: 5,
        marginLeft: 5
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 5
    }
});

class NewTranslationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            word1: props.translation.word1,
            word2: props.translation.word2
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
        this.refs.input1.clear();
        this.refs.input2.clear();
        this.props.handleTranslationAdded({
            word1: this.state.word1,
            word2: this.state.word2,
            createdAt: Date.now(),
            id: uuidv4()
        });
        this.setState({
            word1: '',
            word2: ''
        });
    }

    handleChange = (word, text) => {
        waitForIt(() => {
            var newWord = {};
            newWord[word] = text;
            this.setState((previousState) => {
                return Object.assign({}, previousState, newWord);
            });
        }, 300);
    }

    render() {

        return (
            <View>
                <Header>Add a translation</Header>
                <View style={styles.row}>
                    <View style={{flex: 4}}>
                        <View style={styles.word1}>
                            <View>
                                <Text>{this.props.labelWord1}</Text>
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    ref="input1"
                                    underlineColorAndroid="transparent"
                                    onChangeText={(text) => this.handleChange('word1', text)}
                                />
                            </View>
                        </View>
                        <View style={styles.word2}>
                            <View>
                                <Text>{this.props.labelWord2}</Text>
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    ref="input2"
                                    underlineColorAndroid="transparent"
                                    onChangeText={(text) => this.handleChange('word2', text)}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.button}>
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
    translation: {
        word1: '',
        word2: ''
    }
};

export default connect(
    null,
    mapDispatchToProps
)(NewTranslationForm);
