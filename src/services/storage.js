import { AsyncStorage } from "react-native";

const has = async (key) => {
    const value = await AsyncStorage.getItem(key);

    return value !== null;
};

const get = async (key) => {
    const value = await AsyncStorage.getItem(key);

    return value ? JSON.parse(value) : null;
};

const set = async (key, element) => {
    await AsyncStorage.setItem(key, JSON.stringify(element));

    await get(key);
};

export default {
    has,
    set,
    get
};
