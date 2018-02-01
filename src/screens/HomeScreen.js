import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    BackHandler,
    Image,
    TextInput,
    AsyncStorage,
    TouchableWithoutFeedback
} from 'react-native';
import { Card } from './../components/common/Card';
import { Actions } from 'react-native-router-flux';

class HomeScreen extends Component {

    state = {
        search: '',
        loggedIn: false,
        visible: false
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            Alert.alert(
              'Exit App',
              'You are about to exit the application, are you sure?',
              [
                {text: 'OK', onPress: () => BackHandler.exitApp()},
              ]
            );
          });
    }

    componentDidMount() {
        AsyncStorage.getItem('njakaUserData').then(value => {
            if(JSON.parse(value) == null) {
                var data = {
                    loggedIn: false
                }
                AsyncStorage.setItem('njakaUserData', JSON.stringify(data));
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: true });
            }
        });
    }

    navigateToDetails() {
        // if(this.state.loggedIn) {
        //     Actions.lesson();
        // } else {
        //     Actions.login();
        // }
        Actions.login();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.sectionStyle}>
                    <Image
                        style={styles.iconStyle}
                        source={require('./../assets/search.png')}
                    />
                    <TextInput
                        style={{flex: 1}}
                        placeholder="Search for Lessons..."
                        autoCapitalize='none'
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        value={this.state.search}
                        onChangeText={(search) => this.setState({ search })}
                    />
                </View>
                <View style={styles.lessonContainer}>
                    <View style={styles.rowStyle}>
                        <Card>
                            <TouchableWithoutFeedback onPress={() => this.navigateToDetails()}>
                                <View>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require('./../assets/work.jpg')}
                                    />
                                    <View style={styles.lessonHeaderContainer}>
                                        <Text numberOfLines={1} style={styles.lessonTextStyle}>Intro to Algorithms</Text>
                                        <Text style={styles.descriptionStyle}>Introduction to algorithms. 
        Basic stuff to learn</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </Card>
                        <Card>
                            <TouchableWithoutFeedback onPress={() => this.navigateToDetails()}>
                                <View>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require('./../assets/work.jpg')}
                                    />
                                    <View style={styles.lessonHeaderContainer}>
                                        <Text numberOfLines={1} style={styles.lessonTextStyle}>Basic Algorithms</Text>
                                        <Text style={styles.descriptionStyle}>Introduction to algorithms. 
        Basic stuff to learn</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </Card>
                    </View>

                    <View style={styles.rowStyle}>
                        <Card>
                            <TouchableWithoutFeedback onPress={() => this.navigateToDetails()}>
                                <View>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require('./../assets/work.jpg')}
                                    />
                                    <View style={styles.lessonHeaderContainer}>
                                        <Text numberOfLines={1} style={styles.lessonTextStyle}>Game Algorithms</Text>
                                        <Text style={styles.descriptionStyle}>Introduction to algorithms. 
        Basic stuff to learn</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </Card>
                        <Card>
                            <TouchableWithoutFeedback onPress={() => this.navigateToDetails()}>
                                <View>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require('./../assets/work.jpg')}
                                    />
                                    <View style={styles.lessonHeaderContainer}>
                                        <Text numberOfLines={1} style={styles.lessonTextStyle}>Graph Algorithms</Text>
                                        <Text style={styles.descriptionStyle}>Introduction to algorithms. 
        Basic stuff to learn</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </Card>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    lessonContainer: {
        flex: 1,
        alignItems: 'center'
    },
    lessonHeaderContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    lessonTextStyle: {
        marginTop: 10,
        marginBottom: 5,
        fontWeight: '200',
        color: '#252525',
        fontSize: 15
    },
    descriptionStyle: {
        fontSize: 12,
        fontWeight: '100',
        paddingHorizontal: 5,
        marginBottom: 10,
        textAlign: 'center'
    },
    iconStyle: {
        padding: 10,
        margin: 10,
        height: 24,
        width: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#D1D1D1',
        height: 40,
        borderRadius: 5 ,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 5,
        marginTop: 15,
        marginBottom: 15
    },
    rowStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
        // flex: 1,
    },
    imageStyle: {
        height: 90,
        width: null
    }
});

export default HomeScreen;