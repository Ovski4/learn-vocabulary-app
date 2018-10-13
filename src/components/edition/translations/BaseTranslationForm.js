import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { waitForIt } from '../../../services/helpers';
import TagSelector from '../tagSelector/connect';

const styles = StyleSheet.create({
    textInput: {
        fontSize: 16,
        height: 32
    }
});
class BaseTranslationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            word1: '',
            word2: '',
            tags: []
        };
    }

    cannotBeSubmitted = () => {
        if (this.state.word1.trim().length === 0 ||
            this.state.word2.trim().length === 0
        ) {
            return true;
        }

        return false;
    }

    handleWordChange = (word, text) => {
        waitForIt(() => {
            var newWord = {};
            newWord[word] = text;
            this.setState((previousState) => {
                return Object.assign({}, previousState, newWord);
            });
        }, 300);
    }

    handleTagsChange = (tags) => {
        this.setState((previousState) => {
            return Object.assign({}, previousState, {
                tags: tags
            });
        });
    }

    getSubViews = () => {
        return {
            tagsInput: <TagSelector
                initialSelectedTags={this.state.tags}
                onChange={tags => this.handleTagsChange(tags)}
                key={this.state.tags} // Reset the state when new initial tags are set
            />,
            textInput1: <TextInput
                ref="input1"
                style={styles.textInput}
                underlineColorAndroid="transparent"
                defaultValue={this.state.word1}
                onChangeText={(text) => this.handleWordChange('word1', text)}
            />,
            textInput2: <TextInput
                ref="input2"
                style={styles.textInput}
                underlineColorAndroid="transparent"
                defaultValue={this.state.word2}
                onChangeText={(text) => this.handleWordChange('word2', text)}
            />
        }
    }
}

export default BaseTranslationForm;
