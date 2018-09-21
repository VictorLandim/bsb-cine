import React from 'react';
import { View, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const MovieCard = props => {
    const { title, genre, year, duration, imageUrl, trailerUrl } = props;
    <View style={styles.container}>
        <View>
            <Image uri={trailerUrl} style={styles.image} />
        </View>
        <View>
            <Text style={styles.row}>
                <Text style={styles.label}>Duracao:</Text>
                {title}
            </Text>

            <Text style={styles.row}>
                <Text style={styles.label}>Ano: </Text>
                {year}
            </Text>

            <Text style={styles.row}>
                <Text style={styles.label}>Duracao: </Text>
                {duration}
            </Text>

            <Text style={styles.link}>Ver trailer</Text>
        </View>
    </View>;
};

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$black'
    },
    image: {},
    label: {},
    row: {},
    link: {}
});

export default MovieCard;
