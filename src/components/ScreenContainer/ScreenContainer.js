import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const ScreenContainer = ({ children, backgroundColor }) => (
    <View style={styles(backgroundColor).container}>{children}</View>
);

const styles = backgroundColor => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor,
    },
});

ScreenContainer.propTypes = {
    children: PropTypes.any,
};

export default ScreenContainer;
