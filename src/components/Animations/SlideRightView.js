import React from 'react';
import { Animated, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

class SlideRightView extends React.Component {
    componentWillMount() {
        this.translateX = new Animated.Value(Dimensions.get('window').width);

        const { duration } = this.props;

        Animated.timing(this.translateX, {
            delay: 5,
            toValue: 0,
            duration,
            useNativeDriver: true,
        }).start();
    }

    render() {
        const { translateX } = this;
        const { style, children } = this.props;

        const viewStyle = [
            style,
            {
                transform: [
                    {
                        translateX,
                    },
                ],
            },
        ];
        return <Animated.View style={viewStyle}>{children}</Animated.View>;
    }
}

SlideRightView.propTypes = {
    duration: PropTypes.number,
    children: PropTypes.any,
    style: PropTypes.any,
};

export default SlideRightView;
