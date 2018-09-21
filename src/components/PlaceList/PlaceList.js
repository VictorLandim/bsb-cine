import React from 'react';
import { FlatList } from 'react-native';
import { PlaceCard } from '../PlaceCard';
import EStyleSheet from 'react-native-extended-stylesheet';

const PlaceList = ({ placeData }) => (
    <FlatList
        style={{
            flex: 1
        }}
        contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center'
        }}
        data={placeData}
        renderItem={({ item }) => <PlaceCard item={item} />}
    />
);

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$black'
    }
});

export default PlaceList;
