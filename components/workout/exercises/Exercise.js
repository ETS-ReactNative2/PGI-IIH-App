import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import HorizontalLine from '../utils/HorizontalLine';

const Exercise = props => {

    return (
        <View style={styles.screen}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => props.setListOpen(!props.listOpen)}
            >
                <View style={styles.headLine}>
                    <View style={styles.heading}>
                        <AntDesign name={props.listOpen === false ? "caretright" : "caretdown"} size={16} color="black" />
                        <Text style={styles.headingText}>{props.title}</Text>
                    </View>
                    <View>
                        <Text style={styles.calories}>{props.calories}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            {/* <Text>{state}</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'flex-start',
        backgroundColor: '#fafafa',
    },
    headLine: {
        width: Dimensions.get('window').width * 0.85,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingText: {
        fontFamily: 'inter-semibold',
        fontSize: 16,
        paddingLeft: '5%'
    },
    calories: {
        fontFamily: 'inter-regular',
        fontSize: 14,
    }
});

export default Exercise;