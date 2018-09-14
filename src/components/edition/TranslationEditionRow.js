import React from 'react';
import { connect } from 'react-redux';
import TranslationEditionForm from './TranslationEditionForm';
import { translationDeleted } from '../../actions/translations';
import { Button, Text, View } from 'react-native';

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleDelete: () => dispatch(translationDeleted(ownProps.translation.createdAt)),
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
            return (
                <View className="translation">
                    <Text className="word-left">{this.props.translation.word1}</Text>
                    <Text className="word-right">{this.props.translation.word2}</Text>
                    <Button title="Edit" onPress={this.toggleEditable}/>
                    <Button title="X" onPress={this.props.handleDelete}/>
                </View>
            );
        } else {
            return (
                <View className="translation">
                    <TranslationEditionForm
                        className="edit-translation"
                        labelWord1={null}
                        labelWord2={null}
                        translation={this.props.translation}
                        onUpdate={this.toggleEditable}
                    />
                </View>
            );
        }   
    }
}

export default connect(
    null,
    mapDispatchToProps
)(TranslationEditionRow);
