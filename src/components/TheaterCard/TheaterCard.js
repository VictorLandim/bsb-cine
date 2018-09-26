import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TheaterCard = props => (
    <View style={styles.container}>
        <Text style={styles.text}>{JSON.stringify(props)}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {},
    text: {
        color: '#fff',
    },
});

export default TheaterCard;
