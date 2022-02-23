import React from "react";
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Octicons } from '@expo/vector-icons';

const MoveForwardButton = props => {

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.onPress}
            style={styles.buttonContainer}
        >
            <LinearGradient
                start={{ x: 1, y: 0 }} //here we are defined x as start position
                end={{ x: 0, y: 0 }} //here we can define axis but as end position
                colors={['#1DDE7D', '#72DFC5']}
                style={styles.button}>
                <Text style={styles.text}><Octicons name="arrow-right" size={35} color="white" /></Text>
            </LinearGradient>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    button: {
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
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

export default MoveForwardButton;