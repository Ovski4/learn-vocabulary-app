import React from 'react';
import { connect } from 'react-redux';
import { translationRevealed } from '../../actions/translations';
import { StyleSheet, Text, View } from 'react-native';

const mapStateToProps = (state, ownProps) => {
    return {
        translation: state.translations.find((translation) => {
            return ownProps.id === translation.id;
        })
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClickLeftWord: (hiddenSide) => {
            if (hiddenSide === 'left') {
                dispatch(translationRevealed(ownProps.id));
            }
        },
        handleClickRightWord: (hiddenSide) => {
            if (hiddenSide === 'right') {
                dispatch(translationRevealed(ownProps.id));
            }
        },
    };
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        borderTopWidth: 0.4,
        borderColor: '#bbb'
    }
});

class TranslationRevisionRow extends React.PureComponent {

    getWordViewStyle = (side) => {
        const baseWordStyle = {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 12
        };

        if (this.props.translation.hidden === side) {
            return Object.assign({
                backgroundColor: '#eee',
            }, baseWordStyle);
        }

        return baseWordStyle;
    }

    getWordTextStyle = (side) => {
        if (this.props.translation.hidden === side) {
            return { color: '#eee'};
        }

        return {color: '#000'};
    }

    handleClickLeftWord = () => {
        this.props.handleClickLeftWord(this.props.translation.hidden);
    }

    handleClickRightWord = () => {
        this.props.handleClickRightWord(this.props.translation.hidden);
    }

    render () {
        return (
            <View>
                <View style={styles.view}>
                    <View
                        onStartShouldSetResponder={this.handleClickLeftWord}
                        style={this.getWordViewStyle('left')}
                    >
                        <Text style={this.getWordTextStyle('left')}>
                            {this.props.translation.word1}
                        </Text>
                    </View>
                    <View
                        onStartShouldSetResponder={this.handleClickRightWord}
                        style={this.getWordViewStyle('right')}
                    >
                        <Text style={this.getWordTextStyle('right')}>
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
