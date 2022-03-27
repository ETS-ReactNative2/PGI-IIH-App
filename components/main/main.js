import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Main = props => {

    const state = useSelector(state => state.user)

    return (
        <View style={styles.text}>
            <Text>Main Page is here</Text>
            {/* <Text>{state}</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
});

export default Main;