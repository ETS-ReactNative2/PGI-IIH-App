import React, { useState } from 'react';
import LinearGradientText from './utils/LinearGradientText';
import { StyleSheet, View, Text, Alert, TextInput, TouchableWithoutFeedback, StatusBar, Dimensions, Keyboard, KeyboardAvoidingView, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import CustomButton from './utils/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";
import { fetchRegister_1 } from '../../store/actions/user';
import BackButton from '../launch_screen/utils/BackButton';

// Add scrollview to the entire page
{/*<KeyboardAwareScrollView showsVerticalScrollIndicator={false} extraHeight={0} keyboardShouldPersistTaps={'always'}>*/ }

// Issues:
// in iOS, Keyboard avoiding view component bounces back to top

const getHeightFromPercentage = (percentage) => {
    return (percentage / 100) * Dimensions.get('window').height
}

const statusBarHeight = Platform.OS === 'ios' ? getHeightFromPercentage(6.50) : StatusBar.currentHeight + getHeightFromPercentage(3);

const useTogglePasswordVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');

    const handlePasswordVisibility = () => {
        if (rightIcon === 'eye') {
            setRightIcon('eye-off');
            setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-off') {
            setRightIcon('eye');
            setPasswordVisibility(!passwordVisibility);
        }
    };

    return {
        passwordVisibility,
        rightIcon,
        handlePasswordVisibility
    };
};

const Register_1 = props => {

    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [phoneno, setPhoneno] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();

    const navigateToLogin = () => {
        props.navigation.replace("Login")
    }

    const NextButtonHandler = () => {

        const trimmedName = name.trim();
        const trimmedUsername = username.trim();
        const trimmedPhoneno = phoneno.trim();

        const usernameregex = /\s/
        const phonenoregex = /^[1-9]{1}[0-9]{9}$/
        const passwordregex = /^(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$$/

        if (trimmedName === '') {
            Alert.alert('Invalid Name', 'Please enter your name...', [{ text: 'Okay!', style: 'default' }])
        }
        else if (trimmedUsername === '' || usernameregex.test(trimmedUsername)) {
            //any kind of whitespace
            Alert.alert('Invalid Username', 'Username must not contain spaces...', [{ text: 'Okay!', style: 'default' }])
        }
        else if (trimmedPhoneno === '' || !phonenoregex.test(trimmedPhoneno)) {
            Alert.alert('Invalid Phone Number', 'Enter 10 digit mobile number...', [{ text: 'Okay!', style: 'default' }])
        }
        else if (password.trim() === '') {
            Alert.alert('Enter Password', 'Please Follow the password strength creteria...\n\n• The password length must be greater than or equal to 8\n• The password must contain one or more uppercase characters\n• The password must contain one or more lowercase characters\n• The password must contain one or more numeric values\n• The password must contain one or more special characters', [{ text: 'Okay!', style: 'default' }])
        }
        else if (!passwordregex.test(password)) {
            Alert.alert('Weak Password', 'Please Follow the password strength creteria...\n\n• The password length must be greater than or equal to 8\n• The password must contain one or more uppercase characters\n• The password must contain one or more lowercase characters\n• The password must contain one or more numeric values\n• The password must contain one or more special characters', [{ text: 'Okay!', style: 'default' }])
        }
        else {
            dispatch(fetchRegister_1(trimmedName, trimmedUsername, trimmedPhoneno, password))
            props.navigation.navigate({
                name: "Register_2"
            })
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
                <View style={styles.screen}>
                    <LinearGradientText style={styles.text} colors={['#1DDE7D', '#72DFC5']}>
                        Register (1/3)
                    </LinearGradientText>
                    <Text style={{ paddingVertical: 3, fontFamily: 'open-sans-bold', color: '#C0C0C0', fontSize: 22 }}>Fill in the details to get started</Text>
                    <View style={styles.inputContainer}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={3}>
                                <View style={{ marginVertical: 6 }}><TextInput style={styles.textInput} value={name} onChangeText={newText => setName(newText)} placeholder='Name' placeholderTextColor="grey" /></View>
                                <View style={{ marginVertical: 6 }}><TextInput style={styles.textInput} value={username} onChangeText={newText => setUsername(newText)} placeholder='Username' placeholderTextColor="grey" /></View>
                                <View style={{ marginVertical: 6 }}><TextInput style={styles.textInput} value={phoneno} onChangeText={newText => setPhoneno(newText)} placeholder='Phone Number' placeholderTextColor="grey" keyboardType='number-pad' /></View>
                                <View style={{
                                    flex: 1,
                                    marginVertical: 6,
                                    width: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <TextInput
                                        style={styles.textInput}
                                        value={password}
                                        onChangeText={newText => setPassword(newText)}
                                        secureTextEntry={passwordVisibility}
                                        placeholder='Password'
                                        placeholderTextColor="grey" />
                                    <Pressable style={{ paddingLeft: 5 }} onPress={handlePasswordVisibility}>
                                        <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
                                    </Pressable>
                                </View>

                                {/* <View style={{ marginVertical: 6 }}><TextInput style={styles.textInput} secureTextEntry={true} placeholder='Password' placeholderTextColor="grey" /></View> */}
                            </KeyboardAvoidingView>
                        </ScrollView>
                        {/* <KeyboardAwareScrollView showsVerticalScrollIndicator={false} extraHeight={0} keyboardShouldPersistTaps={'always'}>
                            <View style={{ marginVertical: 6 }}><TextInput style={styles.textInput} placeholder='Name' placeholderTextColor="grey" /></View>
                            <View style={{ marginVertical: 6 }}><TextInput style={styles.textInput} placeholder='Username' placeholderTextColor="grey" /></View>
                            <View style={{ marginVertical: 6 }}><TextInput style={styles.textInput} placeholder='Phone Number' placeholderTextColor="grey" keyboardType='number-pad' /></View>
                            <View style={{ marginVertical: 6 }}><TextInput style={styles.textInput} secureTextEntry={true} placeholder='Password' placeholderTextColor="grey" /></View>
                            <View style={{ marginVertical: 6 }}><TextInput style={styles.textInput} secureTextEntry={true} placeholder='Password' placeholderTextColor="grey" /></View>
                        </KeyboardAwareScrollView> */}
                    </View>
                    <CustomButton style={styles.button} text="NEXT" onPress={NextButtonHandler} />
                    <View style={styles.footer}>
                        <Text style={{ fontFamily: 'open-sans-bold', color: '#C0C0C0', fontSize: 14 }}>Already registered?</Text>
                        <TouchableOpacity onPress={navigateToLogin}>
                            <View>
                                <LinearGradientText style={{ fontFamily: 'open-sans-bold', fontSize: 14 }} colors={['#1DDE7D', '#72DFC5']}> Login here</LinearGradientText>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback >
    );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%'
    },
    screen: {
        flex: 1,
        padding: 35,
        marginVertical: 130
    },
    text: {
        fontSize: 40,
        fontFamily: 'open-sans-bold',
        paddingVertical: 3
    },
    textInput: {
        fontFamily: 'open-sans',
        borderColor: '#828282',
        borderWidth: 0.7,
        borderRadius: 6,
        padding: 5,
        paddingHorizontal: 10,
        fontSize: 15,

        height: 45,
        flexGrow: 2
    },
    inputContainer: {
        marginTop: 40,
        flexGrow: 1
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
    },
});

export default Register_1;