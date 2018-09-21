import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ScreenContainer } from '../components/ScreenContainer';
import { Logo } from '../components/Logo';
import { getOptions } from '../logic/movie';
import { buttonTheme } from '../config/theme';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    onPress = () => {
        this.setState(
            {
                loading: true
            },
            async () => {
                const options = await getOptions();
                const { navigate } = this.props.navigation;
                this.setState(
                    {
                        loading: false
                    },
                    () => navigate('SearchScreen', { options })
                );
            }
        );
    };

    render() {
        return (
            <ScreenContainer>
                <View style={styles.container}>
                    <Logo />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Busque pelos melhores filmes e cinemas perto de você</Text>
                    </View>
                    <Button
                        loading={this.state.loading}
                        theme={buttonTheme}
                        style={styles.button}
                        onPress={this.onPress}
                        mode="contained"
                    >
                        Escolher
                    </Button>
                </View>
            </ScreenContainer>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        width: '80%',
        marginTop: 30,
        marginBottom: 75
    },
    text: {
        color: '#fff',
        fontSize: 17,
        textAlign: 'center',
        flexWrap: 'wrap'
    },
    button: {
        paddingHorizontal: 12,
        paddingVertical: 5
    }
});

export default HomeScreen;
