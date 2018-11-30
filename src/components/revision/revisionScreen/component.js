import React from 'react';
import Actions from '../actions/connect';
import TranslationList from '../translationList/connect';
import { StyleSheet, View, Platform, StatusBar, Image } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    page: {
        flex:1,
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
});

class RevisionScreen extends React.PureComponent {

    constructor(props) {
        super(props);
        if (props.translationsLength === 0) {
            props.navigation.navigate('Edition');
        }
    }

    static propTypes = {
        translationsLength: PropTypes.number.isRequired
    };

    static navigationOptions = ({ screenProps }) => {
        return {
            tabBarLabel: screenProps.titles.revision,
            tabBarIcon: ({tintColor}) => <Image
                source={require('./assets/icon.png')}
                style={{ height: 30, width: 30, tintColor: tintColor}}
            />
        }
    };

    render() {
        return (
            <View style={styles.page}>
                <Actions/>
                <TranslationList/>
            </View>
        );
    }
}

export default RevisionScreen;
