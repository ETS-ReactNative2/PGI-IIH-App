import React from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, TextInput, Platform, ScrollView } from 'react-native';
import LinearGradientText from './utils/LinearGradientText';
import SelectDropDown from './utils/SelectDropDown';
import CustomButton from './utils/CustomButton';

const Login = props => {

    return (
        <View style={styles.screen}>
            <LinearGradientText style={styles.text} colors={['#1DDE7D', '#72DFC5']}>
                Login
            </LinearGradientText>
            <Text style={{paddingVertical: 3, fontFamily: 'open-sans-bold', color:'#C0C0C0', fontSize:22}}>Please sign in to continue</Text>
            <View style={styles.inputContainer}>
                <View style={{marginVertical: 6}}><SelectDropDown/></View>
                <View style={{marginVertical: 6}}><TextInput style={styles.textInput} placeholder='Username' placeholderTextColor = "grey"/></View>
                <View style={{marginVertical: 6}}><TextInput style={styles.textInput} secureTextEntry={true} placeholder='Password' placeholderTextColor = "grey"/></View>
            </View>
            <CustomButton style={styles.button} text="LOGIN"/>
            <View style={styles.footer}>
                <Text style={{fontFamily: 'open-sans-bold', color:'#C0C0C0', fontSize:14}}>Not yet registered?</Text>
                <LinearGradientText style={{fontFamily: 'open-sans-bold', fontSize:14}} colors={['#1DDE7D', '#72DFC5']}> Register here</LinearGradientText>
            </View>
        </View>
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
        borderWidth: 1,
        borderRadius: 6,
        padding: 5,
        fontSize: 15,
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
        marginTop: 40,
    },
    button: {
        width: '27%',
        height: '12%',
        marginLeft: '72%',
        marginTop: 15
    },
});

export default Login;