//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';

// create a component
class Settings extends Component {

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
    }

    componentDidMount() {
        Alert.alert(
            'Njaka App - Alpha version 1.0.0',
            'This is an alpha version of the app. This feature is currently unavailable',
            [
              {text: 'OK', onPress: () => Actions.home()},
            ]
          );
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Settings</Text>
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
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Settings;
