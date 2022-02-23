<script src="http://localhost:8097"></script>
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Platform, Dimensions, Alert } from 'react-native';
import BackButton from "./utils/BackButton";
import CategoryGridTile from "./utils/CategoryGridTile";
import { useSelector, useDispatch } from "react-redux";
import { toggleUsertype } from "../../store/actions/user";
import MoveForwardButton from "./utils/MoveForwardButton";

const BACK_BUTTON_HEIGHT = 30

const getHeightFromPercentage = (percentage) => {
    return (percentage / 100) * Dimensions.get('window').height
}

const statusBarHeight = Platform.OS === 'ios' ? getHeightFromPercentage(6.50) : StatusBar.currentHeight + getHeightFromPercentage(3);
const TOP_MARGIN = Platform.OS === 'ios' ? getHeightFromPercentage(0) : getHeightFromPercentage(5)


const ChooseProfessionScreen = props => {

    const curUser = useSelector(state => state.user.userType)

    const dispatch = useDispatch();

    const toggleUsertypeHandler = (title) => {
        dispatch(toggleUsertype(title))
    }

    const BackButtonHandler = () => {
        props.navigation.goBack()
    }

    const ForwardButtonHandler = () => {

        if (curUser === null) {
            Alert.alert('Alert', 'Please select the User type...', [{ text: 'Okay!', style: 'default' }])
        }
        else if (curUser === 'Doctor') {
            props.navigation.navigate({
                name: "Login"
            })
        }
        else {
            props.navigation.navigate({
                name: "Register"
            })
        }

    }

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.buttonContainer}>
                <BackButton onPress={BackButtonHandler} />
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Select User Type</Text>
                <Text style={styles.subtitle}>Please choose your user type</Text>
                <CategoryGridTile
                    title={"Doctor"}
                    imgSource={require("../../assets/images/profession/physician1.png")}
                    curType={curUser}
                    onPress={toggleUsertypeHandler}
                />
                <CategoryGridTile
                    title={"Patient"}
                    imgSource={require("../../assets/images/profession/patient1.png")}
                    curType={curUser}
                    onPress={toggleUsertypeHandler}
                />
                <View style={styles.forwardButtonContainer}>
                    <MoveForwardButton onPress={ForwardButtonHandler} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: "5%",
        alignSelf: "flex-start",
        position: 'absolute',
        top: statusBarHeight
    },
    container: {
        flex: 1,
        marginTop: statusBarHeight + BACK_BUTTON_HEIGHT + TOP_MARGIN,
    },
    forwardButtonContainer: {
        // position: 'absolute',
        left: Dimensions.get('window').width - 170,
        bottom: -5
    },
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 26,
    },
    subtitle: {
        fontFamily: 'open-sans',
        fontSize: 15,
        opacity: 0.55,
        marginBottom: "5%",
    }
})

export default ChooseProfessionScreen;