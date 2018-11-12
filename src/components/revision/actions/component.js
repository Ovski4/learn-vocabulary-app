import React from 'react';
import { Text, Picker, Button, View, StyleSheet } from 'react-native';
import Header from '../../../components/ui/Header';
import translationsService from '../../../services/translations';
import TranslationsSearchBar from '../../ui/TranslationSearchBar';

const styles = StyleSheet.create({
    button: {
        flex: 1,
        margin: 5
    },
    revisionWords: {
        flexDirection: 'row',
        flex: 0.8
    },
    row: {
        flexDirection: 'row'
    },
    tagsSelectorRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    picker:{
        height: 40,
        width: 200,
        paddingLeft: 20
    },
    filterText: {
        fontSize: 16,
        color: '#929292'
    }
});

class Actions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTag: null
        };
    }

    filterByTag = (selectedTag) => {
        this.setState({selectedTag});
        this.props.handleFilterByTag(selectedTag);
    }

    render() {

        const visibleTranslations = this.state.selectedTag !== null ?
            translationsService.filterByTagId(this.props.translations, this.state.selectedTag) :
            this.props.translations
        ;

        const pickerItems = this.props.tags
            .sort((tag1, tag2) => tag1.label < tag2.label ? -1 : 1)
            .map(tag => {
                return <Picker.Item key={tag.id} value={tag.id} label={tag.label} />
            })
        ;
        pickerItems.unshift(<Picker.Item key={'none'} value={null} label={this.props.literals.noTagSelected} />)

        return (
            <View>
                <Header>{this.props.literals.header}</Header>
                <View style={styles.row}>
                    <View style={styles.button}>
                        <Button
                            onPress={() => this.props.handleShuffle(this.props.translations.length)}
                            title={this.props.literals.shuffle}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            disabled={translationsService.translationsAreOrdered(this.props.translations)}
                            onPress={() => this.props.handleUnshuffle()}
                            title={this.props.literals.unshuffle}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.button}>
                        <Button
                            disabled={translationsService.translationsAreHidden(visibleTranslations, 'left')}
                            onPress={() => this.props.handleHideLeft(visibleTranslations)}
                            title={this.props.literals.hideLeft}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            disabled={translationsService.translationsAreHidden(visibleTranslations, 'right')}
                            onPress={() => this.props.handleHideRight(visibleTranslations)}
                            title={this.props.literals.hideRight}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            disabled={translationsService.allTranslationsAreVisible(visibleTranslations)}
                            onPress={() => this.props.handleDisplayEverything(visibleTranslations)}
                            title={this.props.literals.displayAll}
                        />
                    </View>
                </View>
                <View style={styles.tagsSelectorRow}>
                    <Text style={styles.filterText}>{this.props.literals.filterLabel}:</Text>
                    <Picker
                        selectedValue={this.state.selectedTag}
                        style={styles.picker}
                        onValueChange={(tag) => {
                            // Reveal everything when we change the tag
                            this.props.handleDisplayEverything(visibleTranslations)
                            this.filterByTag(tag)
                        }}
                    >
                        {pickerItems}    
                    </Picker>
                </View>
                <TranslationsSearchBar scope="revision"/>
            </View>
        );
    }
}

export default Actions;
