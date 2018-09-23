import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = (props) => {
    const { onPress, children, style } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, style]}>
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#69F0AE',
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
    },
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
});

export default Button;
