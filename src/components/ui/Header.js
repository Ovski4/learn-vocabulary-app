import { View, Text } from 'react-native';
import React from 'react';

const Header = (props) => {

    const style = Object.assign({...props.style}, {
        alignItems: 'center',
        margin: 5
    });

    return (
        <View style={style}>
            <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
        </View>
    );
}

Header.defaultProps = {
    style: {}
};

export default Header;