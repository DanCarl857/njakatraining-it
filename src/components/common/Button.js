//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
class Button extends Component {

    render() {
        const { onPress } = this.props;

        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.text}>{this.props.text.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        height: 50,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: '#555555',
        paddingHorizontal: 50,
        paddingVertical: 10,
        margin: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    }
});

//make this component available to the app
export default Button;
