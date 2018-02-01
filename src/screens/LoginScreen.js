//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

// import custom libraries and components
import { TextField } from 'react-native-material-textfield';
import Button from '../components/common/Button';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';

// create a component
class LoginScreen extends Component {

    state = {
        username: '',
        password: '',
        secureTextEntry: true
    };

    // renderPasswordAccessory() {

    //     const { secureTextEntry } = this.state;
    //     const name = secureTextEntry ? 'visibility' : 'visibility-off';

    //     return (
    //         <MaterialIcon
    //             size={24}
    //             name={name}
    //             color={TextField.defaultProps.baseColor}
    //             onPress={this.onAccessoryPress}
    //             suppressHighlighting
    //         />
    //     )
    // }

    onAccessoryPress() {
        this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }));
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconStyleContainer}>
                    <TouchableWithoutFeedback onPress={() => Actions.home()}>
                        <View>
                            <Image
                                style={styles.backButtonStyle}
                                source={require('./../assets/back_arrow.png')}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.loginContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.imageStyle}
                            source={require('./../assets/main_logo.png')}
                        />
                    </View>
                    <TextField
                        textColor='#fff'
                        tintColor='#fff'
                        baseColor='#DEDEDE'
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType='next'
                        label='Username'
                        value={this.state.username}
                        onChangeText={(username) => this.setState({ username })}
                    />
                    <TextField
                        textColor='#fff'
                        tintColor='#fff'
                        baseColor='#DEDEDE'
                        secureTextEntry
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType='next'
                        label='Password'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                    <Button text="Login"
                        onPress={() => console.warn('test works!')}>
                    </Button>
                    <TouchableOpacity onPress={() => Actions.parent_signup()}>
                        <Text style={styles.textStyle}>Don't have an account? Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerContainer}>
                    <Image
                        style={styles.footerImageStyle}
                        source={require('./../assets/caricature.png')}
                    />
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#555555',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    iconStyleContainer: {
        flex: 1
    },
    loginContainer: {
        flex: 3,
        justifyContent: 'center',
        marginLeft: 25,
        marginRight: 25
    },
    footerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    backButtonStyle: {
        width: 18,
        height: 18,
        marginLeft: 20,
        marginTop: 20
    },
    imageStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color: '#fff', 
        fontWeight: '400',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 15
    }
});

//make this component available to the app
export default LoginScreen;
