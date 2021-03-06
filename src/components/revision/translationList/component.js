import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TranslationRow from '../translationRow/connect';
import translationsService from '../../../services/translations'
import Header from '../../ui/Header';
import PropTypes from 'prop-types';

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

    static propTypes = {
        translations: PropTypes.array.isRequired,
        literals: PropTypes.shape({
            notFound: PropTypes.string.isRequired,
            addToStart: PropTypes.string.isRequired,
            header: PropTypes.string.isRequired
        }),
        ui: PropTypes.shape({
            translationsFilteredBy: PropTypes.string,
            translationsSearch: PropTypes.shape({
                revision: PropTypes.string,
            })
        })
    };

    render() {
        const getListItem = (translation) => {
            return <TranslationRow
                key={translation.id}
                id={translation.id}
                hidden={translation.hidden}
            />;
        };

        const emptyListText = this.props.translations.length > 0 ?
            this.props.literals.notFound :
            this.props.literals.addToStart
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
                <Header>{this.props.literals.header}</Header>
                <View style={{
                    flex: 1,
                    borderColor: '#bbb'
                }}>
                    <FlatList
                        data={translationList}
                        index={({item}) => item.index}
                        renderItem={({item}) => getListItem(item)}
                        keyExtractor={(item) => item.id}
                        ListEmptyComponent={listEmptyComponent}
                    />
                </View>
            </View>
        );
    }
}

export default TranslationList;
