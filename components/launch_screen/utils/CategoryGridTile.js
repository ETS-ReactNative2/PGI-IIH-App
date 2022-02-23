import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, TouchableOpacity, Text, StyleSheet, Platform, TouchableNativeFeedback, Image, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CategoryGridTile = props => {

    const userType = useSelector(state => state.user.userType)

    let TouchableCmp = TouchableOpacity

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }

    return (
        <View
            style={{
                ...styles.gridItem,
                backgroundColor: userType === props.title ? '#32a86f' : '#fafafa',
            }}>
            <TouchableCmp style={{ flex: 1 }} onPress={() => props.onPress(props.title)} >
                <View style={styles.container} >
                    <AntDesign
                        name="checksquareo"
                        size={20}
                        color="black"
                        style={{
                            ...styles.checkIconStyle,
                            opacity: userType === props.title ? 1 : 0
                        }}
                    />
                    <Image source={props.imgSource} style={styles.image} resizeMode="contain" />
                    <Text style={{ ...styles.title, color: userType === props.title ? "white" : "black" }}>
                        {props.title}
                    </Text>
                </View>
            </TouchableCmp>
        </View >
    )
}

const styles = StyleSheet.create({
    checkIconStyle: {
        backgroundColor: 'white',
        alignSelf: 'flex-end'
    },
    gridItem: {
        margin: 15,
        height: Dimensions.get('window').height * 0.28,
        borderRadius: 10,
        backgroundColor: '#fafafa',
        // for andriod
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible', //child items can't be render outside the paent view
        elevation: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        // For IOS
        // shadowColor: 'black',
        // shadowOpacity: 0.26,
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 10,
        padding: 15,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    image: {
        height: "65%",//Dimensions.get('window').height * 0.2,
        width: '75%',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 5
    }
});

export default CategoryGridTile;