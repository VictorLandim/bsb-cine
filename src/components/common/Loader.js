import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loader = props => {
    const { size } = props;
    return (
        <View style={styles.loaderStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const styles = {
    loaderStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Loader };
