import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, BackHandler, Alert, TouchableHighlight, Dimensions, StatusBar, ScrollView, Platform } from 'react-native';
import EndSessionButton from '../utils/EndSessionButton';
import { Stopwatch } from 'react-native-stopwatch-timer';
import StartButton from '../utils/startButton';

const getHeightFromPercentage = (percentage) => {
    return (percentage / 100) * Dimensions.get('window').height
}

const statusBarHeight = Platform.OS === 'ios' ? getHeightFromPercentage(3) : StatusBar.currentHeight + getHeightFromPercentage(1);

const IndividualExercise = props => {

    const name = props.route.params['name'];
    const description = props.route.params['description']
    const [stopwatchStart, setStopWatchStart] = useState(false)
    const [stopwatchReset, setStopWatchReset] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [caloriesBurnt, setCaloriesBurnt] = useState(80)

    useEffect(() => {
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to finish this session?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => EndSessionButtonHandler() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    const EndSessionButtonHandler = () => {
        props.navigation.goBack()
    }

    const toggleStopwatch = () => {
        setStopWatchStart(!stopwatchStart)
    }

    const resetStopwatch = () => {
        setStopWatchStart(false)
        setStopWatchReset(true)
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.screen}>
                <View style={styles.buttonContainer}>
                    <EndSessionButton onPress={EndSessionButtonHandler} />
                </View>
                <View style={{ ...styles.textStyle, paddingTop: description.length >= 350 && Platform.OS === 'android' ? "7%" : null }}>
                    <Text style={styles.headingStyle}>{name}</Text>
                    <Text style={styles.descriptionStyle}>{description}</Text>
                </View>
                <Stopwatch laps secs start={stopwatchStart}
                    reset={stopwatchReset}
                    options={{
                        container: {
                            padding: 5,
                            borderRadius: Dimensions.get('window').width * 0.325,
                            borderWidth: 4,
                            borderColor: '#1DDE7D',
                            width: Dimensions.get('window').width * 0.65,
                            height: Dimensions.get('window').width * 0.65,
                            alignItems: 'center',
                            justifyContent: 'center',

                        },
                        text: {
                            fontSize: Dimensions.get('window').width * 0.12, // box width / 8 where is is number of characters
                            color: '#1DDE7D',
                            marginLeft: 7,
                            fontFamily: 'inter-semibold'
                        }
                    }}
                    getTime={time => setCurrentTime(time)} />

                <Text style={{ ...styles.descriptionStyle, color: 'black', paddingVertical: '3%' }}>{caloriesBurnt} Cal burned</Text>
                <StartButton onPress={toggleStopwatch} />
                {/* <TouchableHighlight onPress={toggleStopwatch}>
                    <Text style={{ fontSize: 30 }}>{!stopwatchStart ? "Start" : "Stop"}</Text>
                </TouchableHighlight> */}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        paddingHorizontal: "7%",
        paddingVertical: '5%'
    },
    descriptionStyle: {
        color: '#8C8C8C',
        fontFamily: 'inter-regular',
        fontSize: 16,
        padding: '2%'
    },
    headingStyle: {
        fontFamily: 'inter-semibold',
        fontSize: 40
    },
    buttonContainer: {
        top: statusBarHeight,
        left: "28%",
        marginVertical: '2%'
    },
    textStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '4.5%'
    }
})

export default IndividualExercise