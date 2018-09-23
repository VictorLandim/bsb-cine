import React from 'react';
import { FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TheaterCard } from '../TheaterCard';

const TheaterCard = ({ theaterData }) => (
    <FlatList
        style={{
            flex: 1,
        }}
        contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
        }}
        data={theaterData}
        renderItem={({ item }) => <TheaterCard item={item} />}
    />
);

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$black',
    },
});

export default TheaterCard;
