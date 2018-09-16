import React from 'react';
import { connect } from 'react-redux';
import { modeChanged } from '../actions/ui';
import { StyleSheet, View, Button, Text } from 'react-native';

const mapStateToProps = (state) => {
    return {
        mode: state.ui.mode
    }
};

class TranslationModeChooser extends React.Component {
    render() {

        const newMode = this.props.mode === 'revision' ? 'edition' : 'revision';

        return (
            <View>
                <View style={{
                        alignItems: 'center',
                        marginTop:30
                    }}>
                        <Text style={{fontWeight: 'bold'}}>Mode {this.props.mode}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex:1, margin:5, marginBottom: 0}}>
                        <Button
                            onPress={() => this.props.dispatch(modeChanged(newMode))}
                            title={'Switch to mode ' + newMode}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default connect(mapStateToProps)(TranslationModeChooser);
