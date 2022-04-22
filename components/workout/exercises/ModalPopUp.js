import React, { useState } from "react";
import { Text, View, Modal, StyleSheet, TouchableOpacity, Dimensions, TextInput, Alert } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import AddButton from "../utils/AddButton";

const exerciseHelper = list => {
    var exercises = [];
    list.forEach(exercise => {
        var temp = { 'label': exercise, 'value': exercise }
        exercises.push(temp)
    });
    return exercises
}

const timeToMinutes = duration => {
    var hoursDotMinutes = duration;
    var fieldArray = hoursDotMinutes.split(":");
    var minutes = parseInt(fieldArray[1]) + 60 * parseInt(fieldArray[0]);

    return minutes
}

const ModalPopUp = props => {

    const exercises = exerciseHelper(Object.keys(props.exercisesList))
    const [addExercise, setAddExercise] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [duration, setDuration] = useState('')
    const time24Regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/

    const durationHandler = new_duration => {
        // console.log(duration)
        if (new_duration.length === 2 && duration.length !== 3) {
            setDuration(new_duration + ':')
        }
        else if (new_duration.length >= 6) return;
        else setDuration(new_duration)
    }

    const addExerciseHandler = (exercise) => {
        if (!time24Regex.test(duration)) {
            Alert.alert('Invalid time duration', 'Please enter valid time duration in the specified format (HH:MM)...', [{ text: 'Okay!', style: 'default' }])
            return
        }

        if (props.doneList[exercise] !== undefined) {
            props.setDoneList({ ...props.doneList, [exercise]: props.doneList[exercise] + timeToMinutes(duration) })
        }
        else {
            props.setDoneList({ ...props.doneList, [exercise]: timeToMinutes(duration) })
        }
        props.setIsVisible(false)
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.2)' }}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={props.isVisible}
                onRequestClose={() => {
                    props.setIsVisible(false)
                }}>
                <View style={styles.container}>
                    <View style={{ height: '31%' }}></View>
                    <View style={styles.modalView}>
                        <View style={styles.modal}>
                            <Text style={styles.headingStyle}>Add Manually</Text>
                            <View style={{ paddingTop: 25 }}>
                                <Dropdown
                                    style={[DropDownStyles.dropdown, isFocus && { borderColor: 'blue' }]}
                                    placeholderStyle={DropDownStyles.placeholderStyle}
                                    selectedTextStyle={DropDownStyles.selectedTextStyle}
                                    inputSearchStyle={DropDownStyles.inputSearchStyle}
                                    iconStyle={DropDownStyles.iconStyle}
                                    data={exercises}
                                    search
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!isFocus ? 'Exercises' : '...'}
                                    searchPlaceholder="Search..."
                                    value={addExercise}
                                    onFocus={() => setIsFocus(true)}
                                    onBlur={() => setIsFocus(false)}
                                    onChange={item => {
                                        setAddExercise(item.value);
                                        setIsFocus(false);
                                    }} />
                            </View>
                            <View style={{ width: Dimensions.get('window').width * 0.65, flexDirection: "row", alignItems: 'center', paddingVertical: 15 }}>
                                <View style={{ flex: 1 }}>
                                    <TextInput
                                        style={styles.timeDuration}
                                        keyboardType={"numeric"}
                                        placeholder="Duration (HH:MM)"
                                        value={duration}
                                        onChangeText={hour => {
                                            console.log(hour)
                                            durationHandler(hour)
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{ paddingVertical: 15, paddingTop: 20, left: '22%' }}>
                                <AddButton onPress={() => addExerciseHandler(addExercise)} />
                            </View>
                        </View>
                    </View>
                    <View style={{ height: '31%' }}></View>
                </View>
            </Modal>
        </View>
    )
}

export default ModalPopUp

const styles = StyleSheet.create({
    modalView: {
        height: "38%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        marginHorizontal: '6%',
        elevation: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
    },
    container: {
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    modal: {
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    headingStyle: {
        fontFamily: 'inter-semibold',
        fontSize: 20,
        paddingBottom: '4%'
    },
    containerStyle: {
        width: "100%",
        marginTop: -20,
        marginBottom: -5,
        fontSize: 20,
        color: 'black'
    },
    timeDuration: {
        fontFamily: 'open-sans',
        borderColor: '#828282',
        borderWidth: 0.7,
        borderRadius: 6,
        padding: 5,
        paddingHorizontal: 10,
        fontSize: 15,
        height: 45,
    }
})

const DropDownStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 45,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        width: Dimensions.get('window').width * 0.65
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});