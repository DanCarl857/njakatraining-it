//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

// create a component
class SplashScreen extends Component {

    componentDidMount() {
        setTimeout(() => {
            Actions.onboarding();
        }, 2500);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.imageStyle}
                    source={require('./../assets/main_logo.png')}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#555555',
    },
});

//make this component available to the app
export default SplashScreen;
