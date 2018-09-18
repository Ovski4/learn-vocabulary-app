import React from 'react';
import TranslationEditionRow from './edition/TranslationEditionRow';
import TranslationRevisionRow from './revision/TranslationRevisionRow';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import Header from './ui/Header';

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

class TranslationList extends React.Component {

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
            );
        };

        let content;

        if (this.props.translations === null) {
            content =
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator size={50} color="#03A9F4"/>
                </View>
            ;
        } else {
            const listEmptyComponent =
                <View style={styles.emptyListView}>
                    <Text style={styles.emptyListText}>
                        Add a translation to start learning!
                    </Text>
                </View>
            ;
            content =
                <FlatList
                    data={this.props.translations}
                    extraData={this.props.mode}
                    index={({item}) => item.createdAt}
                    renderItem={({item}) => getListItem(item)}
                    keyExtractor={(item, index) => item.createdAt.toString()}
                    ListEmptyComponent={listEmptyComponent}
                />
            ;
        }

        return(
            <View style={{flex: 1}}>
                <Header>Translations</Header>
                <View style={{
                    flex: 1,
                    borderColor: '#bbb'
                }}>
                    {content}
                </View>
            </View>
        );
    }
}

export default TranslationList;
