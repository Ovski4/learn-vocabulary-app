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

export default TranslationRow;
