import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NotificationsScreen = (props) => {
    const [notificationsList, setNotificationsList] = useState([
        { id: 1, title: "Message from doctor", message: "try to avoid milk" },
        { id: 2, title: "System Notification", message: "Your workout plan has changed." },
        { id: 3, title: "System Notification", message: "Your diet plan has changed." },
    ]);
    return (
        <View style={styles.screen}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Notifications
                </Text>
                <TouchableWithoutFeedback onPress={() => console.log("Fdv")}>
                    <Text style={{ fontFamily: 'open-sans', fontSize: 16 }}>
                        Clear All
                    </Text>
                </TouchableWithoutFeedback>
            </View>
            {notificationsList.map((item) => {
                return (
                    <View style={styles.itemContainer} key={item.id}>
                        <Text style={styles.listItemTitleText}>{item.title}</Text>
                        <Text style={styles.listItemMessageText}>{item.message}</Text>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        paddingTop: 65,
        backgroundColor: 'white',
        flex: 1
    },
    headerText: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
    },
    listItemTitleText: {
        fontFamily: 'open-sans-bold',
    },
    listItemMessageText: {
        fontFamily: 'open-sans',
    },
    listItem: {

    },
    itemContainer: {
        borderColor: '#E5E5E5',
        borderBottomWidth: 1,
        padding: 15,
    },
    headerContainer: {
        paddingLeft: 15,
        paddingBottom: 10,
        borderColor: '#E5E5E5',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 15
    },
});

export default NotificationsScreen;