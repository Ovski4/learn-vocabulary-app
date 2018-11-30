import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import EditTranslationForm from '../editTranslationForm/connect';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        borderTopWidth: 0.4,
        borderColor: '#d6d7da',
    },
    word: {
        flex: 1,
        padding: 10
    },
    wordText: {
        textAlign: 'center'
    },
    words: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button:{
        margin: 5
    }
});

class TranslationRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editable: false
        };
    }

    static propTypes = {
        handleDelete: PropTypes.func.isRequired,
        translation: PropTypes.shape({
            word1: PropTypes.string.isRequired,
            word2: PropTypes.string.isRequired
        }),
        literals: PropTypes.shape({
            edit: PropTypes.string.isRequired,
        })
    };

    toggleEditable = () => {
        this.setState({editable: !this.state.editable});
    }

    render () {
        if (!this.state.editable) {
            return(
                <View style={styles.view}>
                    <View style={styles.words}>
                        <View style={styles.word}>
                            <Text style={styles.wordText}>{this.props.translation.word1}</Text>
                        </View>
                        <View style={styles.word}>
                            <Text style={styles.wordText}>{this.props.translation.word2}</Text>
                        </View>
                    </View>
                    <View style={styles.actions}>
                        <View style={styles.button}>
                            <Button title={this.props.literals.edit} onPress={this.toggleEditable}/>
                        </View>
                        <View style={styles.button}>
                            <Button title="X" onPress={this.props.handleDelete}/>
                        </View>
                    </View>
                </View>
            );
        } else {
            return (
                <View>
                    <EditTranslationForm
                        translation={this.props.translation}
                        onUpdate={this.toggleEditable}
                    />
                </View>
            );
        }   
    }
}

export default TranslationRow;
