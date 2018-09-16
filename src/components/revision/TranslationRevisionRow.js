import React from 'react';
import { connect } from 'react-redux';
import { translationRevealed } from '../../actions/ui';
import { Text, View } from 'react-native';

const mapStateToProps = (state) => ({
    leftTranslationsEntirelyHidden: state.ui.leftTranslationsEntirelyHidden,
    rightTranslationsEntirelyHidden: state.ui.rightTranslationsEntirelyHidden,
    allTranslationsRevealed: state.ui.allTranslationsRevealed
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleClickLeftWord: () => dispatch(translationRevealed(ownProps.createdAt, 'left')),
    handleClickRightWord: () => dispatch(translationRevealed(ownProps.createdAt, 'right'))
});

class TranslationRevisionRow extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.leftTranslationsEntirelyHidden) {
            this.state = this.revealRightWord();
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

    revealRightWord = () => ({
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
            this.setState(this.revealRightWord());
        } else if (this.props.rightTranslationsEntirelyHidden && this.state.wordRightRevealed) {
            this.setState(this.revealLeftWord());
        } else if (this.props.allTranslationsRevealed && (!this.state.wordLeftRevealed || !this.state.wordRightRevealed)) {
            this.setState(this.revealBothWords());
        }
    }

    render () {
        const getWordViewStyle = (isHidden) => {
            const baseWordStyle = {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 12
            };


            if (isHidden) {
                return Object.assign({
                    backgroundColor: '#eee',
                }, baseWordStyle);
            }

            return baseWordStyle;
        }

        const getWordTextStyle = (isHidden) => {
            if (isHidden) {
                return { color: '#eee'};
            }

            return {color: '#000'};
        }

        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    borderTopWidth: 0.4,
                    borderColor: '#bbb'
                }}
                >
                    <View
                        onStartShouldSetResponder={this.handleClickLeftWord}
                        style={getWordViewStyle(!this.state.wordLeftRevealed)}
                    >
                        <Text style={getWordTextStyle(!this.state.wordLeftRevealed)}>
                            {this.props.translation.word1}
                        </Text>
                    </View>
                    <View
                        onStartShouldSetResponder={this.handleClickRightWord}
                        style={getWordViewStyle(!this.state.wordRightRevealed)}
                    >
                        <Text style={getWordTextStyle(!this.state.wordRightRevealed)}>
                            {this.props.translation.word2}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TranslationRevisionRow);
