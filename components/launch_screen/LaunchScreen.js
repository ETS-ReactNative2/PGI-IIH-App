import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LaunchScreenButton from "./utils/LaunchScreenButton";


const LaunchScreen = props => {

    const GetStartedHandler = () => {
        props.navigation.navigate({
            name: "ChooseProfession"
        })
    }

    return (
        <View style={styles.screen}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/launch-screen-animation.gif')} style={styles.image} resizeMode="cover" />
            </View>
            <View style={styles.buttonContainer}>
                <LaunchScreenButton onPress={GetStartedHandler} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.copyrightText}>@copyright PGIMER</Text>
                <Text style={styles.copyrightText}>Chandigarh, India</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    copyrightText: {
        opacity: 0.48
    },
    image: {
        height: Dimensions.get('window').width,
        width: Dimensions.get('window').width
    },
    imageContainer: {
        flexDirection: 'column-reverse',
        height: Dimensions.get('window').height * 0.63
    },
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: "flex-end",
        marginVertical: Dimensions.get('window').height * 0.025
    }
})

export default LaunchScreen;