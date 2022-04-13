import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, TextInput, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { exp } from 'react-native/Libraries/Animated/Easing';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
const AddButton = props => {

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.onPress}
            style={props.style}
        >
            <LinearGradient
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                colors={['#1DDE7D', '#72DFC5']}
                style={styles.button}>

                <Text style={styles.buttonText}>ADD </Text>

            </LinearGradient>
        </TouchableOpacity>
    )
}

const NutritionScreen = (props) => {
    const [mealsList, SetMealsList] = useState(
        [
            {
                id:0,
                name:"Breakfast",
                isClicked: false,
                foodItems: [],
              },
              {
                id:1,
                name:"Lunch",
                isClicked: false,
                foodItems: [],
              },
              {
                id:2,
                name:"Dinner",
                isClicked: false,
                foodItems: [],
              },
              {
                id:3,
                name:"Other",
                isClicked: false,
                foodItems: [],
              }
        ]
    );
    
    const [itemName, setItemName] = useState(["", "", "", ""]);
    const [itemQuantity, setItemQuantity] = useState(["", "", "", ""]);

    const openDrop = (idx) => {
        SetMealsList((prevmealslist) => {
            const val = prevmealslist[idx].isClicked;
            prevmealslist[idx].isClicked = !val;
            return [...prevmealslist];
        });
    };

    const removeMealItem = (ind, index) => {
        SetMealsList((prevmealslist) => {
            prevmealslist[ind].foodItems.splice(index, 1);
            return [...prevmealslist];
        });
    }

    const addMealItem = (ind) => {
        SetMealsList((prevmealslist) => {
            prevmealslist[ind].foodItems.push({name: itemName[ind] , quantity: itemQuantity[ind]});
            return [...prevmealslist];
        });
        setItemName((prevItemNames) => {
            prevItemNames[ind] = "";
            return [...prevItemNames];
        });
        setItemQuantity((prevItemQuantities) => {
            prevItemQuantities[ind] = "";
            return [...prevItemQuantities];
        });
    };

    const onChangeItemName = (ind, val) => {
        setItemName((prevItemNames) => {
            prevItemNames[ind] = val;
            return [...prevItemNames];
        });
    };

    const onChangeItemQuantity = (ind, val) => {
        setItemQuantity((prevItemQuantities) => {
            prevItemQuantities[ind] = val;
            return [...prevItemQuantities];
        });
    };

    return (
        <ScrollView>
        <View style={styles.screen}>
            {mealsList.map((item, ind) => {
                return (
                    <TouchableWithoutFeedback key={item.id}  onPress={() => openDrop(item.id)}>
                    <View style={styles.listItem}>
                        
                        { item.isClicked == false ? 
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.text}><AntDesign name="caretright" size={15} color="black" />  {item.name}  </Text>
                                <Text style={{ color: '#8B8B8B', fontSize: 15 }}>0 kCal</Text>
                            </View>  
                        :   
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.text}><AntDesign name="caretdown" size={15} color="black" />  {item.name}  </Text>
                                    <Text style={{ color: '#8B8B8B', fontSize: 15 }}>0 kCal</Text>
                                </View>
                                {item.foodItems.length == 0 ? 
                                    <Text style={{ color: 'grey', fontSize: 13, marginHorizontal: 2, marginVertical: 5 }}>No items added!</Text> 
                                    : 
                                    <Text style={{ color: 'grey', fontSize: 13, marginHorizontal: 2, marginVertical: 5 }}>Added</Text>}
                                {item.foodItems.map((foodItem, index) => {
                                    return (
                                        <View key={index} style={{ flex: 1,flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', borderRadius: 20 , paddingVertical: 5, marginVertical: 5, paddingHorizontal: 8 , backgroundColor: '#1DDE7D', width: (foodItem.name.length+foodItem.quantity.length)*14 }}>
                                            <Text style={{ fontFamily: 'open-sans' }}>{foodItem.name} - {foodItem.quantity}</Text>
                                            <TouchableWithoutFeedback onPress={() => removeMealItem(ind, index)}><MaterialIcons name="delete" size={20} color="black" /></TouchableWithoutFeedback>
                                        </View>
                                    );
                                })}
                                <Text style={{ color: 'grey', fontSize: 13, marginHorizontal: 2, marginVertical: 5 }}>Add new item</Text>
                                <View style={{ marginVertical: 5 }}><TextInput style={styles.textInput} placeholder='Item' placeholderTextColor="grey" onChangeText={(val) => onChangeItemName(ind, val)} value={itemName[ind]} /></View>
                                <View style={{ marginVertical: 5 }}><TextInput style={styles.textInput} placeholder='Quantity' placeholderTextColor="grey" onChangeText={(val) => onChangeItemQuantity(ind, val)} value={itemQuantity[ind]} /></View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <AddButton style={{ marginVertical: 6 }} onPress={() => addMealItem(ind)}/>
                                </View>
                            </View>
                        }
                    </View>
                    </TouchableWithoutFeedback>
                );
            })}
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white'
    },
    listItem: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 1

    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 15
    },
    textInput: {
        fontFamily: 'open-sans',
        borderColor: '#828282',
        borderWidth: 0.7,
        borderRadius: 6,
        padding: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        height: 40
    },
    button: {
        height: 30,
        width: 60,
        borderRadius: Platform.OS == "android" ? 25 : 15,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'open-sans'
    }
});

export default NutritionScreen;