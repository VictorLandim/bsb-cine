import React from 'react';
import {
    View, Text, Image, StyleSheet, Linking, Alert,
} from 'react-native';
import {
    BLUE, BLACK, WHITE, LIGHT_GRAY,
} from '../../config/colors';
import { TextButton } from '../Button';

class MovieHeader extends React.Component {
    openTrailer = (url) => {
        Linking.canOpenURL(url).then((supported) => {
            if (supported) {
                Linking.openURL(url);
            } else {
                Alert.alert('Trailer indisponível.');
            }
        });
    };

    render() {
        const {
            image, genre, rating, synopsis, trailer,
        } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <Image style={styles.image} resizeMode="cover" source={{ uri: image }} />
                </View>
                <View style={styles.right}>
                    <View style={styles.rowContainer}>
                        <View style={styles.genreContainer}>
                            <Text style={styles.genre}>{genre}</Text>
                        </View>

                        <View style={styles.textButtonContainer}>
                            <TextButton
                                onPress={() => this.openTrailer(trailer)}
                                color={BLUE}
                                text="Trailer"
                            />
                        </View>
                    </View>
                    <Text style={styles.rating}>{rating}</Text>
                    <Text style={styles.info}>{synopsis}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: BLACK,
        minHeight: 150,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: BLUE,
        // shadowOffset: { width: 10, height: 10 },
        // shadowColor: '#000',
        // shadowOpacity: 1.0,
        // elevation: 1,
    },
    left: {
        flex: 1,
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    right: {
        padding: 20,
        flex: 2,
    },

    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 0,
    },
    genre: {
        fontWeight: '600',
        color: WHITE,
        fontSize: 17,
    },
    genreContainer: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    textButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    rating: {
        fontWeight: '500',
        color: LIGHT_GRAY,
        fontSize: 14,
        marginTop: 5,
    },
    info: {
        color: LIGHT_GRAY,
        marginTop: 20,
        fontSize: 12,
    },
});

export default MovieHeader;
