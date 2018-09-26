import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderRightDate = () => (
    <View style={styles.container}>
        <Text style={styles.text}>{`${new Date().getDate()}/${new Date().getMonth() + 1}`}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginRight: 30,
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
});

export default HeaderRightDate;
