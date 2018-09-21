import React from 'react';
import { View, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Logo = () => (
    <View style={styles.container}>
        <Image resizeMode="contain" style={styles.image} source={require('./images/logo.png')} />
    </View>
);

const styles = EStyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 200,
        height: 200
    }
});

export default Logo;
