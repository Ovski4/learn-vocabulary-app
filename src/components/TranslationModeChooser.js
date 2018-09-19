import React from 'react';
import { connect } from 'react-redux';
import { modeChanged } from '../actions/mode';
import { StyleSheet, View, Button, Text } from 'react-native';
import Header from './ui/Header';

const mapStateToProps = (state) => {
    return {
        mode: state.mode
    }
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    button: {
        flex: 1,
        margin: 5,
        marginBottom: 0
    }
});

class TranslationModeChooser extends React.Component {

    ucfirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        const newMode = this.props.mode === 'revision' ? 'edition' : 'revision';

        return (
            <View>
                <Header style={{marginTop: 30}}>{this.ucfirst(this.props.mode)} mode</Header>
                <View style={styles.row}>
                    <View style={styles.button}>
                        <Button
                            onPress={() => this.props.dispatch(modeChanged(newMode))}
                            title={'Switch to ' + newMode + ' mode'}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default connect(mapStateToProps)(TranslationModeChooser);
