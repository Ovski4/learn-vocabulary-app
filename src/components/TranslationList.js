import React from 'react';
import TranslationEditionRow from './edition/TranslationEditionRow';
import TranslationRevisionRow from './revision/TranslationRevisionRow';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './ui/Header';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        mode: state.mode,
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
        const RowComponents = {
            'edition': TranslationEditionRow,
            'revision': TranslationRevisionRow
        }

        const getListItem = (translation) => {
            return React.createElement(
                RowComponents[this.props.mode],
                {
                    key: translation.id,
                    id: translation.id,
                    hidden: translation.hidden
                }
            );
        };

        const listEmptyComponent =
            <View style={styles.emptyListView}>
                <Text style={styles.emptyListText}>
                    Add a translation to start learning!
                </Text>
            </View>
        ;

        const content =
            <FlatList
                data={this.props.translations}
                extraData={this.props.mode}
                index={({item}) => item.index}
                renderItem={({item}) => getListItem(item)}
                keyExtractor={(item, index) => item.id}
                ListEmptyComponent={listEmptyComponent}
            />
        ;

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

export default connect(mapStateToProps)(TranslationList);
