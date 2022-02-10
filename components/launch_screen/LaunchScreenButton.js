<script src="http://localhost:8097"></script>
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

const LaunchScreenButton = props => {

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => { }}
            style={styles.buttonContainer}
        >
            <LinearGradient
                start={{ x: 1, y: 0 }} //here we are defined x as start position
                end={{ x: 0, y: 0 }} //here we can define axis but as end position
                colors={['#1DDE7D', '#72DFC5']}
                style={styles.button}>
                <Text style={styles.text}>Get Started <AntDesign style={{ marginTop: 5 }} name="arrowright" size={19} color="white" /> </Text>
            </LinearGradient>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    button: {
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 26
    },
    buttonContainer: {
        width: 212,
        height: '25%',
        marginBottom: '3%'
    },
    text: {
        color: 'white',
        fontSize: 19
    }
})

export default LaunchScreenButton;