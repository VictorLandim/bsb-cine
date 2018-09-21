import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const ScreenContainer = ({ children }) => <View style={styles.container}>{children}</View>;

ScreenContainer.propTypes = {
    children: PropTypes.any
};

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$black'
    }
});

export default ScreenContainer;
