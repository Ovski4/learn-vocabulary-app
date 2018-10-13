import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import NewTagForm from '../newTagForm/connect';
import TagList from '../tagList/connect';

const styles = StyleSheet.create({
    page: {
        flex:1
    }
});

class TagsEditionScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Tags'
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.page} behavior="padding">
                <NewTagForm/>
                <TagList/>
            </KeyboardAvoidingView>
        );
    }
}

export default TagsEditionScreen;
