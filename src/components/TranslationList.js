import React from 'react';
import TranslationEditionRow from './edition/TranslationEditionRow';
import TranslationRevisionRow from './revision/TranslationRevisionRow';
import { Text, TextInput, View, FlatList, Dimensions } from 'react-native';
import Header from './ui/Header';

class TranslationList extends React.PureComponent {

    render() {
        const RowComponents = {
            'edition': TranslationEditionRow,
            'revision': TranslationRevisionRow
        }

        const getListItem = (translation) => {
            return React.createElement(
                RowComponents[this.props.mode],
                {
                    key: translation.createdAt,
                    translation: translation
                }
            )
        };

        let content = this.props.translations.length === 0 ?
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{fontStyle: 'italic', lineHeight: 50}}>
                    Add a translation to start learning!
                </Text>
            </View> :
            <FlatList
                data={this.props.translations}
                extraData={this.props.mode}
                renderItem={({item}) => getListItem(item)}
                keyExtractor={(item, index) => index.toString()}
            />
        ;

        return(
            <View style={{flex: 1}}>
                <Header>Translations</Header>
                <View style={{
                    flex: 1,
                    borderTopWidth: 0.5,
                    borderColor: '#bbb'
                }}>
                    {content}
                </View>
            </View>
        );
    }
}

export default TranslationList;
