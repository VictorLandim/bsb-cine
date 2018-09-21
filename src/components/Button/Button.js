import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet;';

const Button = props => {
    const { onPress, children, style } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, style]}>
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = EStyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#69F0AE',
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
});

export default Button;
