import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const SelectDropDown = props => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const data = ['Doctor', 'Patient'];
    return (
        <TouchableWithoutFeedback onPress={() => setIsModalVisible(true)}>
            <View>
                <View style={styles.container}>   
                    <Text style={styles.text}>Select Role</Text>
                    <AntDesign name="caretdown" size={10} color="grey" />
                </View>
                <Modal 
                visible={isModalVisible} 
                transparent={true} 
                onRequestClose={() => setIsModalVisible(false)}>
                    <TouchableOpacity 
                    style={styles.modalContainer}
                    onPress={() => setIsModalVisible(false)}>
                        <View style={styles.modal}>
                            {data.map((item, index) => (
                                <View style={styles.listItem} key={index}>
                                    <Text style={styles.listItemText}>{item}</Text>
                                </View>
                            ))}
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
        </TouchableWithoutFeedback>    
    );
};

const styles = StyleSheet.create({
    listItem: {

    },
    listItemText: {
        fontFamily: 'open-sans',
        fontSize: 18,
        margin: 5,
        color: 'grey',
        marginHorizontal: 15
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modal: {
        width: Dimensions.get('window').width-180,
        backgroundColor: 'white',
        borderRadius: 6,
        borderColor: '#828282',
        borderWidth: 1,
    },
    container: {
        flexDirection: 'row',
        borderColor: '#828282',
        borderWidth: 1,
        borderRadius: 6,
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'open-sans',
        fontSize: 15,
        color: 'grey',
        marginVertical: 4
    }
});

export default SelectDropDown;