import React from 'react';
import {
    View, Text, StyleSheet, StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo';
import { ScreenContainer } from '../components/ScreenContainer';
import { Logo } from '../components/Logo';
import { buttonTheme } from '../config/theme';

class HomeScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object,
    };

    onPress = () => {
        const { navigation } = this.props;
        navigation.navigate('MovieListScreen');
    };

    render() {
        return (
            <ScreenContainer>
                {/* <StatusBar backgroundColor="transparent" translucent /> */}
                <LinearGradient
                    colors={['#263238', '#37474f']}
                    start={[0.1, 0]}
                    style={styles.container}
                >
                    <Logo />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            {'Busque pelos melhores filmes e cinemas perto de você'}
                        </Text>
                    </View>
                    <Button
                        theme={buttonTheme}
                        style={styles.button}
                        onPress={this.onPress}
                        mode="contained"
                    >
                        {'Ver programação de hoje'}
                    </Button>
                </LinearGradient>
            </ScreenContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        width: '80%',
        marginTop: 60,
        marginBottom: 75,
    },
    text: {
        color: '#fff',
        fontSize: 17,
        textAlign: 'center',
        flexWrap: 'wrap',
    },
    button: {
        paddingHorizontal: 12,
        paddingVertical: 5,
    },
});

export default HomeScreen;
