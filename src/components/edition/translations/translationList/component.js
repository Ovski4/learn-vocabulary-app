import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TranslationRow from '../translationRow/connect';
import Header from '../../../ui/Header';

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
                    Add a translation to start learning!
                </Text>
            </View>
        ;

        return(
            <View style={{flex: 1}}>
                <Header>Translations</Header>
                <View style={{
                    flex: 1,
                    borderColor: '#bbb'
                }}>
                    <FlatList
                        data={this.props.translations}
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
