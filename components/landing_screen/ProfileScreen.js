import React, { useState } from "react";
import { Text, View, StyleSheet } from 'react-native';

const ProfileScreen = (props) => {
    const [hasProfilePicture, setHasProfilePicture] = useState(false);
    return (
        <View style={styles.screen}>
            <Text style={styles.headerText}>Profile</Text>
            {hasProfilePicture == true ? 
                <View>
                    <Text>image here</Text>
                </View> 
                : 
                <View style={{ alignItems: 'center', marginVertical: 40 }}>
                    <View style={styles.imageContainer}>
                        <Text style={{ fontFamily: 'open-sans', color: 'white', fontSize: 35 }}>DV</Text>
                    </View>
                </View>
            }
            <Text style={styles.text}>Name</Text>
            <Text style={styles.text}>DOB</Text>
            <Text style={styles.text}>Phone</Text>
            <Text style={styles.text}>Height</Text>
            <Text style={styles.text}>Weight</Text>
            <Text style={styles.text}>BMI</Text>
            <Text style={styles.text}>Gender</Text>
            <Text style={styles.text}>Deitery preference</Text>
            <Text style={styles.text}>Doctor</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: '#7C7C7C',
        height: 100,
        width: 100,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    screen: {
        paddingTop: 65,
        backgroundColor: 'white',
        flex: 1
    },
    headerText: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        paddingLeft: 15,
        paddingBottom: 10,
        borderColor: '#E5E5E5',
        borderBottomWidth: 1
    },
    text: {
        fontFamily: 'open-sans-bold',
        color: '#909090',
        fontSize: 16,
        paddingHorizontal: 35,
        paddingVertical: 7
    },
});

export default ProfileScreen;