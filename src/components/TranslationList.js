import React from 'react';
import TranslationEditionRow from './edition/TranslationEditionRow';
import TranslationRevisionRow from './revision/TranslationRevisionRow';
import { Text, View } from 'react-native';

class TranslationList extends React.Component {

    render() {

        const RowComponents = {
            'edition': TranslationEditionRow,
            'revision': TranslationRevisionRow
        }

        const translationItems = this.props.translations.map((translation) => {
            return (
                React.createElement(
                    RowComponents[this.props.mode],
                    {
                        key: translation.createdAt,
                        translation: translation
                    }
                )
            );
        });

        return (
            <View className={'list ' + this.props.mode}>
                <Text>List</Text>
                <View>
                    {translationItems}
                </View>
            </View>
        );
    }
}

export default TranslationList;
