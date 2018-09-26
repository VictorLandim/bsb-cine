import React from 'react';
import {
    View, Text, StyleSheet, Linking, Alert,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import PropTypes from 'prop-types';
import {
    BLACK, LIGHT_GRAY, WHITE, BLUE,
} from '../../config/colors';
import TimeBlock from './TimeBlock';
import { SlideView, ScaleView, SlideRightView } from '../Animations';

class ScheduleCard extends React.Component {
    openMaps = (name) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${name}`;
        Linking.canOpenURL(url).then((supported) => {
            if (supported) {
                Linking.openURL(url);
            } else {
                Alert.alert('Endereço indisponível.');
            }
        });
    };

    renderContent = () => {
        const { schedule } = this.props;

        return (
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{schedule.name}</Text>
                    <IconButton
                        icon="directions"
                        color={BLUE}
                        size={28}
                        onPress={() => this.openMaps(schedule.name)}
                    />
                </View>
                {schedule.blocks.map(e => (
                    <View
                        key={`${e.title}-${JSON.stringify(e.horarios)}`}
                        style={styles.blockContainer}
                    >
                        <Text style={styles.roomTitle}>{`Sala: ${e.title}`}</Text>
                        <View style={styles.timeBlocksContainer}>
                            {e.horarios.map(f => (
                                <TimeBlock key={f.value} dub={f.dub} value={f.value} />
                            ))}
                        </View>
                    </View>
                ))}
            </View>
        );
    };

    render() {
        const { animation } = this.props;

        if (animation === 'scale') {
            return (
                <ScaleView duration={350} style={styles.container}>
                    {this.renderContent()}
                </ScaleView>
            );
        }

        if (animation === 'slide') {
            return (
                <SlideView duration={350} style={styles.container}>
                    {this.renderContent()}
                </SlideView>
            );
        }

        if (animation === 'slideRight') {
            return (
                <SlideRightView duration={350} style={styles.container}>
                    {this.renderContent()}
                </SlideRightView>
            );
        }

        return <View style={styles.container}>{this.renderContent()}</View>;
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 0,
        width: '95%',
        marginVertical: 10,
        marginRight: 'auto',
        marginLeft: 'auto',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: LIGHT_GRAY,
        backgroundColor: BLACK,
        elevation: 5,
    },
    blockContainer: {
        marginVertical: 10,
    },
    timeBlocksContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginVertical: 5,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: WHITE,
    },
    title: {
        color: WHITE,
        fontSize: 17,
    },
    roomTitle: {
        color: LIGHT_GRAY,
        fontSize: 14,
        paddingLeft: 5,
    },
});

ScheduleCard.propTypes = {
    schedule: PropTypes.object,
    animation: PropTypes.oneOf(['slide', 'scale']),
};

export default ScheduleCard;
