import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = (props) => {
    const { label, value, onChangeText, onSubmit, placeholder, secureTextEntry } = props;
    const { containerStyle, labelStyle, textInputStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>
                {label}
            </Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmit}
                style={textInputStyle}
            />
        </View>
    );
};

const styles = {
    textInputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
