import React from 'react';
import BaseTagForm from '../BaseTagForm';
import { StyleSheet, Button, Text, View } from 'react-native';
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

class NewTagForm extends BaseTagForm {

    constructor(props) {
        super(props);
        this.state = {
            label: ''
        };
    }

    handleSubmit = () => {
        const tag = {
            label: this.state.label,
            createdAt: Date.now(),
            id: uuidv4()
        };

        this.input.clear();
        this.props.handleTagAdded(tag);
        this.setState({
            label: ''
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
                                <Text>{this.props.literals.form.label}:</Text>
                            </View>
                            <View style={styles.input}>
                                {this.getInputText()}
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

export default NewTagForm;
