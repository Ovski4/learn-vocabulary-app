import React from 'react';
import { StyleSheet, View, Text, Image, Picker, CheckBox } from 'react-native';
import translator from '../../../services/translator';
import Header from '../../../components/ui/Header';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    page: {
        flex:1,
        marginTop: 30
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        paddingLeft: 10
    },
    label: {
        fontSize: 16,
        color: '#929292'
    },
    picker:{
        height: 40,
        width: 200,
        paddingLeft: 20
    },
    version: {
        position: 'absolute',
        bottom: 30,
        right: 30
    },
    versionNumber: {
        color: '#dcdcdc',
        textAlign: 'center'
    }
});

class SettingsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedLocale: props.locale,
            tagsFeatureDisabled: props.tagsFeatureDisabled
        };
    }

    static propTypes = {
        tagsFeatureDisabled: PropTypes.bool.isRequired,
        locale: PropTypes.oneOf(['en', 'fr']),
        handleUpdateLocale: PropTypes.func.isRequired,
        handleUpdateTagsFeatureDisabled: PropTypes.func.isRequired
    };

    static navigationOptions = ({ screenProps }) => {
        return {
            tabBarLabel: screenProps.titles.settings,
            tabBarIcon: ({tintColor}) => <Image
                source={require('./assets/icon.png')}
                style={{ height: 30, width: 30, tintColor: tintColor}}
            />
        }
    };

    render() {
        const pickerItems = translator.getLocales()
            .sort((locale1, locale2) => locale1.label < locale2.label ? -1 : 1)
            .map(locale => {
                return <Picker.Item key={locale.id} value={locale.id} label={locale.label} />
            })
        ;

        return (
            <View style={styles.page}>
                <Header>{translator.get('screens.settings', this.state.selectedLocale)}</Header>
                <View style={styles.row}>
                    <Text style={styles.label}>
                        {translator.get('settings.language', this.state.selectedLocale)}:
                    </Text>
                    <Picker
                        selectedValue={this.state.selectedLocale}
                        style={styles.picker}
                        onValueChange={(locale) => {
                            this.setState({ selectedLocale: locale });
                            this.props.handleUpdateLocale(locale);
                        }}
                    >
                        {pickerItems}
                    </Picker>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>
                        {translator.get('settings.disableTagsFeature', this.state.selectedLocale)}:
                    </Text>
                    <CheckBox
                        value={this.state.tagsFeatureDisabled}
                        onValueChange={() => {
                            this.setState({ tagsFeatureDisabled: !this.state.tagsFeatureDisabled});
                            this.props.handleUpdateTagsFeatureDisabled(!this.state.tagsFeatureDisabled);
                        }}
                    />
                </View>
                <View style={[styles.row, styles.version]}>
                    <Text style={styles.versionNumber}>v1.4.1</Text>
                </View>
            </View>
        );
    }
}

export default SettingsScreen;
