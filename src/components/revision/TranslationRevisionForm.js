import React from 'react';
import { connect } from 'react-redux';
import { Button, View, StyleSheet } from 'react-native';
import {
    translationsShuffled,
    translationsUnshuffled,
    allTranslationsRevealed,
    translationsEntirelyHidden
} from '../../actions/translations';
import Header from '../../components/ui/Header';
import translationsService from '../../services/translations';

const getRandomNumbers = (arrayLength) => {
    const numbers = [];
    for (let i = 0; i < arrayLength; i++) {
        numbers.push(Math.random());
    }

    return numbers;
};

const mapStateToProps = (state) => ({
    translations: state.translations
});

const styles = StyleSheet.create({
    button: {
        flex: 1,
        margin: 5
    },
    revisionWords: {
        flexDirection: 'row',
        flex: 0.8
    },
    row: {
        flexDirection: 'row'
    }
});

const mapDispatchToProps = (dispatch) => ({
    handleShuffle: (translationsLength) => dispatch(translationsShuffled(
        getRandomNumbers(translationsLength)
    )),
    handleUnshuffle: () => dispatch(translationsUnshuffled()),
    handleDisplayEverything: () => dispatch(allTranslationsRevealed()),
    handleHideLeft: () => dispatch(translationsEntirelyHidden('left')),
    handleHideRight: () => dispatch(translationsEntirelyHidden('right'))
});

class TranslationRevisionForm extends React.PureComponent {

    render() {
        return (
            <View>
                <Header>Actions</Header>
                <View style={styles.row}>
                    <View style={styles.button}>
                        <Button
                            onPress={() => this.props.handleShuffle(this.props.translations.length)}
                            title="Shuffle"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            disabled={translationsService.translationsAreOrdered(this.props.translations)}
                            onPress={() => this.props.handleUnshuffle()}
                            title="Unshuffle"
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.button}>
                        <Button
                            disabled={translationsService.translationsAreHidden(this.props.translations, 'left')}
                            onPress={() => this.props.handleHideLeft()}
                            title="Hide left"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            disabled={translationsService.translationsAreHidden(this.props.translations, 'right')}
                            onPress={() => this.props.handleHideRight()}
                            title="Hide right"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            disabled={translationsService.allTranslationsAreVisible(this.props.translations)}
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
