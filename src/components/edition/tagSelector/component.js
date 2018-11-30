import React from 'react';
import { StyleSheet, Picker, TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    pickerContainer: {
        backgroundColor: '#eeeeee',
        borderRadius: 2,
        marginLeft: 5
    },
    tagsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        backgroundColor: '#ffffff'
    },
    tagButton: {
        justifyContent: "center",
        backgroundColor: "#e0e0e0",
        paddingLeft: 12,
        paddingRight: 12,
        height: 32,
        margin: 4,
        borderRadius: 4,
        marginBottom: 0,
        marginRight: 0
    },
    tagLabel: {
        fontSize: 13,
        color: '#03A9F4',
        fontWeight: 'bold',
    },
    picker: {
        height: 32
    }
});

class Tag extends React.PureComponent {

    static propTypes = {
        onPress: PropTypes.func.isRequired,
        label: PropTypes.string.isRequired
    };

    render() {
        return (
            <TouchableOpacity style={styles.tagButton} onPress={this.props.onPress}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.tagLabel}>{this.props.label}</Text>
                    </View>
                    <View style={{flexDirection: 'row', paddingLeft: 7}}>
                        <Text style={{color: '#777777', paddingBottom: 1, fontWeight: 'bold'}}>x</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

class TagSelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTags: props.tags.filter(tag => props.initialSelectedTags.includes(tag)),
            selectableTags: this.getSelectableTags(props.initialSelectedTags),
            tagPickedId: null
        };
    }

    static propTypes = {
        onChange: PropTypes.func.isRequired,
        tags: PropTypes.array.isRequired,
        initialSelectedTags: PropTypes.array.isRequired,
        literals: PropTypes.shape({
            pick: PropTypes.shape({
                label: PropTypes.string.isRequired,
            })
        })
    };

    getSelectableTags = (selectedTags) => {
        return this.props.tags.filter(tag => {
            return typeof selectedTags.find(
                selectedTag => selectedTag.id === tag.id
            ) === 'undefined';
        })
    }

    onTagRemoved = (tagId) => {
        this.setState((previousState) => {
            const selectedTags = previousState.selectedTags.filter(tag => tag.id !== tagId);
            const selectableTags = this.getSelectableTags(selectedTags);
            this.props.onChange(selectedTags);

            return Object.assign({}, previousState, {
                tagPickedId: null,
                selectedTags: selectedTags,
                selectableTags: selectableTags
            });
        });
        
    }

    onTagSelected = (tagId) => {
        if (tagId !== null) {
            this.setState((previousState) => {
                const newSelectedTag = this.props.tags.find(tag => tag.id === tagId)
                const selectedTags = [...previousState.selectedTags, newSelectedTag];
                const selectableTags = this.getSelectableTags(selectedTags);
                this.props.onChange(selectedTags);

                return Object.assign({}, previousState, {
                    tagPickedId: tagId,
                    selectedTags: selectedTags,
                    selectableTags: selectableTags
                });
            });

        }
    }

    render() {
        const tags = this.state.selectedTags.map((tag, i) => {
            return <Tag key={i} label={tag.label} onPress={() => this.onTagRemoved(tag.id)} />;
        });

        const pickerItems = this.getSelectableTags(this.state.selectedTags)
            .sort((tag1, tag2) => tag1.label < tag2.label ? -1 : 1)
            .map(tag => {
                return <Picker.Item key={tag.id} value={tag.id} label={tag.label} />
            })
        ;
        pickerItems.unshift(<Picker.Item key={'none'} value={null} label={this.props.literals.pick.label} />)

        return (
            <View>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={this.state.tagPickedId}
                        style={styles.picker}
                        onValueChange={tagId => this.onTagSelected(tagId)}
                    >
                        {pickerItems}
                    </Picker>
                </View>
                <View style={styles.tagsContainer}>
                    {tags}
                </View>
            </View>
        );
    }
}

export default TagSelector;
