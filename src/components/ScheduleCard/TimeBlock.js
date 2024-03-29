import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import {
    GREEN, CYAN, BLACK, LIGHT_GRAY,
} from '../../config/colors';

const TimeBlock = ({ value, dub }) => (
    <View style={styles.container}>
        <Text style={styles.value}>{value}</Text>
        <Text style={[styles.caption, dub ? styles.dub : styles.sub]}>{dub ? 'DUB' : 'LEG'}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        margin: 5,
        backgroundColor: LIGHT_GRAY,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        borderRadius: 3,
    },
    value: {
        fontSize: 12,
        padding: 5,
    },
    caption: {
        fontSize: 12,
        padding: 5,
        color: BLACK,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
    },
    dub: {
        backgroundColor: CYAN,
    },
    sub: {
        backgroundColor: GREEN,
    },
});

TimeBlock.propTypes = {
    value: PropTypes.string.isRequired,
    dub: PropTypes.bool.isRequired,
};

export default TimeBlock;
