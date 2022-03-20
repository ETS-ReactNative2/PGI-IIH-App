import React, { useState } from 'react';
import LinearGradientText from './LinearGradientText';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import CustomButton from './CustomButton';
import SelectDropDown from 'react-native-select-dropdown';

const RegisterStepTwo = props => {
    
    const [stepNumber, setStepNumber] = useState(1);

    return (
        <View style={styles.screen}>
            <LinearGradientText  style={styles.text} colors={['#1DDE7D', '#72DFC5']}>
            Register (3/3)
            </LinearGradientText>
            <Text style={{paddingVertical: 3, fontFamily: 'open-sans-bold', color:'#C0C0C0', fontSize:22}}>Almost there</Text>
            <View style={{flexDirection: 'row', marginTop: 260, justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontFamily: 'open-sans-bold', color:'#C0C0C0', fontSize:16}}>Back</Text>
                <CustomButton style={styles.button} text="REGISTER"/>
            </View>
            <View style={styles.footer}>
                <Text style={{fontFamily: 'open-sans-bold', color:'#C0C0C0', fontSize:14}}>Already registered?</Text>
                <LinearGradientText style={{fontFamily: 'open-sans-bold', fontSize:14}} colors={['#1DDE7D', '#72DFC5']}> Login here</LinearGradientText>
            </View>
        </View>
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
        width: 120,
        height: 50,
    },
});

export default RegisterStepTwo;