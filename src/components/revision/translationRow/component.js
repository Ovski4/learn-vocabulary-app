import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        borderTopWidth: 0.4,
        borderColor: '#bbb'
    }
});

class TranslationRow extends React.PureComponent {

    getWordViewStyle = (side) => {
        const baseStyle = {
            flex: 1,
            alignItems: 'center',
            padding: 12
        };

        if (this.props.translation.hidden === side) {
            return Object.assign({
                backgroundColor: '#eee',
            }, baseStyle);
        }

        return baseStyle;
    }

    getWordTextStyle = (side) => {
        const baseStyle = {
            textAlign: 'center'
        };

        if (this.props.translation.hidden === side) {
            return Object.assign({
                color: '#eee',
            }, baseStyle);
        }

        return Object.assign({
            color: '#000',
        }, baseStyle);
    }

    handleClickLeftWord = () => {
        this.props.handleClickLeftWord(this.props.translation.hidden);
    }

    handleClickRightWord = () => {
        this.props.handleClickRightWord(this.props.translation.hidden);
    }

    onTouchUp = (handleClick) => {
        handleClick();
    }

    render () {
        return (
            <View>
                <View style={styles.view}>
                    <View
                        onStartShouldSetResponder={() => true}
                        onResponderRelease={() => this.onTouchUp(this.handleClickLeftWord)}
                        style={this.getWordViewStyle('left')}
                    >
                        <Text style={this.getWordTextStyle('left')}>
                            {this.props.translation.word1}
                        </Text>
                    </View>
                    <View
                        onStartShouldSetResponder={() => true}
                        onResponderRelease={() => this.onTouchUp(this.handleClickRightWord)}
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

export default TranslationRow;
