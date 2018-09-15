import React from 'react';
import { connect } from 'react-redux';
import { Button, View, Text } from 'react-native';
import { translationsShuffled, translationsUnshuffled } from '../../actions/translations';
import { shuffledPressed, unshuffledPressed} from '../../actions/ui';
import { translationsEntirelyHidden, allTranslationsRevealed } from '../../actions/ui';
import styles from '../styles/styles';

const getRandomNumbers = (arrayLength) => {
    const numbers = [];
    for (let i = 0; i < arrayLength; i++) {
        numbers.push(Math.random());
    }

    return numbers;
};

const mapStateToProps = (state) => ({
    translationsLength: state.translations.length,
    leftTranslationsEntirelyHidden: state.ui.leftTranslationsEntirelyHidden,
    rightTranslationsEntirelyHidden: state.ui.rightTranslationsEntirelyHidden,
    allTranslationsRevealed: state.ui.allTranslationsRevealed,
    shuffled: state.ui.shuffled
});

const mapDispatchToProps = (dispatch) => ({
    handleShuffle: (translationsLength) => {
        dispatch(translationsShuffled(getRandomNumbers(translationsLength)));
        dispatch(shuffledPressed());
    },
    handleUnshuffle: () => {
        dispatch(translationsUnshuffled());
        dispatch(unshuffledPressed());
    },
    handleDisplayEverything: () => dispatch(allTranslationsRevealed()),
    handleHideLeft: () => dispatch(translationsEntirelyHidden('left')),
    handleHideRight: () => dispatch(translationsEntirelyHidden('right'))
});

class TranslationRevisionForm extends React.Component {

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
                        <Button
                            onPress={() => this.props.handleShuffle(this.props.translationsLength)}
                            title="Shuffle"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            disabled={!this.props.shuffled}
                            onPress={() => this.props.handleUnshuffle()}
                            title="Unshuffle"
                        />
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.button}>
                        <Button
                            disabled={this.props.leftTranslationsEntirelyHidden}
                            onPress={() => this.props.handleHideLeft()}
                            title="Hide left"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            disabled={this.props.rightTranslationsEntirelyHidden}
                            onPress={() => this.props.handleHideRight()}
                            title="Hide right"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            disabled={this.props.allTranslationsRevealed}
                            onPress={() => this.props.handleDisplayEverything()}
                            title="Display all"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TranslationRevisionForm);
