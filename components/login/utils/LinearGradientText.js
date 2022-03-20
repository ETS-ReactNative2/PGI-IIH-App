import React from 'react';
import { Text } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

const LinearGradientText = (props) => {
    return (
    <MaskedView maskElement={<Text style={props.style}>{props.children}</Text>}>
        <LinearGradient colors={props.colors} start={{x: 1, y: 0}} end={{x: 0, y: 0}}>
            <Text style={[props.style, {opacity: 0}]}>{props.children}</Text>
        </LinearGradient>
    </MaskedView>
    );
};

export default LinearGradientText;