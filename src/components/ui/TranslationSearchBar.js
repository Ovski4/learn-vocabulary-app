import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Keyboard } from 'react-native';
import { translationsSearched } from '../../actions/ui';
import { SearchBar } from 'react-native-elements';
import { waitForIt } from '../../services/helpers';
import translator from '../../services/translator';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
    return {
        literals: translator.get('searchBar', state.config.locale)
    }
};

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
        borderColor: '#ddd',
        fontSize: 14
    },
    containerStyle: {
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
    }
});

class TranslationSearchBar extends React.Component {

    static propTypes = {
        handleFullTextSearch: PropTypes.func.isRequired,
        scope: PropTypes.oneOf(['revision', 'edition']),
        literals: PropTypes.shape({
            placeholder: PropTypes.string.isRequired,
        })
    };

    fullTextSearch = (text) => {
        // Do not wait on clear text
        const waitingTime = text == '' ? 0 : 300;
        this.setState({ search: text });
        waitForIt(() => {
            this.props.handleFullTextSearch(text, this.props.scope);
        }, waitingTime);
    }

    state = {
        search: '',
    };

    render() {
        const { search } = this.state;

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
                placeholder={this.props.literals.placeholder}
                platform="android"
                value={search}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TranslationSearchBar);
