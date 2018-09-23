import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loader = (props) => {
    const { size, color } = props;
    return (
        <View style={styles.loaderStyle}>
            <ActivityIndicator size={size || 'large'} color={color} />
        </View>
    );
};

const styles = {
    loaderStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export { Loader };
