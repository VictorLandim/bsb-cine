import React from 'react';
import { View, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { BLACK } from '../../config/colors';

const ListSeparator = () => <View style={styles.separator} />;

const styles = EStyleSheet.create({
    separator: {
        backgroundColor: BLACK,
        width: 1,
        alignSelf: 'center',
        height: StyleSheet.hairlineWidth
    }
});

export default ListSeparator;
