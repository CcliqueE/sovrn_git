import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';

const window = Dimensions.get('window')
const x_button = require('../assets/img/x-button.png')

export default function Settings({ navigation, route }) {
	
	const location = route.params.location

    const goBack = () => {
		navigation.navigate(location)
	}

    const [loaded] = useFonts({
        'Louis': require('../assets/fonts/Louis_George_Cafe.ttf'),
        'LinLibertime': require('../assets/fonts/LinLibertime.ttf')
    })

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.settings_header}>
                <Pressable onPress={goBack} style={styles.x_button_container}>
                    <Image source={x_button} style={styles.x_button}/>
                </Pressable>
                <Text style={styles.settings_title}>Settings</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'gray'
    },
    settings_header: {
        top: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    x_button_container: {
        // backgroundColor: 'black',
        width: 50,
		height: 50,
        justifyContent: 'center',
		alignItems: 'center',
		top: 40,
		right: window.width / 2.5
    },
    x_button: {
        width: 26,
		height: 26
    },
    settings_title: {
        fontFamily: 'Louis',
        fontSize: 25
    }
})