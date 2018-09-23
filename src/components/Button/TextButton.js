import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const TextButton = (props) => {
    const { color, onPress, text } = props;

    const styles = Styles(color);

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text.toUpperCase()}</Text>
        </TouchableOpacity>
    );
};

const Styles = color => EStyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        alignSelf: 'center',
        color,
        fontSize: 14,
        fontWeight: '500',
    },
});

export default TextButton;
