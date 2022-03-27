import React, { useState } from 'react';
import LinearGradientText from './utils/LinearGradientText';
import { StyleSheet, View, Text, Alert, TextInput, TouchableWithoutFeedback, StatusBar, Dimensions, Keyboard, KeyboardAvoidingView, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import CustomButton from './utils/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";
import { fetchRegister_1, fetchRegister_2, fetchRegister_3 } from '../../store/actions/user';
import BackButton from '../launch_screen/utils/BackButton';
import { Dropdown } from 'react-native-material-dropdown';
import { dietaryPreferenceData, educationLevelData, genderData, HeightData, incomeLevelData, WeightData } from '../../constants/constants';

// Add scrollview to the entire page
{/*<KeyboardAwareScrollView showsVerticalScrollIndicator={false} extraHeight={0} keyboardShouldPersistTaps={'always'}>*/ }

// Issues:
// in iOS, Keyboard avoiding view component bounces back to top

const getHeightFromPercentage = (percentage) => {
    return (percentage / 100) * Dimensions.get('window').height
}

const statusBarHeight = Platform.OS === 'ios' ? getHeightFromPercentage(6.50) : StatusBar.currentHeight + getHeightFromPercentage(3);

// var state = null
// const tellState = () => {
//     console.log("keh ", state)
// }

const Register_3 = props => {

    const state = useSelector(state => state.user)

    const [gender, setGender] = useState('')
    const [education, setEducation] = useState('')
    const [income, setIncome] = useState('')
    const [dietaryPreference, setDietaryPreference] = useState('')

    const dispatch = useDispatch();

    const navigateToLogin = () => {
        props.navigation.replace("Login")
    }

    const FinishButtonHandler = () => {

        if (gender === '') {
            Alert.alert('Invalid Gender', 'Please enter your gender...', [{ text: 'Okay!', style: 'default' }])
        }
        else if (education === '') {
            Alert.alert('Invalid Education Level', 'Please enter your education level...', [{ text: 'Okay!', style: 'default' }])
        }
        else if (income === '') {
            Alert.alert('Invalid Income Level', 'Please enter your income level...', [{ text: 'Okay!', style: 'default' }])
        }
        else if (dietaryPreference === '') {
            Alert.alert('Invalid Dietary Preference', 'Please enter your dietary preference...', [{ text: 'Okay!', style: 'default' }])
        }
        else {
            dispatch(fetchRegister_3(gender, education, income, dietaryPreference));
            props.navigation.popToTop()
            props.navigation.replace("Main");
        }
    }

    async function fetchPosts() {
        console.log("Ankit");
        const response = await fetch('http://localhost:8081/test1', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(state),
        });
        // fetch('http://192.168.1.3:8081/test')
        //     .then((response) => response.json())
        // .then((responseJson) => {
        //     this.setState({ message: responseJson.message.data })
        // })
        // .catch((error) => {
        //     console.error(error);
        // });

        var temp = await response.json();
        console.log(temp)
        // var temp2 = []
        // for (var i = 0; i < temp[0].length; ++i) {
        //     if (temp[0][i].username === userName) {
        //         temp2.push(temp[0][i]);
        //     }
        // }
        // setPosts(temp2);
        // console.log(temp[0]);
    }

    async function registerationHandler() {
        FinishButtonHandler()
        const response = await fetchPosts()
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
                        Register (3/3)
                    </LinearGradientText>
                    <Text style={{ paddingVertical: 3, fontFamily: 'open-sans-bold', color: '#C0C0C0', fontSize: 22 }}>Fill in the details to get started</Text>
                    <View style={styles.inputContainer}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={3}>
                                <View style={{ marginVertical: 6 }}>
                                    <Dropdown
                                        label='Gender'
                                        data={genderData}
                                        containerStyle={styles.containerStyle}
                                        onChangeText={text => {
                                            setGender(text)
                                        }}
                                    />
                                </View>
                                <View style={{ marginVertical: 6 }}>
                                    <Dropdown
                                        label='Education Level'
                                        data={educationLevelData}
                                        containerStyle={styles.containerStyle}
                                        itemCount={5}
                                        onChangeText={text => {
                                            setEducation(text)
                                        }}
                                    />
                                </View>
                                <View style={{ marginVertical: 6 }}>
                                    <Dropdown
                                        label='Income Level'
                                        data={incomeLevelData}
                                        containerStyle={styles.containerStyle}
                                        onChangeText={text => {
                                            setIncome(text)
                                        }}
                                    />
                                </View>
                                <View style={{ marginVertical: 6 }}>
                                    <Dropdown
                                        label='Dietary Preference'
                                        data={dietaryPreferenceData}
                                        containerStyle={styles.containerStyle}
                                        onChangeText={text => {
                                            setDietaryPreference(text)
                                        }}
                                    />
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
                    <CustomButton style={styles.button} text="FINISH" onPress={registerationHandler} />
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
    containerStyle: {
        width: "100%",
        marginTop: -20,
        marginBottom: -5,
    }
});

export default Register_3;