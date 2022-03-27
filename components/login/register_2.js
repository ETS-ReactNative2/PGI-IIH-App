import React, { useEffect, useState } from 'react';
import LinearGradientText from './utils/LinearGradientText';
import { StyleSheet, View, Picker, Text, Alert, TextInput, TouchableWithoutFeedback, StatusBar, Dimensions, Keyboard, KeyboardAvoidingView, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import CustomButton from './utils/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";
import { fetchRegister_1, fetchRegister_2 } from '../../store/actions/user';
import BackButton from '../launch_screen/utils/BackButton';
import DatePicker from 'react-native-datepicker';
import { Dropdown } from 'react-native-material-dropdown';
import { HeightData, WeightData } from '../../constants/constants';
import { getCurrentDate, feetToMeters, lbToKg, calculateBmi } from '../../constants/constants';

// Add scrollview to the entire page
//{/*<KeyboardAwareScrollView showsVerticalScrollIndicator={false} extraHeight={0} keyboardShouldPersistTaps={'always'}>*/ }

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

const Register_2 = props => {

    const [selectedValueWeight, setSelectedValueWeight] = useState("Kg"); // Lb
    const [selectedValueHeight, setSelectedValueHeight] = useState("feet"); // meters

    const [date, setDate] = useState('')
    const [curDate, setCurDate] = useState(() => getCurrentDate())
    const [heightFeet, setHeightFeet] = useState('')
    const [heightInches, setHeightInches] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [bmi, setBmi] = useState('')

    const dispatch = useDispatch();

    const navigateToLogin = () => {
        props.navigation.replace("Login")
    }

    const NextButtonHandler = () => {

        const dob = date;
        const heightInMeters = selectedValueHeight === 'meters' ? height : feetToMeters(heightFeet, heightInches)
        const weightInKg = selectedValueWeight === 'Kg' ? weight : lbToKg(weight)

        //console.log(heightInMeters, dob, weightInKg)

        const usernameregex = /\s/
        const phonenoregex = /^[1-9]{1}[0-9]{9}$/
        const passwordregex = /^(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$$/

        if (date === '') {
            Alert.alert('Invalid Date', 'Please enter your Date of birth...', [{ text: 'Okay!', style: 'default' }])
        }
        else if (weight === '') {
            Alert.alert('Invalid weight', 'Please enter your weight...', [{ text: 'Okay!', style: 'default' }])
        }
        else if (selectedValueHeight === 'meters' && height === '') {
            Alert.alert('Invalid height', 'Please enter your height...', [{ text: 'Okay!', style: 'default' }])
        }
        else if (selectedValueHeight === 'feet' && (heightFeet === '' || heightInches === '')) {
            Alert.alert('Invalid height', 'Please enter your height...', [{ text: 'Okay!', style: 'default' }])
        }
        else {
            dispatch(fetchRegister_2(dob, heightInMeters, weightInKg, bmi))
            props.navigation.navigate({
                name: "Register_3"
            })
        }
    }

    const BackButtonHandler = () => {
        props.navigation.goBack()
    }

    const checkFilledDetails = (weight, height, heightFeet, heightInches) => {
        if (weight === '') return false
        if (selectedValueHeight === 'feet') {
            if (heightFeet === '') return false
            if (heightInches === '') return false
        }
        else {
            if (height === '') return false
        }
        return true
    }

    const bmiHandler = (checkWeight = true, checkHeight = true, curWeight, weightUnit, heightUnit, height, heightF, heightI) => {

        const numberRegex = /^\d+$/
        const feetHeightRegex = /^\d*\.?\d*$/

        // Checking weight input
        if (checkWeight && !numberRegex.test(curWeight)) {
            Alert.alert('Invalid Weight', 'Please enter valid weight value...', [{ text: 'Okay!', style: 'default' }])
        }

        var finWeight = parseInt(curWeight)
        if (weightUnit === 'Lb') {
            finWeight = lbToKg(curWeight)
        }

        if (heightUnit === 'meters') {

            // Checking height input
            if (checkHeight && !feetHeightRegex.test(height)) {
                Alert.alert('Invalid Height 1', 'Please enter valid height value...', [{ text: 'Okay!', style: 'default' }])
            }
            var finHeight = parseFloat(height)
            const bmi = calculateBmi(finHeight, finWeight)
            // console.log("meters", bmi, finWeight, finHeight)
            setBmi(((Math.round(bmi * 100) / 100).toFixed(3)).toString())
        }
        else {
            // Checking height input
            if (checkHeight && !numberRegex.test(heightF) && !numberRegex.test(heightI) && parseInt(heightI) < 0 && parseInt(heightI) > 11) {
                Alert.alert('Invalid Height 2', 'Please enter valid height value...', [{ text: 'Okay!', style: 'default' }])
                // console.log(numberRegex.test(heightF), numberRegex.test(heightI), parseInt(heightI) >= 0, parseInt(heightI) <= 11)
            }
            var finHeight = feetToMeters(heightF, heightI)
            const bmi = calculateBmi(finHeight, finWeight)
            // console.log("Feet", bmi, finWeight, finHeight)
            setBmi(((Math.round(bmi * 100) / 100).toFixed(3)).toString())
        }
    }

    const heightHandler = (height) => {
        setHeight(height)

        if (checkFilledDetails(weight, height, heightFeet, heightInches)) {
            bmiHandler(true, true, weight, selectedValueWeight, selectedValueHeight, height, heightFeet, heightInches)
        }
        else {
            setBmi('')
        }
    }

    const feetHeightHandler = (heightF, unit) => {
        if (unit === 'feet') {
            setHeightFeet(heightF)
            if (checkFilledDetails(weight, height, heightF, heightInches)) {
                bmiHandler(true, true, weight, selectedValueWeight, selectedValueHeight, height, heightF, heightInches)
            }
            else {
                setBmi('')
            }
        }
        else {
            setHeightInches(heightF)
            if (checkFilledDetails(weight, height, heightFeet, heightF)) {
                bmiHandler(true, true, weight, selectedValueWeight, selectedValueHeight, height, heightFeet, heightF)
            }
            else {
                setBmi('')
            }
        }
    }

    const weightHandler = (weight) => {
        setWeight(weight)
        if (checkFilledDetails(weight, height, heightFeet, heightInches)) {
            bmiHandler(true, true, weight, selectedValueWeight, selectedValueHeight, height, heightFeet, heightInches)
        }
        else {
            setBmi('')
        }
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
                        Register (2/3)
                    </LinearGradientText>
                    <Text style={{ paddingVertical: 3, fontFamily: 'open-sans-bold', color: '#C0C0C0', fontSize: 22 }}>Fill in the details to get started</Text>
                    <View style={styles.inputContainer}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={3}>
                                <View style={{
                                    marginVertical: 6,
                                    borderColor: '#828282',
                                    borderWidth: 0.7,
                                    borderRadius: 6,
                                    padding: 5,
                                    paddingHorizontal: 10,
                                    flexGrow: 2
                                }}>
                                    {/* <TextInput style={styles.textInput} value={name} onChangeText={newText => setName(newText)} placeholder='Date of Birth' placeholderTextColor="grey" /> */}
                                    <DatePicker
                                        style={styles.datePickerStyle}
                                        date={date}
                                        mode="date"
                                        placeholder="Select Date of Birth"
                                        format="DD/MM/YYYY"
                                        minDate="01-01-1900"
                                        maxDate={curDate}
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateIcon: {
                                                position: 'absolute',
                                                right: -5,
                                                top: 4,
                                                marginLeft: 0,
                                            },
                                            dateInput: {
                                                borderColor: "gray",
                                                alignItems: "flex-start",
                                                borderWidth: 0,
                                                fontFamily: 'open-sans',
                                            },
                                            placeholderText: {
                                                fontSize: 15,
                                                color: "gray",
                                                fontFamily: 'open-sans',
                                            },
                                            dateText: {
                                                fontSize: 15,
                                            }
                                        }}
                                        onDateChange={(date) => {
                                            setDate(date);
                                        }}
                                    />
                                </View>
                                <View style={{ marginVertical: 6, flexDirection: 'row' }}>
                                    {selectedValueHeight === 'meters' ?
                                        <TextInput style={{ ...styles.textInput }} value={height} onChangeText={newText => heightHandler(newText)} placeholder='Height' placeholderTextColor="grey" keyboardType='number-pad' /> :
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <TextInput style={{ ...styles.textInput }} value={heightFeet} onChangeText={newText => feetHeightHandler(newText, 'feet')} placeholder='feet  ' placeholderTextColor="grey" keyboardType='number-pad' />
                                            <TextInput style={{ ...styles.textInput }} value={heightInches} onChangeText={newText => feetHeightHandler(newText, 'inches')} placeholder='inches' placeholderTextColor="grey" keyboardType='number-pad' />
                                        </View>}
                                    <Dropdown
                                        label='Select Unit'
                                        data={HeightData}
                                        containerStyle={styles.containerStyle}
                                        value="feet"
                                        onChangeText={text => {
                                            setSelectedValueHeight(text)
                                            bmiHandler(false, false, weight, selectedValueWeight, text, height, heightFeet, heightInches)
                                        }}
                                    />
                                </View>
                                <View style={{ marginVertical: 6, flexDirection: 'row' }}>
                                    <TextInput style={styles.textInput} value={weight} onChangeText={newText => weightHandler(newText)} placeholder='Weight' placeholderTextColor="grey" keyboardType='number-pad' />
                                    <Dropdown
                                        label='Select Unit'
                                        data={WeightData}
                                        containerStyle={styles.containerStyle}
                                        value="Kg"
                                        onChangeText={text => {
                                            setSelectedValueWeight(text)
                                            bmiHandler(false, false, weight, text, selectedValueHeight, height, heightFeet, heightInches)
                                        }}
                                    />
                                </View>
                                <View style={{ marginVertical: 6 }}>
                                    <TextInput style={styles.textInput} value={bmi} placeholder='BMI' placeholderTextColor="grey" keyboardType='number-pad' editable={false} />
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
    datePickerStyle: {
        width: 230,
    },
    containerStyle: {
        width: "30%",
        marginTop: -20,
        marginBottom: -5,
        marginLeft: "5%"
    }
});

export default Register_2;