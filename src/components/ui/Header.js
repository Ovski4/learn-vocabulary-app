import { View, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.PureComponent {

    static propTypes = {
        style: PropTypes.object,
        children: PropTypes.string.isRequired
    };

    static defaultProps = {
        style: {}
    }

    render () {
        const style = Object.assign({...this.props.style}, {
            alignItems: 'center',
            margin: 5
        });

        return (
            <View style={style}>
                <Text style={{fontWeight: 'bold'}}>{this.props.children}</Text>
            </View>
        );
    }
}

export default Header;