import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { waitForIt } from '../../../services/helpers';

const styles = StyleSheet.create({
    textInput: {
        fontSize: 16,
        height: 32
    }
});

class BaseTagForm extends React.Component {

    cannotBeSubmitted = () => {
        const taglabels = [...this.props.tagLabels];

        // We can submit if the label is the same as itself
        // But we can't if the label exist for another tag
        if (typeof this.props.tag !== 'undefined') {
            const ownLabelIndex = taglabels.indexOf(this.props.tag.label);
            if (ownLabelIndex !== -1) {
                taglabels.splice(ownLabelIndex, 1);
            }
        }

        return this.state.label.trim().length === 0
            || taglabels.includes(this.state.label)
        ;
    }

    handleLabelChange = (text) => {
        waitForIt(() => {
            this.setState((previousState) => {
                return Object.assign({}, previousState, {
                    label: text
                });
            });
        }, 200);
    }

    getInputText = () => {
        return <TextInput
            ref="input"
            style={styles.textInput}
            underlineColorAndroid="transparent"
            defaultValue={this.state.label}
            onChangeText={(text) => this.handleLabelChange(text)}
        />
    }
}

export default BaseTagForm;
