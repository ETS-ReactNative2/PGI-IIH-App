import React, { useState } from 'react';
import LinearGradientText from './utils/LinearGradientText';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import CustomButton from './utils/CustomButton';
import RegisterStepTwo from './utils/RegisterStepTwo';
import RegisterStepThree from './utils/RegisterStepThree';

const Register = props => {
    
    const [stepNumber, setStepNumber] = useState(1);

    return (
        <View style={styles.screen}>
            <LinearGradientText  style={styles.text} colors={['#1DDE7D', '#72DFC5']}>
            Register (1/3)
            </LinearGradientText>
            <Text style={{paddingVertical: 3, fontFamily: 'open-sans-bold', color:'#C0C0C0', fontSize:22}}>Fill in the details to get started</Text>
            <View style={styles.inputContainer}>
                <View style={{marginVertical: 6}}><TextInput style={styles.textInput} placeholder='Name' placeholderTextColor = "grey"/></View>
                <View style={{marginVertical: 6}}><TextInput style={styles.textInput} placeholder='Username' placeholderTextColor = "grey"/></View>
                <View style={{marginVertical: 6}}><TextInput style={styles.textInput} placeholder='Phone Number' placeholderTextColor = "grey"/></View>
                <View style={{marginVertical: 6}}><TextInput style={styles.textInput} secureTextEntry={true} placeholder='Password' placeholderTextColor = "grey"/></View>
            </View>
            <CustomButton style={styles.button} text="NEXT"/>
            <View style={styles.footer}>
                <Text style={{fontFamily: 'open-sans-bold', color:'#C0C0C0', fontSize:14}}>Already registered?</Text>
                <LinearGradientText style={{fontFamily: 'open-sans-bold', fontSize:14}} colors={['#1DDE7D', '#72DFC5']}> Login here</LinearGradientText>
            </View>
        </View>
        // <RegisterStepTwo/>
        // <RegisterStepThree/>
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
        borderWidth: 1,
        borderRadius: 6,
        padding: 5,
        fontSize: 15,
    },
    inputContainer: {
        marginTop: 40
    },
    button: {
        width: '27%',
        height: '12%',
        marginLeft: '72%',
        marginTop: 15
    },
});

export default Register;