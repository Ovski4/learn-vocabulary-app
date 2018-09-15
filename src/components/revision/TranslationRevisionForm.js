import React from 'react';
import { connect } from 'react-redux';
import { Button, View, Text } from 'react-native';
import { translationsShuffled, translationsUnshuffled } from '../../actions/translations';
import { translationsEntirelyHidden, allTranslationsRevealed } from '../../actions/ui';
import styles from '../styles/styles';

const mapStateToProps = (state) => ({
    translationsLength: state.translations.length
});

class TranslationRevisionForm extends React.Component {

    getRandomNumbers = () => {
        const numbers = [];
        for (let i = 0; i < this.props.translationsLength; i++) {
            numbers.push(Math.random());
        }

        return numbers;
    }

    handleShuffle = () => {
        this.props.dispatch(translationsShuffled(this.getRandomNumbers()))
    }

    handleUnshuffle = () => {
        this.props.dispatch(translationsUnshuffled());
    }

    handleDisplayEverything = () => {
        this.props.dispatch(allTranslationsRevealed());
    }

    handleHideLeft = () => {
        this.props.dispatch(translationsEntirelyHidden('left'));
    }

    handleHideRight = () => {
        this.props.dispatch(translationsEntirelyHidden('right'));
    }

    render() {
        return (
            <View>
                <View style={{
                    alignItems: 'center',
                    margin: 20
                }}>
                    <Text style={{fontWeight: 'bold'}}>Revise</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.button}>
                        <Button onPress={() => this.handleShuffle()} title="Shuffle"/>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={() => this.handleUnshuffle()} title="Unshuffle"/>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.button}>
                        <Button onPress={() => this.handleHideLeft()} title="Hide left"/>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={() => this.handleHideRight()} title="Hide right"/>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={() => this.handleDisplayEverything()} title="Display all"/>
                    </View>
                </View>
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
)(TranslationRevisionForm);
