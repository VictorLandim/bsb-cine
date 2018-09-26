import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { MovieCard } from '../MovieCard';

const MovieList = ({ movieData }) => (
    <FlatList
        style={{
            flex: 1,
        }}
        contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
        }}
        data={movieData}
        renderItem={({ item }) => (
            <MovieCard
                title={item.title}
                image={item.image}
                schedule={item.schedule}
                synopsys={item.synopsys}
            />
        )}
    />
);

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MovieList;
