import React from 'react';
import { connect } from 'react-redux';
import { modeChanged } from '../actions/ui';
import { View, Button } from 'react-native';

class TranslationModeChooser extends React.Component {

    render() {
        return (
            <View className="mode-chooser">
                <Button onPress={() => this.props.dispatch(modeChanged('edition'))} title="Mode edition"/>
                <Button onPress={() => this.props.dispatch(modeChanged('revision'))} title="Mode revision"/>
            </View>
        );
    }
}

export default connect()(TranslationModeChooser);