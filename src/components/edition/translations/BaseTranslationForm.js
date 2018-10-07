import React from 'react';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';
import { waitForIt } from '../../../services/helpers';
import uuidv4 from 'uuid/v4';
import Tags from 'react-native-tags';

const tagComponentStyle = StyleSheet.create({
    containerStyle: {
        marginLeft: -5,
        alignItems: 'flex-start'
    },
    inputContainerStyle:{
        borderRadius: 4,
    },
    inputStyle: {
        backgroundColor: 'white',
        paddingLeft: 3,
        paddingRight: 3,
        margin: 0,
    },
    tagContainerStyle: {
        borderRadius: 4,
        marginBottom: 0,
        marginRight: 0
    },
    tagTextStyle: {
        color: '#03A9F4',
        fontWeight: 'bold'
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

    findTagByLabel = (tagLabel) => {
        return this.props.tags.find(tag => tag.label === tagLabel);
    }

    prepareTranslationTags = () => {
        return this.state.tags.map((tagLabel) => {
            const existingTag = this.findTagByLabel(tagLabel);
            if (existingTag) {
                return existingTag;
            }

            return {
                label: tagLabel,
                id: uuidv4(),
                createdAt: Date.now()
            };
        });
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
        waitForIt(() => {
            this.setState((previousState) => {
                return Object.assign({}, previousState, {tags});
            });
        }, 300);
    }

    getSubViews = () => {
        return {
            tagsInput: <Tags
                initialTags={this.state.tags}
                createTagOnReturn={true}
                onChangeTags={tags => this.handleTagsChange(tags)}
                containerStyle={tagComponentStyle.containerStyle}
                inputContainerStyle={tagComponentStyle.inputContainerStyle}
                inputStyle={tagComponentStyle.inputStyle}
                tagContainerStyle={tagComponentStyle.tagContainerStyle}
                tagTextStyle={tagComponentStyle.tagTextStyle}
            />,
            textInput1: <TextInput
                ref="input1"
                underlineColorAndroid="transparent"
                defaultValue={this.state.word1}
                onChangeText={(text) => this.handleWordChange('word1', text)}
            />,
            textInput2: <TextInput
                ref="input2"
                underlineColorAndroid="transparent"
                defaultValue={this.state.word2}
                onChangeText={(text) => this.handleWordChange('word2', text)}
            />
        }
    }
}

export default BaseTranslationForm;
