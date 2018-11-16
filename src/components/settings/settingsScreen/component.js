import React from 'react';
import { StyleSheet, View, Text, Image, Picker } from 'react-native';
import translator from '../../../services/translator';
import Header from '../../../components/ui/Header';

const styles = StyleSheet.create({
    page: {
        flex:1,
        marginTop: 30
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    label: {
        fontSize: 16,
        color: '#929292'
    },
    picker:{
        height: 40,
        width: 200,
        paddingLeft: 20
    }
});

class SettingsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedLocale: props.locale
        };
    }

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
            </View>
        );
    }
}

export default SettingsScreen;
