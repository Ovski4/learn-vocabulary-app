import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TranslationRow from '../translationRow/connect';
import translationsService from '../../../services/translations'
import Header from '../../ui/Header';

const styles = StyleSheet.create({
    emptyListView: {
        flexDirection: 'row',
        borderTopWidth: 0.4,
        borderColor: '#bbb',
        justifyContent: 'center'
    },
    emptyListText: {
        fontStyle: 'italic',
        lineHeight: 50
    }
});

class TranslationList extends React.PureComponent {

    render() {
        const getListItem = (translation) => {
            return <TranslationRow
                key={translation.id}
                id={translation.id}
                hidden={translation.hidden}
            />;
        };

        const emptyListText = this.props.translations.length > 0 ?
            'No translation found' :
            'Add a translation to start learning!'
        ;
        const listEmptyComponent =
            <View style={styles.emptyListView}>
                <Text style={styles.emptyListText}>
                    {emptyListText}
                </Text>
            </View>
        ;

        const tagFilterId = this.props.ui.translationsFilteredBy;
        const search = this.props.ui.translationsSearch.revision;

        let translationList = this.props.translations;
        if (search.length > 0) {
            translationList = translationsService.filterBySearch(translationList, search);
        }
        if (tagFilterId !== null) {
            translationList = translationsService.filterByTagId(translationList, tagFilterId);
        }

        return(
            <View style={{flex: 1}}>
                <Header>Translations</Header>
                <View style={{
                    flex: 1,
                    borderColor: '#bbb'
                }}>
                    <FlatList
                        data={translationList}
                        index={({item}) => item.index}
                        renderItem={({item}) => getListItem(item)}
                        keyExtractor={(item, index) => item.id}
                        ListEmptyComponent={listEmptyComponent}
                    />
                </View>
            </View>
        );
    }
}

export default TranslationList;
