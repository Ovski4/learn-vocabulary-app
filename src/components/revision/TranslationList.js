import React from 'react';
import TranslationRow from './TranslationRow';
import translationsService from '../../services/translations'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../ui/Header';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        ui: state.ui,
        translations: [...state.translations].reverse()
    }
};

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

        const listEmptyComponent =
            <View style={styles.emptyListView}>
                <Text style={styles.emptyListText}>
                    Add a translation to start learning!
                </Text>
            </View>
        ;

        const tagFilterId = this.props.ui.translationsFilteredBy;
        const translationList = tagFilterId !== null ?
            translationsService.filterByTagId(this.props.translations, tagFilterId) :
            this.props.translations
        ;

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

export default connect(mapStateToProps)(TranslationList);
