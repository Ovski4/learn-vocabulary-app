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
        return (
            <View>
                <View style={{
                        alignItems: 'center',
                        marginTop:40,
                        marginBottom: 15
                    }}>
                        <Text style={{fontWeight: 'bold'}}>Switch mode</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex:1, margin:5}}>
                        <Button
                            disabled={this.props.mode === 'edition'}
                            onPress={() => this.props.dispatch(modeChanged('edition'))}
                            title="Mode edition"
                        />
                    </View>
                    <View style={{flex:1, margin:5}}>
                        <Button
                            disabled={this.props.mode === 'revision'}
                            onPress={() => this.props.dispatch(modeChanged('revision'))}
                            title="Mode revision"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default connect(mapStateToProps)(TranslationModeChooser);
