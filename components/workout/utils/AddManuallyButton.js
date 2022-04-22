import React from "react";
import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

const AddManuallyButton = props => {

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
                <Text style={styles.text}>Add Manually</Text>
            </LinearGradient>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    button: {
        height: 42,
        width: Dimensions.get('window').width * 0.90,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 21
    },
    buttonContainer: {
        marginBottom: '3%'
    },
    text: {
        color: 'white',
        fontSize: 19
    }
})

export default AddManuallyButton;