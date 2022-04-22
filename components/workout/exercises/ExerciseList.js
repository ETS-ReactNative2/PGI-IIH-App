import React from 'react';
import { Dimensions, View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import HorizontalLine from '../utils/HorizontalLine';

const ExerciseList = props => {
    return (
        <View>
            {
                Object.keys(props.list).map((key, index) => (
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => props.navigation.navigate({
                            name: "Individual-Exercise",
                            params: {
                                name: key,
                                description: props.type === "doneList" ? props.exercisesList[key] : props.list[key]
                            }
                        })
                        }
                    >
                        <View>
                            {props.type === "doneList" ?
                                <View style={styles.headLine}>

                                    <Text style={styles.headingText}>{key}</Text>
                                    <Text style={styles.calories}>{props.list[key] + ' min'}</Text>
                                </View> :
                                <View style={styles.headLine}>
                                    <Text style={styles.headingText}>{key}</Text>
                                </View>}
                            <HorizontalLine />
                        </View>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    headLine: {
        width: Dimensions.get('window').width * 0.85,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        marginLeft: 25
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingText: {
        fontFamily: 'inter-regular',
        fontSize: 16,
        paddingLeft: '5%'
    },
    calories: {
        fontFamily: 'inter-regular',
        fontSize: 14,
    }
});

export default ExerciseList;