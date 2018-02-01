//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// create a component
class Input extends Component {
    render() {
        const { iconName, secureTextEntry, placeholder, value, onChangeText } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.sectionStyle}>
                    <Image
                        style={styles.iconStyle}
                        source={require('../../assets/lock.png')}
                    />
                    <TextInput
                        style={{flex: 1}}
                        secureTextEntry={secureTextEntry}
                        placeholder={placeholder}
                        underlineColorAndroid="transparent"
                        value={value}
                        onChangeText={onChangeText}
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
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius: 25 ,
        margin: 10
    },
    iconStyle: {
        padding: 10,
        margin: 5,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

//make this component available to the app
export default Input;
