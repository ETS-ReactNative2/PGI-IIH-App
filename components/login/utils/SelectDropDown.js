// import React, { useState } from "react";
// import { StyleSheet, View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from "react-native";
// import { AntDesign } from '@expo/vector-icons';

// const SelectDropDown = props => {
//     const [isModalVisible, setIsModalVisible] = useState(false);
//     const data = ['Doctor', 'Patient'];
//     return (
//         <TouchableWithoutFeedback onPress={() => setIsModalVisible(true)}>
//             <View>
//                 <View style={styles.container}>   
//                     <Text style={styles.text}>Select Role</Text>
//                     <AntDesign name="caretdown" size={10} color="grey" />
//                 </View>
//                 <Modal 
//                 visible={isModalVisible} 
//                 transparent={true} 
//                 onRequestClose={() => setIsModalVisible(false)}>
//                     <TouchableOpacity 
//                     style={styles.modalContainer}
//                     onPress={() => setIsModalVisible(false)}>
//                         <View style={styles.modal}>
//                             {data.map((item, index) => (
//                                 <View style={styles.listItem} key={index}>
//                                     <Text style={styles.listItemText}>{item}</Text>
//                                 </View>
//                             ))}
//                         </View>
//                     </TouchableOpacity>
//                 </Modal>
//             </View>
//         </TouchableWithoutFeedback>    
//     );
// };

// const styles = StyleSheet.create({
//     listItem: {

//     },
//     listItemText: {
//         fontFamily: 'open-sans',
//         fontSize: 18,
//         margin: 5,
//         color: 'grey',
//         marginHorizontal: 15
//     },
//     modalContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.3)',
//     },
//     modal: {
//         width: Dimensions.get('window').width-180,
//         backgroundColor: 'white',
//         borderRadius: 6,
//         borderColor: '#828282',
//         borderWidth: 1,
//     },
//     container: {
//         flexDirection: 'row',
//         borderColor: '#828282',
//         borderWidth: 1,
//         borderRadius: 6,
//         padding: 5,
//         justifyContent: 'space-between',
//         alignItems: 'center'
//     },
//     text: {
//         fontFamily: 'open-sans',
//         fontSize: 15,
//         color: 'grey',
//         marginVertical: 4
//     }
// });

// export default SelectDropDown;
import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
    { label: 'Doctor', value: '1' },
    { label: 'Patient', value: '2' },
];

const DropdownComponent = () => {
    const [userType, setUserType] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'grey' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={styles.container}>
            {/* {renderLabel()} */}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'gray' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                containerStyle={styles.containerStyle}
                dropdownPosition='auto'
                data={data}
                maxHeight={113}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Role' : 'Select Role'}
                value={userType}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setUserType(item.value);
                    setIsFocus(false);
                }}
            />
        </View>
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    container: {
    },
    dropdown: {
        height: 48,
        borderColor: 'gray',
        borderWidth: 0.7,
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    label: {
        position: 'absolute',
        left: 22,
        top: 0,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontFamily: 'open-sans',
        fontSize: 16,
        color: 'grey'
    },
    selectedTextStyle: {
        fontFamily: 'open-sans',
        fontSize: 16,
        color: 'black'
    },
    containerStyle: {

    }
});