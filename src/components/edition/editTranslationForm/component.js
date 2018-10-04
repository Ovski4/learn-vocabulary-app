import React from 'react';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';
import BaseTranslationForm from '../BaseTranslationForm';
import Tags from 'react-native-tags';

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


class EditTranslationForm extends BaseTranslationForm {

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

    render() {
        return (
            <View style={styles.view}>
                <View style={styles.row}>
                    <View style={styles.label}>
                        <Text>{this.props.labelWord1}</Text>
                    </View>
                    <View style={styles.input}>
                        {this.getSubViews().textInput1}
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.label}>
                        <Text>{this.props.labelWord2}</Text>
                    </View>
                    <View style={styles.input}>
                        {this.getSubViews().textInput2}
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.label}>
                        <Text>{this.props.labelTags}</Text>
                    </View>
                    <View style={styles.input}>
                        {this.getSubViews().tagsInput}
                    </View>
                </View>
                <View style={styles.submitButtonWrapper}>
                    <View style={styles.submitButton}>
                        <Button disabled={this.cannotBeSubmitted()} title="Submit" onPress={this.handleSubmit}/>
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
