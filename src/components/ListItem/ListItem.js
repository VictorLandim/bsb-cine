import React from 'react';
import { TouchableNativeFeedback, View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Ionicons } from '@expo/vector-icons';
import { LIGHT_BLACK, WHITE } from '../../config/colors';

const ListItem = ({ item, iconColor, onPress }) => (
    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(iconColor)} onPress={onPress}>
        <View style={styles.container}>
            <Text style={styles.text}>{item.title}</Text>
            <Ionicons name="ios-arrow-forward" color={iconColor} size={28} />
        </View>
    </TouchableNativeFeedback>
);

const styles = EStyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingLeft: 10,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16,
        color: LIGHT_BLACK
    }
});

export default ListItem;
