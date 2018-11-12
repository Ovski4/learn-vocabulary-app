import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TranslationRow from '../translationRow/connect';
import Header from '../../../ui/Header';
import translationsService from '../../../../services/translations';

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
                />
            ;
        };

        const listEmptyComponent =
            <View style={styles.emptyListView}>
                <Text style={styles.emptyListText}>
                    {this.props.literals.addToStart}
                </Text>
            </View>
        ;

        const search = this.props.ui.translationsSearch.edition;
        let translationList = this.props.translations;
        if (search.length > 0) {
            translationList = translationsService.filterBySearch(translationList, search);
        }

        return(
            <View style={{flex: 1}}>
                <Header>{this.props.literals.header}</Header>
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
