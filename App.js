import React from 'react';
import { Provider } from 'react-redux'
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import LearnVocabulary from './src/components/LearnVocabulary';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage';
import reducer from './src/reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    whitelist: ['translations'],
    storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
    persistedReducer,
    applyMiddleware(thunk)
);

const persistor = persistStore(store);

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#FFFFFF',
        flex: 1
    }
});

const loadingView =
    <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size={50} color="#03A9F4"/>
    </View>
;

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.root}>
                <Provider store={store}>
                    <PersistGate loading={loadingView} persistor={persistor}>
                        <LearnVocabulary />
                    </PersistGate>
                </Provider>
            </View>
        );
    }
}
