import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';

const window = Dimensions.get('window')
const x_button = require('../assets/img/x_button02.png')

export default function Settings({ navigation, route }) {

    const [logout_toggle, setLoggout_toggle] = useState(false)
	
	const location = route.params.location

    const goBack = () => {
		navigation.navigate(location)
	}

    const logOut = () => {
        setLoggout_toggle(true)
    }

    const no_toggle = () => {
        setLoggout_toggle(false)
    }
    
    const yes_toggle = () => {
        // logout function
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
            <Pressable style={styles.option1}>
                <Text style={styles.option1_text}>Privacy & Security</Text>
            </Pressable>
            <Pressable style={styles.option0}>
                <Text style={styles.option1_text}>Notifications</Text>
            </Pressable>
            <Pressable style={styles.option1}>
                <Text style={styles.option1_text}>Data Usage</Text>
            </Pressable>
            <Pressable style={styles.option0}>
                <Text style={styles.option1_text}>Account</Text>
            </Pressable>
            <Pressable style={styles.option1}>
                <Text style={styles.option1_text}>About</Text>
            </Pressable>
            <Pressable onPress={logOut} style={styles.logout_container}>
                <Text style={styles.logout} >Logout</Text>
                <View style={styles.logout_shadow}/>
            </Pressable>
            {logout_toggle && 
            <View style={styles.confirmation}>
                <Text style={styles.logout_text}>LogOut?</Text>
                <View style={styles.buttons}>
                    <Pressable onPress={yes_toggle} style={styles.yes_button}>
                        <Text style={styles.toggle_text} >yes</Text>
                    </Pressable>
                    <View style={styles.middle}/>
                    <Pressable onPress={no_toggle} style={styles.no_button}>
                        <Text style={styles.toggle_text} >no</Text>
                    </Pressable>
                </View>
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#424242',
        alignItems: 'center'
    },
    settings_header: {
        // top: window.height / 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    x_button_container: {
        // backgroundColor: '#333333',
        width: window.width / 13,
		height: window.width / 13,
        justifyContent: 'center',
		alignItems: 'center',
		top: window.height / 17,
		right: window.width / 2.5
    },
    x_button: {
        position: 'absolute',
        width: window.width / 15,
		height: window.width / 15
    },
    settings_title: {
        position: 'absolute',
        top: window.height / 17,
        fontFamily: 'Louis',
        fontSize: window.width / 15
    },
    option1: {
        zIndex: 2,
        top: window.height / 14,
        width: '100%',
        height: window.width / 5,
        backgroundColor: '#424242',
        borderRadius: 10,
        // alignItems: 'center',
        justifyContent: 'center'
    },
    option0: {
        zIndex: 1,
        top: window.height / 14,
        width: '100%',
        height: window.width / 5,
        backgroundColor: '#3D3D3D',
        borderRadius: 10,
        // alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowRadius: 15,
        shadowOpacity: 1,
        shadowOffset: {height: .5}
    },
    option1_text: {
        fontSize: window.width / 20,
        fontFamily: 'Louis',
        left: window.width / 15
    },
    logout_container: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: window.height / 1.114,
        left: window.width / 1.7,
        width: 150,
        height: 60,
    },
    logout_shadow: {
        position: 'absolute',
        width: 150,
        height: 60,
        backgroundColor: 'transparent',
        borderWidth: 7,
        borderColor: '#424242',
        overflow: 'hidden',
        shadowColor: '#191919',
        shadowRadius: 2,
        shadowOffset: {height: -.5},
        borderRadius: 20,
        shadowOpacity: 1
    },
    logout: {
        fontSize: window.width / 21,
        fontFamily: 'Louis',
        color: '#999999',
    },
    confirmation: {
        zIndex: 3,
        bottom: window.height / 3,
        width: window.width / 1.2,
        height: window.height / 4,
        borderRadius: 25,
        shadowOpacity: 1,
        shadowColor: '#111111',
        shadowRadius: 3,
        shadowOffset:{height: .5},
        backgroundColor: '#323232',
        alignItems: 'center'
    },
    logout_text: {
        position: 'absolute',
        fontSize: window.width / 10,
        fontFamily: 'Louis',
        color: '#999999',
        top: window.width / 10
    },
    buttons: {
        top: window.width / 3,
        flexDirection: 'row'
    },
    yes_button: {
        backgroundColor: '#A7A7A7',
        height: window.width / 10,
        width: window.width / 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    middle: {
        width: 20
    },
    no_button: {
        backgroundColor: '#A7A7A7',
        height: window.width / 10,
        width: window.width / 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    toggle_text: {
        color: '#626262',
        fontFamily: 'Louis',
        fontSize: window.width / 17
    }
})