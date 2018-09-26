import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

class ScaleView extends React.Component {
    componentWillMount() {
        this.opacity = new Animated.Value(0);

        const { duration } = this.props;

        Animated.timing(this.opacity, {
            delay: 5,
            toValue: 1,
            duration,
            useNativeDriver: true,
        }).start();
    }

    render() {
        const { opacity } = this;
        const { style, children } = this.props;

        const viewStyle = [
            style,
            { opacity },
            {
                transform: [
                    {
                        scale: opacity,
                    },
                ],
            },
        ];
        return <Animated.View style={viewStyle}>{children}</Animated.View>;
    }
}

ScaleView.propTypes = {
    duration: PropTypes.number,
    children: PropTypes.any,
    style: PropTypes.any,
};

export default ScaleView;
