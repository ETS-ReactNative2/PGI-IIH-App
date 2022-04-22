import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from "react-native-chart-kit";

const Statistics = props => {

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ]
    };

    return (
        <View style={styles.screen}>
            <Text>Statistics Screen</Text>
            <BarChart
                style={styles.graphStyle}
                data={data}
                width={Dimensions.get('window').width * 0.9}
                height={220}
                yAxisLabel="Steps "
                chartConfig={{
                    // backgroundColor: "#e26a00",
                    backgroundGradientFrom: "white",
                    backgroundGradientTo: "white",
                    // fillShadowGradient: '#023020',
                    fillShadowGradientOpacity: 1,
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(29, 222, 125, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                verticalLabelRotation={30}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fafafa'
    },
})

export default Statistics;