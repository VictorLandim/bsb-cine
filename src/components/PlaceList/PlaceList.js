import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { TheaterCard } from '../TheaterCard';
import { BLACK } from '../../config/colors';

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BLACK,
    },
});

export default TheaterCard;
