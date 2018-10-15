import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Keyboard } from 'react-native';
import { translationsSearched } from '../../actions/ui';
import { SearchBar } from 'react-native-elements';
import { waitForIt } from '../../services/helpers';

const mapDispatchToProps = (dispatch) => ({
    handleFullTextSearch: (text, scope) => dispatch(translationsSearched(text, scope))
});

const styles = StyleSheet.create({
    inputStyle: {
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 30,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd'
    },
    containerStyle: {
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
    }
});

class TranslationSearchBar extends React.Component {

    fullTextSearch = (text) => {
        // Do not wait on clear text
        const waitingTime = text == '' ? 0 : 300;
        waitForIt(() => {
            this.props.handleFullTextSearch(text, this.props.scope);
        }, waitingTime);
    }

    render() {
        return (
            <SearchBar
                clearIcon
                lightTheme
                containerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                onChangeText={text => this.fullTextSearch(text)}
                onClearText={() => {
                    this.fullTextSearch('');
                    Keyboard.dismiss();
                }}
                placeholder='Look for translations'
            />
        );
    }
};

export default connect(
    null,
    mapDispatchToProps
)(TranslationSearchBar);
