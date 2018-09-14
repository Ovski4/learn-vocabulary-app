import React from 'react';
import { connect } from 'react-redux';
import { translationRevealed } from '../../actions/ui';
import { Text, View } from 'react-native';

const mapStateToProps = (state) => ({
    leftTranslationsEntirelyHidden: state.leftTranslationsEntirelyHidden,
    rightTranslationsEntirelyHidden: state.rightTranslationsEntirelyHidden,
    allTranslationsRevealed: state.allTranslationsRevealed
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleClickLeftWord: () => dispatch(translationRevealed(ownProps.createdAt, 'left')),
    handleClickRightWord: () => dispatch(translationRevealed(ownProps.createdAt, 'right'))
});

class TranslationRevisionRow extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.leftTranslationsEntirelyHidden) {
            this.state = this.wordRightRevealed();
        } else if (this.props.rightTranslationsEntirelyHidden) {
            this.state = this.revealLeftWord();
        } else {
            this.state = this.revealBothWords();
        }
    }

    revealBothWords = () => ({
        wordLeftRevealed: true,
        wordRightRevealed: true
    });

    revealLeftWord = () => ({
        wordLeftRevealed: true,
        wordRightRevealed: false
    });

    revealRigthWord = () => ({
        wordLeftRevealed: false,
        wordRightRevealed: true
    });


    handleClickLeftWord = () => {
        if (this.state.wordLeftRevealed) {
            return;
        }

        this.props.handleClickLeftWord();
        this.setState(this.revealBothWords());
    }

    handleClickRightWord = () => {
        if (this.state.wordRightRevealed) {
            return;
        }

        this.props.handleClickRightWord();
        this.setState(this.revealBothWords());
    }

    /**
     * In case props change by clicking on the form buttons
     * The second condition is used to avoid never ending loops
     */
    componentDidUpdate() {
        if (this.props.leftTranslationsEntirelyHidden && this.state.wordLeftRevealed) {
            this.setState(this.revealRigthWord());
        } else if (this.props.rightTranslationsEntirelyHidden && this.state.wordRightRevealed) {
            this.setState(this.revealLeftWord());
        } else if (this.props.allTranslationsRevealed && (!this.state.wordLeftRevealed || !this.state.wordRightRevealed)) {
            this.setState(this.revealBothWords());
        }
    }

    render () {
        const wordLeftClassName = "word-left " + (!this.state.wordLeftRevealed ? 'hidden' : '');
        const wordRightClassName = "word-right " + (!this.state.wordRightRevealed ? 'hidden' : '');

        return (
            <View className="translation">
                <View className={wordLeftClassName} /*onClick={this.handleClickLeftWord}*/>
                    <Text>{this.props.translation.word1}</Text>
                </View>
                <View className={wordRightClassName} /*onClick={this.handleClickRightWord}*/>
                    <Text>{this.props.translation.word2}</Text>
                </View>
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TranslationRevisionRow);
