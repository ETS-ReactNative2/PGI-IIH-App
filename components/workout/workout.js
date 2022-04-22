import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../header/HeaderButton';
import { AntDesign } from '@expo/vector-icons';
import StepCount from './step-count/StepCount';
import StepsCard from './step-count/StepsCard';
import AddManuallyButton from './utils/AddManuallyButton';
import Exercise from './exercises/Exercise';
import HorizontalLine from './utils/HorizontalLine';
import ExerciseList from './exercises/ExerciseList';
import ModalPopUp from './exercises/ModalPopUp';

const Workout = props => {

    const state = useSelector(state => state.user)

    const [list1Open, setList1Open] = useState(false)
    const [list2Open, setList2Open] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    const [doneList, setDoneList] = useState({
        'Running': 20,
        'Treadmill walk': 20,
        'Rope skipping': 20
    })


    const exercisesList = {
        'Running': "Stand upright with your legs together, arms at your sides. Bend your knees slightly",
        'Treadmill walk': "Stand upright with your legs together, arms at your sides. Bend your knees slightly, and jump into the air. As you jump, spread your legs to be about shoulder-width apart. Stretch your arms out and over your head. Jump back to starting position. Repeat.",
        'Rope skipping': "Stand upright with your legs together, arms at your sides. Bend your knees slightly",
        'Jumping jacks': "Stretch your arms out and over your head. Jump back to starting position. Repeat.Stand upright with your legs together, arms at your sides. Bend your knees slightly, and jump into the air. As you jump, spread your legs to be about shoulder-width apart. Stretch your arms out and over your head. Jump back to starting position. Repeat.",
        'Squats': "Stand upright with your legs together, arms at your sides. Bend your knees slightly",
        'Push Ups': "Stand upright with your legs together, arms at your sides. Bend your knees slightly, and jump into the air. As you jump, spread your legs to be about shoulder-width apart. Stretch your arms out and over your head. Jump back to starting position. Repeat.",
    }

    props.navigation.setOptions({
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Workout' iconName='arrow-back' onPress={() => {
                props.navigation.goBack()
            }} />
        </HeaderButtons>,
        headerRight: () => <TouchableOpacity
            style={{ paddingRight: '5%' }}
            onPress={() => console.log('Go to My Exercises')}
            underlayColor='#fff'>
            <Text style={styles.myExercisesText}>My Exercises</Text>
        </TouchableOpacity>
    });

    const sumValues = doneList => Object.values(doneList).reduce((a, b) => a + b);

    return (
        <ScrollView>
            <View style={styles.screen}>
                <StepsCard navigation={props.navigation} />
                <View style={{ marginTop: "3%" }}>
                    <AddManuallyButton onPress={() => setIsVisible(true)} />
                </View>
                {isVisible ?
                    <View>
                        <ModalPopUp setIsVisible={setIsVisible} exercisesList={exercisesList} doneList={doneList} setDoneList={setDoneList} />
                    </View> :
                    null}
                <Exercise
                    title="Done today"
                    calories={list1Open ? sumValues(doneList) + ' min' : "134 kCal"}
                    listOpen={list1Open}
                    setListOpen={setList1Open}
                />
                <HorizontalLine />
                {list1Open ? <ExerciseList list={doneList} exercisesList={exercisesList} type={"doneList"} navigation={props.navigation} /> : null}
                <Exercise
                    title="All Exercises"
                    listOpen={list2Open}
                    setListOpen={setList2Open}
                />
                <HorizontalLine />
                {list2Open ? <ExerciseList list={exercisesList} type={"exercisesList"} navigation={props.navigation} /> : null}
                {/* <Text>{state}</Text> */}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fafafa'
    }
});

export default Workout;