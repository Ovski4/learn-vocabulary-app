import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import BaseTranslationForm from '../BaseTranslationForm';
import uuidv4 from 'uuid/v4';
import Header from '../../../ui/Header';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        margin: 5,
        marginBottom: 0
    },
    label: {
        minWidth: 50
    },
    word: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    tags: {
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

class NewTranslationForm extends BaseTranslationForm {

    constructor(props) {
        super(props);
        this.state = {
            word1: '',
            word2: '',
            tags: []
        };
    }

    handleSubmit = () => {
        this.refs.input1.clear();
        this.refs.input2.clear();
        this.props.handleTranslationAdded({
            id: uuidv4(),
            createdAt: Date.now(),
            word1: this.state.word1,
            word2: this.state.word2,
            tags: this.state.tags.map(tag => tag.id)
        });
        this.setState({
            word1: '',
            word2: '',
            tags: []
        });
    }

    render() {
        return (
            <View>
                <Header>{this.props.literals.header}</Header>
                <View style={styles.row}>
                    <View style={{flex: 4}}>
                        <View style={styles.word}>
                            <View style={styles.label}>
                                <Text>{this.props.literals.labelWord1}:</Text>
                            </View>
                            <View style={styles.input}>
                                {this.getSubViews().textInput1}
                            </View>
                        </View>
                        <View style={styles.word}>
                            <View style={styles.label}>
                                <Text>{this.props.literals.labelWord2}:</Text>
                            </View>
                            <View style={styles.input}>
                                {this.getSubViews().textInput2}
                            </View>
                        </View>
                        <View style={styles.tags}>
                            <View style={styles.label}>
                                <Text>{this.props.literals.labelTags}:</Text>
                            </View>
                            <View style={{flex: 1}}>
                                {this.getSubViews().tagsInput}
                            </View>
                        </View>
                    </View>
                    <View style={styles.button}>
                        <Button disabled={this.cannotBeSubmitted()} title={this.props.literals.form.submit} onPress={this.handleSubmit}/>
                    </View>
                </View>
            </View>
        );
    }
}

export default NewTranslationForm;
