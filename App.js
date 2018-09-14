import React from 'react';
import { Provider } from 'react-redux'
import { StyleSheet, View } from 'react-native';
import LearnVocabulary from './src/components/LearnVocabulary';
import storageService from './src/services/storage';
import translationsService from './src/services/translations';
import reducer from './src/reducers/index';
import { fetchTranslations } from './src/actions/translations';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

store.subscribe(async () => {
    const translations = translationsService.unshuffle(store.getState().translations);
    if (translations.length > 0) {
        await storageService.set('translations', translations);
    }
});

store.dispatch(fetchTranslations());

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Provider store={store}>
            <LearnVocabulary />
        </Provider>
      </View>
    );
  }
}
