import React from 'react';
import BaseTagForm from '../BaseTagForm';
import { StyleSheet, Button, Text, View } from 'react-native';

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
        margin: 5,
        justifyContent: 'center'
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

class EditTagForm extends BaseTagForm {

    constructor(props) {
        super(props);
        this.state = {
            label: props.tag.label,
        };
    }

    handleSubmit = () => {
        this.props.handleTagUpdated({
            label: this.state.label,
            id: this.props.tag.id,
        });
        this.props.onUpdate();
    }

    render() {
        return (
            <View style={styles.view}>
                <View style={styles.row}>
                    <View style={styles.label}>
                        <Text>Label:</Text>
                    </View>
                    <View style={styles.input}>
                        {this.getInputText()}
                    </View>
                </View>
                <View style={styles.submitButtonWrapper}>
                    <View style={styles.submitButton}>
                        <Button disabled={this.cannotBeSubmitted()} title={this.props.literals.submit} onPress={this.handleSubmit}/>
                    </View>
                </View>
            </View>
        );
    }
}

export default EditTagForm;
