import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo = () => (
    <View style={styles.container}>
        <Image resizeMode="contain" style={styles.image} source={require('./images/logo.png')} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
});

export default Logo;
