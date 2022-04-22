import React from "react";
import { Text, View, StyleSheet, Button } from 'react-native';
import style from "react-native-datepicker/style";

const HomePageScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Button title="open drawer" onPress={() => props.navigation.openDrawer()} />
            <Button title="Nutrition" onPress={() => props.navigation.navigate({
                name: "Nutrition"
            })} />
            <Button title="Workout" onPress={() => props.navigation.navigate({
                name: "WorkoutNavigator"
            })} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default HomePageScreen;