import React from "react";
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { View } from "react-native-web";

const CustomButton = props => {

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.onPress}
            style={props.style}
        >
            <LinearGradient
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                colors={['#1DDE7D', '#72DFC5']}
                style={styles.button}>

                <Text style={styles.text}>{props.text}</Text>
                <AntDesign name="arrowright" size={15} color="white" />

            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: '100%',
        width: '100%',
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15
    },
    text: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'open-sans'
    }
})

export default CustomButton;