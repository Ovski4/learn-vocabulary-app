import React from 'react';
import Actions from '../actions/connect';
import TranslationList from '../translationList/connect';
import { StyleSheet, View, Image } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        translationsLength: state.translations.length
    }
};

const styles = StyleSheet.create({
    page: {
        flex:1,
        marginTop: 30
    }
});

class RevisionScreen extends React.PureComponent {

    constructor(props) {
        super(props);
        if (props.translationsLength === 0) {
            props.navigation.navigate('Edition');
        }
    }

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => <Image
            source={require('./assets/icon.png')}
            style={{ height: 30, width: 30, tintColor: tintColor}}
        />
    }

    render() {
        return (
            <View style={styles.page}>
                <Actions/>
                <TranslationList/>
            </View>
        );
    }
}

export default connect(mapStateToProps)(RevisionScreen);
