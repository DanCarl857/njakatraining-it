//import liraries
import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    ScrollView,
    TouchableOpacity, 
    TouchableWithoutFeedback, 
    AsyncStorage,
    BackHandler
} from 'react-native';

// import custom libraries and components
import { TextField } from 'react-native-material-textfield';
import Button from '../components/common/Button';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import * as firebase from "firebase";
import Spinner from 'react-native-loading-spinner-overlay';

// create a component
class ParentSignupScreen extends Component {

    // the worst error checking I ever did...
    state = {
        name: '',
        username: '',
        email: '',
        password: '',
        error: false,
        firebaseErr: false,
        visible: false,
        passwordLenErr: false,
        phoneErr: false,
        emailErr: false
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
    }

    componentDidMount() {
        AsyncStorage.getItem('njakaParentData').then(value => {
            if(JSON.parse(value) == null) {
                var data = {
                    loggedIn: false,
                    name: '',
                    username: '',
                    phone: '',
                    email: '', 
                    password: ''
                }
                AsyncStorage.setItem('njakaParentData', JSON.stringify(data));
            }
        });
    }

    signup() {
        this.setState({ visible: true });
        const { email, password, username, phone, name } = this.state;

        if(name == '' || email == '' || password == '' || username == '' || phone == '') {
            this.setState({ error: true, visible: false });
            return;
        }

        if(password.length < 6) {
            this.setState({ passwordLenErr: true, visible: false });
            return;
        }

        if(username.length < 4 && username.length > 10) {
            this.setState({ usernameErr: true, visible: false });
            return;
        }

        if(phone.length != 9 || phone.charAt(0) != '6') {
            this.setState({ phoneErr: true, visible: false });
            return;
        }

        if(email.search('@') == -1) {
            this.setState({ emailErr: true, visible: false });
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password).then(data => {
            this.setState({ visible: false });
            // Set local creds and navigate to home...
            AsyncStorage.getItem('njakaParentData').then(value => {
                if(JSON.parse(value) != null) {
                    var data = {
                        name: name,
                        email: email,
                        password: password, 
                        username: username,
                        phone: phone,
                        loggedIn: true
                    }
                    AsyncStorage.setItem('njakaParentData', JSON.stringify(data));
                    
                    // Navigate to home...
                    Actions.home();
                }
            });
        }).catch(err => {
            this.setState({ visible: false });
            // Handle errors here...
            this.setState({ firebaseErr: true, name: '', email: '', password: '', username: '', phone: '' });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.SignupContainer}>
                    <TextField
                        textColor='#fff'
                        tintColor='#fff'
                        baseColor='#DEDEDE'
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType='next'
                        label='Name'
                        value={this.state.name}
                        onChangeText={(name) => this.setState({ name,  })}
                    />
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
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType='next'
                        label='Email'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                    />
                    <TextField
                        textColor='#fff'
                        tintColor='#fff'
                        baseColor='#DEDEDE'
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType='next'
                        label='Phone'
                        value={this.state.phone}
                        onChangeText={(phone) => this.setState({ phone })}
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
                    {
                        this.state.error ? 
                        <Text style={styles.errStyle}>Please make sure all the fields are properly filled...</Text>
                        : <Text></Text>
                    }
                    {
                        this.state.firebaseErr ? 
                        <Text style={styles.errStyle}>There was an error creating your account. Please check your internet connection and try again.</Text>
                        : <Text></Text>
                    }
                    {
                        this.state.passwordLenErr ? 
                        <Text style={styles.errStyle}>Password should be atlease 6 characters long</Text>
                        : <Text></Text>
                    }
                    {
                        this.state.phoneErr ? 
                        <Text style={styles.errStyle}>Please verify your phone number</Text>
                        : <Text></Text>
                    }
                    {
                        this.state.emailErr ? 
                        <Text style={styles.errStyle}>Invalid Email</Text>
                        : <Text></Text>
                    }
                    <Button text="Register"
                        onPress={() => this.signup()}>
                    </Button>
                    <TouchableOpacity onPress={() => Actions.login()}>
                        <Text style={styles.textStyle}>Already have an account? Login</Text>
                    </TouchableOpacity>
                    <View style={styles.footerContainer}>
                        <Image
                            style={styles.footerImageStyle}
                            source={require('./../assets/caricature.png')}
                        />
                    </View>
                </View>
                </ScrollView>
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
    SignupContainer: {
        flex: 4,
        justifyContent: 'center',
        marginLeft: 25,
        marginRight: 25
    },
    footerImageStyle: {
        marginTop: 15,
        marginBottom: 30
    },
    backButtonStyle: {
        width: 18,
        height: 18,
        marginLeft: 20,
        marginTop: 20
    },
    errStyle: {
        fontWeight: '700',
        color: '#F6921E', 
        fontSize: 12,
        textAlign: 'center'
    },
    imageStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 190,
        height: 60
    },
    textStyle: {
        color: '#fff', 
        fontWeight: '400',
        fontSize: 12,
        textAlign: 'center',
    }
});

//make this component available to the app
export default ParentSignupScreen;
