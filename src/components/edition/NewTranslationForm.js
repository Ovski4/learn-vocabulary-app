import React from 'react';
import { connect } from 'react-redux';
import { translationAdded } from '../../actions/translations';
import { tagsAdded } from '../../actions/tags';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';
import Header from '../../components/ui/Header';
import uuidv4 from 'uuid/v4';
import { waitForIt } from '../../services/helpers';
import Tags from 'react-native-tags';

const mapStateToProps = (state) => ({
    tags: state.tags
});

const mapDispatchToProps = (dispatch) => ({
    handleTranslationAdded: (translation) => dispatch(translationAdded(translation)),
    handleTagsAdded: (tags, translationId) => dispatch(tagsAdded(tags, translationId)),
});

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

class NewTranslationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            word1: '',
            word2: '',
            tags: []
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
            createdAt: Date.now(),
            id: uuidv4(),
            tags: tags.map(tag => tag.id)
        };

        this.refs.input1.clear();
        this.refs.input2.clear();
        this.props.handleTranslationAdded(translation);
        this.props.handleTagsAdded(tags, translation.id);
        this.setState({
            word1: '',
            word2: '',
            tags: []
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

    render() {

        return (
            <View>
                <Header>Add a translation</Header>
                <View style={styles.row}>
                    <View style={{flex: 4}}>
                        <View style={styles.word}>
                            <View style={styles.label}>
                                <Text>{this.props.labelWord1}</Text>
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    ref="input1"
                                    underlineColorAndroid="transparent"
                                    onChangeText={(text) => this.handleWordChange('word1', text)}
                                />
                            </View>
                        </View>
                        <View style={styles.word}>
                            <View style={styles.label}>
                                <Text>{this.props.labelWord2}</Text>
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    ref="input2"
                                    underlineColorAndroid="transparent"
                                    onChangeText={(text) => this.handleWordChange('word2', text)}
                                />
                            </View>
                        </View>
                        <View style={styles.tags}>
                            <View style={styles.label}>
                                <Text>Tags:</Text>
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
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewTranslationForm);
