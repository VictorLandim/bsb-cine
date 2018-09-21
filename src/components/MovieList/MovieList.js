import React from 'react';
import { FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { MovieCard } from '../MovieCard';

const MovieList = ({ movieData }) => (
    <FlatList
        style={{
            flex: 1
        }}
        contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center'
        }}
        data={movieData}
        renderItem={({ item }) => (
            <MovieCard title={item.title} image={item.image} schedule={item.schedule} synopsys={item.synopsys} />
        )}
    />
);

const styles = EStyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MovieList;
