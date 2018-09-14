import React from 'react';
import { connect } from 'react-redux';
import { Button, View } from 'react-native';
import { translationsShuffled, translationsUnshuffled } from '../../actions/translations';
import { translationsEntirelyHidden, allTranslationsRevealed } from '../../actions/ui';

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
                <View>
                    <Button onPress={() => this.handleShuffle()} title="Shuffle"/>
                    <Button onPress={() => this.handleUnshuffle()} title="Unshuffle"/>
                </View>
                <View>
                    <Button onPress={() => this.handleHideLeft()} title="Hide left"/>
                    <Button onPress={() => this.handleHideRight()} title="Hide right"/>
                    <Button onPress={() => this.handleDisplayEverything()} title="Display everything"/>
                </View>
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
)(TranslationRevisionForm);
