import React from 'react';
import { StyleSheet, Text, View, Dimensions, Pressable, Image } from 'react-native';

const window = Dimensions.get('window')
const x_button = require('../assets/img/x_button02.png')

export default function Followers({ navigation, route }) {
	
	const location = route.params.location

    const goBack = () => {
		navigation.navigate(location)
	}

    return (
        <View style={styles.container}>
            <View style={styles.following_header}>
                <Pressable onPress={goBack} style={styles.x_button_container}>
                        <Image source={x_button} style={styles.x_button}/>
                </Pressable>
                <Text style={styles.following_title}>Following</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: window.height,
        width: window.width,
        backgroundColor: '#424242'
    },
    following_header: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    following_title: {
        position: 'absolute',
        top: window.height / 17,
        fontFamily: 'Louis',
        fontSize: window.width / 15
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
})