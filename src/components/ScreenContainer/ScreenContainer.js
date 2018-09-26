import React from 'react';
import PropTypes from 'prop-types';
import {
    View, StyleSheet, StatusBar, Platform,
} from 'react-native';
import Expo from 'expo';

const ScreenContainer = ({ children, backgroundColor }) => (
    <View style={styles(backgroundColor).container}>
        {/* <StatusBar backgroundColor="transparent" translucent /> */}
        {children}
    </View>
);

const styles = backgroundColor => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor,
        // paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,
    },
});

ScreenContainer.propTypes = {
    children: PropTypes.any,
    backgroundColor: PropTypes.string,
};

export default ScreenContainer;
