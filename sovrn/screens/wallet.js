import React from 'react';
import { Pressable, StyleSheet, Image, Text, View, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { LineChart } from 'react-native-chart-kit'

const window = Dimensions.get('window')

const x_button = require('../assets/img/x_button02.png')

export default function Wallet({ navigation, route }) {
	
    const location = route.params.location

    const goBack = () => {
		navigation.navigate(location)
	}

    const data = [3, 7, 5, 9, 10, 4, 12, 5]

    const [loaded] = useFonts({
        'Louis': require('../assets/fonts/Louis_George_Cafe.ttf'),
        'LinLibertime': require('../assets/fonts/LinLibertime.ttf')
    })

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.wallet_header}>
                <Text style={styles.wallet_header_text}>Wallet</Text>
            </View>
            <Pressable onPress={goBack} style={styles.x_button_container}>
                <Image style={styles.x_button} source={x_button}/>
            </Pressable>
            <View style={styles.wallet_balance_container}>
                <Text style={styles.wallet_balance_text}>12.5</Text>
            </View>
            <View style={styles.chart_container}>
                <LineChart 
                data={
                    {
                        datasets: [
                            {
                                data: data
                            },
                            {
                                data: [1]
                            },
                            {
                                data: [10]
                            }
                        ]
                    }
                }
                width={window.width} 
                // height={window.height / 2}
                // yAxisLabel='$'
                // yAxisSuffix='k'
                height={window.height / 2.2}
                // yAxisInterval={1}
                withOuterLines={false}
                withInnerLines={false}
                // width={window.width}
                // withDots={false}
                withShadow={true}
                // withVerticalLabels={true}
                withHorizontalLabels={false}
                withVerticalLabels={false}
                chartConfig={{
                    backgroundColor: 'white',
                    originY: 20000,
                    // backgroundGradientFrom: '#424242',
                    // backgroundGradientTo: 'white',
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientToOpacity: 0,
                    decimalPlaces: 0,
                    color: (opacity = 0) => `#66FD4B`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    // barRadius: -10,
                    strokeWidth: 2,
                    style: {
                        borderRadius: 20,
                        // alignContent: 'center',
                        // alignItems: 'center'
                        right: 20
                    },
                    // width: window.width,
                    propsForDots: {
                        fill: '#369B24',
                        r: "6",
                        strokeWidth: "0",
                        stroke: "#ffa726"
                    },
                    propsForLabels: {
                        translateX: window.width,
                        // fontFamily: 'Louis'
                        fontSize: 20
                    },
                    
                    
                }}
                hidePointsAtIndex={[0, 1, 2, 3, 4, 5, 6]}
                bezier
                style={styles.chart}/>
                <View style={styles.chart_interface}>
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#424242',
        alignItems: 'center'
    },
    wallet_header: {
        top: window.height / 18,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wallet_header_text: {
        fontSize: window.width / 15,
        fontFamily: 'Louis'    
    },
    wallet_balance_container: {
        top: window.height / 10,
    },
    wallet_balance_text: {
        fontSize: window.width / 5,
        fontFamily: 'Louis',
        color: '#8F8F8F'
    },
    x_button_container: {
        zIndex: 1,
        position: 'absolute',
        // backgroundColor: '#333333',
        left: window.width  / 18,
        top: window.height / 18,
        width: window.width / 13,
        height: window.width / 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    x_button: {
        width: window.width / 15,
        height: window.width / 15
    },
    x_button_text: {
        color: 'white',
        textAlign: 'center'
    },
    chart_container: {
        position: 'absolute',
        top: window.height / 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    chart: {
        paddingRight: 0,
        left: 0
    },
    chart_interface: {
        position: 'absolute',
        top: window.height / 3,
        width: window.width,
        borderRadius: 10,
        height: window.height / 20,
        backgroundColor: '#535353'
    }
})