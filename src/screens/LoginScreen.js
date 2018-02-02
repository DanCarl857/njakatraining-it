//import liraries
import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity, 
    TouchableWithoutFeedback,
    BackHandler,
    AsyncStorage    
} from 'react-native';

// import custom libraries and components
import { TextField } from 'react-native-material-textfield';
import Button from '../components/common/Button';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import * as firebase from "firebase";
import Spinner from 'react-native-loading-spinner-overlay';

// create a component
class LoginScreen extends Component {

    state = {
        email: '',
        password: '',
        error: false, 
        loggedIn: false,
        visible: false,
        emailErr: false
    };

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
    }

    login() {
        this.setState({ visible: !this.state.visible });
        const { email, password } = this.state;

        if(email.search('@') == -1) {
            this.setState({ emailErr: true, visible: false });
            return;
        }

        firebase.auth().signInWithEmailAndPassword(email, password).then(data => {
            this.setState({ visible: false });
            // Setup local creds and navigate to home...
            Actions.home();

        }).catch(err => {
            this.setState({ visible: false });
            // Handle error here...
            this.setState({
                email: '',
                password: '',
                error: true
            })
        });
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
                        label='Email'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email, error: false, emailErr: false })}
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
                        onChangeText={(password) => this.setState({ password, error: false, emailErr: false })}
                    />
                    {
                        this.state.error ? 
                        <Text style={styles.errStyle}>Wrong credentials. Please verify and try again</Text>
                        : <Text></Text>
                    }
                    {
                        this.state.emailErr ? 
                        <Text style={styles.errStyle}>Invalid Email.</Text>
                        : <Text></Text>
                    }
                    <Button text="Login"
                        onPress={() => this.login()}>
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
                <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
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
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    errStyle: {
        fontWeight: '700',
        color: '#F6921E', 
        fontSize: 12,
        textAlign: 'center'
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
