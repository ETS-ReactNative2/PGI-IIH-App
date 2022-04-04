import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const ProfileScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>profile</Text>
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

export default ProfileScreen;