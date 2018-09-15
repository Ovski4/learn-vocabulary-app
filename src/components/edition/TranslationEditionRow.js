import React from 'react';
import { connect } from 'react-redux';
import EditTranslationForm from './EditTranslationForm';
import { translationDeleted } from '../../actions/translations';
import { Button, Text, View } from 'react-native';
import styles from '../styles/styles';

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
            return(
                <View style={{
                    flexDirection: 'row',
                    borderTopWidth: 0.4,
                    borderColor: '#d6d7da',
                }}>
                    <View style={{flexDirection: 'row', flex:3}}>
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text>{this.props.translation.word1}</Text>
                        </View>
                        
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text>{this.props.translation.word2}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', flex:1}}>
                        <View style={{margin:5}}>
                            <Button title="Edit" onPress={this.toggleEditable}/>
                        </View>
                        <View style={{margin:5}}>
                            <Button title="X" onPress={this.props.handleDelete}/>
                        </View>
                    </View>
                </View>
            );
        } else {
            return (
                <View className="translation">
                    <EditTranslationForm
                        className="edit-translation"
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
