import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const TheaterCard = props => (
    <View style={styles.container}>
        <Text style={styles.text}>{JSON.stringify(props)}</Text>
    </View>
);

const styles = EStyleSheet.create({
    container: {},
    text: {
        color: '#fff',
    },
});

export default TheaterCard;
