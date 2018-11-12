import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../../ui/Header';
import TagRow from '../tagRow/connect';

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

class TagList extends React.PureComponent {

    render() {
        const getListItem = (tag) => {
            return <TagRow
                    key={tag.id}
                    id={tag.id}
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

        return(
            <View style={{flex: 1}}>
                <Header>{this.props.literals.header}</Header>
                <View style={{
                    flex: 1,
                    borderColor: '#bbb'
                }}>
                    <FlatList
                        data={this.props.tags}
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

export default TagList;
