import React from 'react';
import { connect } from 'react-redux';
import EditTranslationForm from './EditTranslationForm';
import { translationDeleted } from '../../actions/translations';
import { StyleSheet, Button, Text, View } from 'react-native';

const mapStateToProps = (state, ownProps) => {
    return {
        translation: state.translations.find((translation) => {
            return ownProps.id === translation.id;
        })
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleDelete: () => dispatch(translationDeleted(ownProps.id)),
});

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        borderTopWidth: 0.4,
        borderColor: '#d6d7da',
    },
    word: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    words: {
        flexDirection: 'row',
        flex: 3
    },
    actions: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    button:{
        margin: 5
    }
});

class TranslationEditionRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editable: false
        };
    }

    toggleEditable = () => {
        this.setState({editable: !this.state.editable});
    }

    render () {
        if (!this.state.editable) {
            return(
                <View style={styles.view}>
                    <View style={styles.words}>
                        <View style={styles.word}>
                            <Text>{this.props.translation.word1}</Text>
                        </View>
                        <View style={styles.word}>
                            <Text>{this.props.translation.word2}</Text>
                        </View>
                    </View>
                    <View style={styles.actions}>
                        <View style={styles.button}>
                            <Button title="Edit" onPress={this.toggleEditable}/>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TranslationEditionRow);
