import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const TextButton = (props) => {
    const { color, onPress, text } = props;

    const styles = Styles(color);

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text.toUpperCase()}</Text>
        </TouchableOpacity>
    );
};

const Styles = color => StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        alignSelf: 'flex-end',
        color,
        fontSize: 14,
        fontWeight: '500',
    },
});

export default TextButton;
