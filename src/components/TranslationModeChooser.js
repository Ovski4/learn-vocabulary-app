import React from 'react';
import { connect } from 'react-redux';
import { modeChanged } from '../actions/ui';
import { StyleSheet, View, Button, Text } from 'react-native';

class TranslationModeChooser extends React.Component {

    render() {
        return (
            <View style={{flexDirection: 'row', marginTop:25}}>
                <View style={{flex:1, margin:5}}>
                    <Button color="#841584" onPress={() => this.props.dispatch(modeChanged('edition'))} title="Mode edition"/>
                </View>
                <View style={{flex:1, margin:5}}>
                    <Button color="green" onPress={() => this.props.dispatch(modeChanged('revision'))} title="Mode revision"/>
                </View>
            </View>
        );
    }
}

export default connect()(TranslationModeChooser);
