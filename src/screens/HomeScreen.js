import React from 'react';
import { View, Text, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { ScreenContainer } from '../components/ScreenContainer';
import { Logo } from '../components/Logo';
import { buttonTheme } from '../config/theme';
import { fetchOptions } from '../actions';

class HomeScreen extends React.Component {
    static propTypes = {
        isLoading: PropTypes.bool,
        optionsError: PropTypes.object,
        dispatch: PropTypes.func,
        navigation: PropTypes.object,
    };

    componentWillReceiveProps(nextProps) {
        const { isLoading, navigation } = this.props;
        if (isLoading && !nextProps.isLoading) {
            if (nextProps.optionsError) {
                Alert.alert(nextProps.optionsError);
            } else {
                navigation.navigate('SearchScreen');
            }
        }
    }

    onPress = () => {
        const { isLoading, dispatch } = this.props;
        if (!isLoading) {
            dispatch(fetchOptions());
        }
    };

    render() {
        const { isLoading } = this.props;
        return (
            <ScreenContainer>
                <LinearGradient colors={['#263238', '#37474f']} style={styles.container}>
                    <Logo />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            {'Busque pelos melhores filmes e cinemas perto de você'}
                        </Text>
                    </View>
                    <Button
                        loading={isLoading}
                        theme={buttonTheme}
                        style={styles.button}
                        onPress={this.onPress}
                        mode="contained"
                    >
                        {isLoading ? 'Buscando' : 'Escolher'}
                    </Button>
                </LinearGradient>
            </ScreenContainer>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        width: '80%',
        marginTop: 40,
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

const mapStateToProps = state => ({
    isLoading: state.isLoadingOptions,
    optionsError: state.optionsError,
});

export default connect(mapStateToProps)(HomeScreen);
