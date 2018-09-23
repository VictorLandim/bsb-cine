import React from 'react';
import { View, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { WHITE } from '../../config/colors';

const ListSeparator = ({ color }) => <View style={styles(color).separator} />;

const styles = color => EStyleSheet.create({
    separator: {
        width: '100%',
        alignSelf: 'flex-start',
        marginLeft: 0,
        height: StyleSheet.hairlineWidth,
        backgroundColor: `${WHITE}66`,
    },
});

export default ListSeparator;
