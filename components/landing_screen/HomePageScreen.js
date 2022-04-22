import React from "react";
import { Text, View, StyleSheet, Button } from 'react-native';
import style from "react-native-datepicker/style";

const HomePageScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>home page</Text>
            <Button title="open drawer" onPress={() => props.navigation.openDrawer()}/>
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