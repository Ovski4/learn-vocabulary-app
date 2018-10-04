import React from 'react';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';
import { waitForIt } from '../../../services/helpers';
import Tags from 'react-native-tags';
import uuidv4 from 'uuid/v4';

const styles = StyleSheet.create({
    view: {
        borderTopWidth: 0.4,
        borderColor: '#d6d7da',
    },
    row: {
        flexDirection: 'row'
    },
    label: {
        width: '15%',
        margin: 5
    },
    input: {
        flex: 1,
        backgroundColor: '#eeeeee',
        borderRadius: 2,
        paddingLeft: 5,
        margin: 5
    },
    submitButtonWrapper: {
        marginLeft: '15%'
    },
    submitButton: {
        marginLeft: 15,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 10
    }
});

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

class EditTranslationForm extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            word1: props.translation.word1,
            word2: props.translation.word2,
            tags: props.translation.tags.map((tagId) => {
                return props.tags.find(tag => tag.id === tagId).label
            })
        };
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

    handleSubmit = () => {
        const tags = this.prepareTranslationTags();
        const translation = {
            word1: this.state.word1,
            word2: this.state.word2,
            id: this.props.translation.id,
            tags: tags.map(tag => tag.id)
        };
        this.props.handleTranslationUpdated(translation);
        this.props.handleTagsUpdated(tags, translation.id);
        this.props.onUpdate();
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

    render() {
        return (
            <View style={styles.view}>
                <View style={styles.row}>
                    <View style={styles.label}>
                        <Text>{this.props.labelWord1}</Text>
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            underlineColorAndroid="transparent"
                            defaultValue={this.state.word1}
                            onChangeText={(text) => this.handleWordChange('word1', text)}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.label}>
                        <Text>{this.props.labelWord2}</Text>
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            underlineColorAndroid="transparent"
                            defaultValue={this.state.word2}
                            onChangeText={(text) => this.handleWordChange('word2', text)}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.label}>
                        <Text>{this.props.labelTags}</Text>
                    </View>
                    <View style={styles.input}>
                        <Tags
                            initialTags={this.state.tags}
                            createTagOnReturn={true}
                            onChangeTags={tags => this.handleTagsChange(tags)}
                            containerStyle={tagComponentStyle.containerStyle}
                            inputContainerStyle={tagComponentStyle.inputContainerStyle}
                            inputStyle={tagComponentStyle.inputStyle}
                            tagContainerStyle={tagComponentStyle.tagContainerStyle}
                            tagTextStyle={tagComponentStyle.tagTextStyle}
                        />
                    </View>
                </View>
                <View style={styles.submitButtonWrapper}>
                    <View style={styles.submitButton}>
                        <Button title="Submit" onPress={this.handleSubmit}/>
                    </View>
                </View>
            </View>
        );
    }
}

EditTranslationForm.defaultProps = {
    labelWord1: 'Word 1:',
    labelWord2: 'Word 2:',
    labelTags: 'Tags:',
    translation: {
        word1: '',
        word2: '',
        tags: []
    }
};

export default EditTranslationForm;
