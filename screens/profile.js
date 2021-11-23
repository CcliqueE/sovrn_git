import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

const profile_img = require('../assets/img/user_profile_template.png')
const plus_img = require('../assets/img/plus_sign.png')
const gear_icon = require('../assets/img/gear_icon_2.png')
const dm_icon = require('../assets/img/dm_icon_2.png')

export default function Profile({ navigation }) {
	
    const plus_press = () => {
		navigation.navigate('create_post')
	}

    const [loaded] = useFonts({
        'Louis': require('../assets/fonts/Louis_George_Cafe.ttf')
    })

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile_container}>
                <Pressable>
                    <Image 
                    source={gear_icon} 
                    style={styles.gear_icon}/>
                </Pressable>
                <Pressable>
                    <Image 
                    source={dm_icon} 
                    style={styles.dm_icon}/>
                </Pressable>
                <Image 
                source={profile_img} 
                style={styles.profile_img}/>
                <Text style={styles.username} >John Smith</Text>
                <Text style={styles.user_role} >Founder</Text>
                <View style={styles.stats}>
                    <View style={styles.followers}>
                        <Text style={styles.stats_text}>Followers</Text>
                        <View style={styles.follow_line}/>
                        <Text style={styles.stats_text}>120</Text>
                    </View>
                    <View style={styles.following}>
                        <Text style={styles.stats_text}>Following</Text>
                        <View style={styles.follow_line}/>
                        <Text style={styles.stats_text}>70</Text>
                    </View>
                </View>
                <View style={styles.profile_btns} >
                    <Pressable style={styles.wallet_btn}>
                        <LinearGradient 
                        style={styles.profButton_grad} 
                        colors={['#A8A8A8', '#777777']}
                        start={{ x: 0, y: 1}}>
                            <Text style={styles.wallet_text}>Wallet</Text>
                        </LinearGradient>
                    </Pressable>
                    <Pressable style={styles.editprof_btn}>
                        <LinearGradient 
                        style={styles.profButton_grad} 
                        colors={['#A8A8A8', '#777777']}
                        start={{ x: 0, y: 1}}>
                            <Text style={styles.editprof_text}>Edit Profile</Text>
                        </LinearGradient>
                    </Pressable>
                </View>
            </View>
            <Pressable onPress={plus_press} style={styles.postButton} >
                <LinearGradient 
                style={styles.postButton_grad} 
                colors={['#CFCFCF', '#777777']}
                start={{ x: 0, y: 1}}>
                    <Image 
                    style={styles.plus_sign}
                    source={plus_img}/>
                </LinearGradient>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#535353'
    },
    postButton: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: 92,
		height: 100,
		borderBottomRightRadius: 50,
		backgroundColor: '#828282',
		overflow: 'hidden'
	},
	postButton_grad: {
		right: 20,
		width: 170,
		height: '100%',
	},
	plus_sign: {
		height: 40,
		width: 40,
		top: 45,
		left: 45,
		overflow: 'hidden'
	},
    profile_container: {
        width: '100%',
        height: 450,
        top: 0,
        backgroundColor: '#424242',
        alignItems: 'center'
    },
    gear_icon: {
        position: 'absolute',
        width: 37,
        height: 37,
        right: 70,
        top: 40
    },
    dm_icon: {
        position: 'absolute',
        width: 33,
        height: 25,
        left: 150,
        top: 46
    },
    profile_img: {
        height: 85,
        width: 85,
        right: 0,
        top: 100,
        borderRadius: 50
    },
    username: {
        fontSize: 30,
        top: 110,
        fontFamily: 'Louis'
    },
    user_role: {
        fontSize: 30,
        top: 115,
        fontFamily: 'Louis',
        color: '#C2C2C2'
    },
    stats: {
        flexDirection: 'row',
        top: 135
    },
    follow_line: {
        backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 1.3,
        borderRadius: 50,
        width: '105%',
        marginTop: 7,
        marginBottom: 5

    },
    followers: {
        alignItems: 'center',
        paddingRight: 30
    },
    following: {
        alignItems: 'center'
    },
    stats_text: {
        fontSize: 25,
        fontFamily: 'Louis',
        color: '#C2C2C2'

    },  
    profile_btns: {
        top: 165,
        flexDirection: 'row',
        
    },
    profButton_grad: {
        left: 10
    },
    wallet_btn: {
        overflow: 'hidden',
        borderRadius: 5,
        right: 17,
		backgroundColor: '#A8A8A8',

    },
    wallet_text: {
        margin: 4,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 30,
        right: 10,
        fontFamily: 'Louis',
        color: '#3D3D3D'
    },
    editprof_btn: {
		overflow: 'hidden',
        borderRadius: 5,
        left: 17,
		backgroundColor: '#A8A8A8',
    },
    editprof_text: {
        margin: 4,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 30,
        right: 10,
        fontFamily: 'Louis',
        color: '#3D3D3D'
    }
})