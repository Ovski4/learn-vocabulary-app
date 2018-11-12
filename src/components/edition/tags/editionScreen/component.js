import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import NewTagForm from '../newTagForm/connect';
import TagList from '../tagList/connect';
import translator from '../../../../services/translator';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    page: {
        flex:1
    }
});

const mapStateToProps = (state) => {
    return {
        screenTitle: translator.get('edition.tags.list.header', state.config.locale),
    }
};

class TagsEditionScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: typeof(navigation.state.params) === 'undefined' || typeof(navigation.state.params.screenTitle) === 'undefined' ?
                translator.get('edition.tags.list.header', 'en') :
                navigation.state.params.screenTitle
        }
    };

    shouldComponentUpdate(nextProps) {
        if (this.props.screenTitle !== nextProps.screenTitle) {
            this.props.navigation.setParams({
                screenTitle: nextProps.screenTitle,
            });
        }

        return true;
    }

    componentDidMount() {
        this.props.navigation.setParams({
            screenTitle: this.props.screenTitle,
        });
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.page} behavior="padding">
                <NewTagForm/>
                <TagList/>
            </KeyboardAvoidingView>
        );
    }
}

export default connect(
    mapStateToProps,
)(TagsEditionScreen);
