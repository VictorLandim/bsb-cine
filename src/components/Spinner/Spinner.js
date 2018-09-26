import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

const Spinner = ({ size, color }) => (
    <View style={styles.spinner}>
        <ActivityIndicator size={size} color={color} />
    </View>
);

const styles = {
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

Spinner.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
};

Spinner.defaultProps = {
    size: 'large',
    color: 'gray',
};

export default Spinner;
