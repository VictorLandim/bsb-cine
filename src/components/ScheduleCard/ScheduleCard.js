import React from 'react';
import {
    View, Text, StyleSheet, Linking, Alert,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import {
    BLACK, LIGHT_GRAY, DARK_GRAY, WHITE, BLUE,
} from '../../config/colors';
import TimeBlock from './TimeBlock';

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

    render() {
        const { schedule } = this.props;
        return (
            <View style={styles.container}>
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
                    <View style={styles.blockContainer}>
                        <Text style={styles.roomTitle}>{`Sala: ${e.title}`}</Text>
                        <View style={styles.timeBlocksContainer}>
                            {e.horarios.map(f => (
                                <TimeBlock dub={f.dub} value={f.value} />
                            ))}
                        </View>
                    </View>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 0,
        marginVertical: 10,
        width: '95%',
        marginRight: 'auto',
        marginLeft: 'auto',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: LIGHT_GRAY,
        backgroundColor: BLACK,
        elevation: 5,
    },
    blockContainer: {
        flexWrap: 'wrap',
        marginVertical: 10,
    },
    timeBlocksContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 10,
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
    },
});

export default ScheduleCard;
