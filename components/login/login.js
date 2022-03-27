import React from 'react';
import { StyleSheet, View, Text, Alert, KeyboardAvoidingView, StatusBar, Dimensions, TextInput, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import LinearGradientText from './utils/LinearGradientText';
import SelectDropDown from './utils/SelectDropDown';
import CustomButton from './utils/CustomButton';
import BackButton from '../launch_screen/utils/BackButton';
import { Dropdown } from 'react-native-material-dropdown';
import { RoleData } from '../../constants/constants';

const getHeightFromPercentage = (percentage) => {
    return (percentage / 100) * Dimensions.get('window').height
}

const statusBarHeight = Platform.OS === 'ios' ? getHeightFromPercentage(6.50) : StatusBar.currentHeight + getHeightFromPercentage(3);

const Login = props => {

    const navigateToRegister = () => {
        if (props.navigation.getState().routes.length === 3) {
            props.navigation.replace("Register")
        }
        else {
            props.navigation.pop(props.navigation.getState().routes.length - 3)
            props.navigation.replace("Register")
        }
    }

    const BackButtonHandler = () => {
        props.navigation.goBack()
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={{ flex: 1 }}>
                <View style={styles.buttonContainer}>
                    <BackButton onPress={BackButtonHandler} />
                </View>
                <View style={styles.screen} >
                    <LinearGradientText style={styles.text} colors={['#1DDE7D', '#72DFC5']}>
                        Login
                    </LinearGradientText>
                    <Text style={{ paddingVertical: 3, fontFamily: 'open-sans-bold', color: '#C0C0C0', fontSize: 22 }}>Please sign in to continue</Text>
                    <View style={styles.inputContainer}>
                        <View style={{
                            marginVertical: 0,
                            marginHorizontal: 3
                        }} >
                            <Dropdown
                                label='Select Role'
                                data={RoleData}
                            />
                        </View>
                        <View style={{ marginVertical: 6 }}><TextInput style={styles.textInput} placeholder='Username' placeholderTextColor="grey" /></View>
                        <View style={{ marginVertical: 6 }}><TextInput style={styles.textInput} secureTextEntry={true} placeholder='Password' placeholderTextColor="grey" /></View>
                    </View>
                    <CustomButton style={styles.button} text="LOGIN" />
                    <View style={styles.footer}>
                        <Text style={{ fontFamily: 'open-sans-bold', color: '#C0C0C0', fontSize: 14 }}>Not yet registered? </Text>
                        <TouchableOpacity onPress={navigateToRegister}>
                            <View>
                                <LinearGradientText style={{ fontFamily: 'open-sans-bold', fontSize: 14 }} colors={['#1DDE7D', '#72DFC5']}>
                                    Register here
                                </LinearGradientText>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '35%'
    },
    textInput: {
        fontFamily: 'open-sans',
        borderColor: '#828282',
        borderWidth: 0.7,
        borderRadius: 6,
        padding: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        height: 45
    },
    text: {
        fontSize: 40,
        fontFamily: 'open-sans-bold',
        paddingVertical: 3
    },
    screen: {
        flex: 1,
        padding: 35,
        marginVertical: 130
    },
    inputContainer: {
        marginTop: 40, //40
    },
    button: {
        width: '27%',
        height: '12%',
        marginLeft: '72%',
        marginTop: 15
    },
    buttonContainer: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: "5%",
        alignSelf: "flex-start",
        position: 'absolute',
        top: statusBarHeight
    }
});

export default Login;