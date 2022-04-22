import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const StartButton = props => {

    const [isStart, setIsStart] = useState(false)

    const buttonHandler = onPress => {
        setIsStart(!isStart)
        onPress()
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => buttonHandler(props.onPress)}
            style={styles.buttonContainer}
        >
            <LinearGradient
                start={{ x: 0, y: 0 }} //here we are defined x as start position
                end={{ x: 0, y: 1 }} //here we can define axis but as end position
                colors={['#1DDE7D', '#72DFC5']}
                style={styles.button}>
                {!isStart ? <AntDesign name="caretright" size={35} color="white" /> : <Ionicons name="pause" size={35} color="white" />}
            </LinearGradient>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    button: {
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 37.5
    },
    buttonContainer: {
        width: 75,
        marginBottom: '3%',
    },
    text: {
        color: 'white',
        fontSize: 15
    }
})

export default StartButton;