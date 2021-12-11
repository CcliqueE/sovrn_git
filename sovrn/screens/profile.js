import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, Pressable, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import axios from 'axios'

const window = Dimensions.get('window')

const profile_img = require('../assets/img/user_profile_template.png')
const plus_img = require('../assets/img/plus_sign.png')
const gear_icon = require('../assets/img/gear_icon_2.png')
const dm_icon = require('../assets/img/dm_icon_2.png')

export default function Profile({ navigation }) {
	
    var username = 'schaffer_luke'
    if (username.length >= 17) {
        username = 'err'
    }

    const plus_press = () => {
		navigation.navigate('create_post', {
            location: 'profile'
        })
	}
    
    const settings_press = () => {
		navigation.navigate('settings', {
            location: 'profile'
        })
	}

    const directMsg_press = () => {
		navigation.navigate('direct_msg')
	}

    const followers_stats = () => {
		navigation.navigate('followers')
	}

    const following_stats = () => {
		navigation.navigate('following')
	}

    const wallet_press = () => {
		navigation.navigate('wallet')
	}

    const editProfile_press = () => {
		navigation.navigate('edit_profile')
	}

    const [loaded] = useFonts({
        'Louis': require('../assets/fonts/Louis_George_Cafe.ttf'),
        'LinLibertime': require('../assets/fonts/LinLibertime.ttf')
    })

    if (!loaded) {
        return null;
    }

    // getDevice().then((device) => {
    //     console.log(device)
    // })

    return (
        <View style={styles.container}>
            <Pressable onPress={plus_press} style={styles.postButton} >
                <Image 
                style={styles.plus_sign}
                source={plus_img}/>
                <LinearGradient 
                style={styles.postButton_grad}
                colors={['#CFCFCF', '#777777']}
                start={{ x: 0, y: 1}}/>
            </Pressable>
            <View style={styles.profile_container}>
                <Text style={styles.truth_title} >sovrn</Text>
                <View style={styles.profile_container02}>
                    <Pressable onPress={settings_press} >
                        <Image 
                        source={gear_icon} 
                        style={styles.gear_icon}/>
                    </Pressable>
                    <Pressable onPress={directMsg_press} >
                        <Image 
                        source={dm_icon} 
                        style={styles.dm_icon}/>
                    </Pressable>
                <View style={styles.user_stat}>
                    <Image 
                    source={profile_img} 
                    style={styles.profile_img}/>
                    <View style={styles.stats}>
                    <View style={styles.username_container} >
                        <Text style={styles.username}>{username}</Text>
                    </View>
                        <Pressable onPress={followers_stats}>
                            <View style={styles.followers}>
                                <Text style={styles.stats_text}>Followers</Text>
                                <View style={styles.follow_line}/>
                                <Text style={styles.stats_text}>120</Text>
                            </View>
                        </Pressable>
                        <View style={styles.stats_middle}/>
                        <Pressable onPress={following_stats} > 
                            <View style={styles.following}>
                                <Text style={styles.stats_text}>Following</Text>
                                <View style={styles.follow_line}/>
                                <Text style={styles.stats_text}>70</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.profile_btns} >
                    <Pressable onPress={wallet_press} style={styles.wallet_btn}>
                        <Text style={styles.wallet_text}>Wallet</Text>
                    </Pressable>
                    <View style={styles.btns_middle}/>
                        <Pressable onPress={editProfile_press} style={styles.editprof_btn}>
                            <Text style={styles.editprof_text}>Edit Profile</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#535353',
    },
    truth_title: {
        position: 'absolute',
        top: window.height / 20 - 10,
        fontSize: window.width / 10,
        fontFamily: 'LinLibertime',
        color: '#C2C2C2',
        textAlign: 'center'
    },
    postButton: {
        zIndex: 1,
		position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
		top: window.height / 22,
		right: window.width / 1.25,
		width: window.width / 6,
        height: window.width / 6,
        backgroundColor: "#ffffff",
        shadowColor: "#000000",
        shadowOpacity: 1.0,
        shadowRadius: 2,
		borderRadius: 50,
		backgroundColor: '#828282',
		overflow: 'hidden'
	},
	postButton_grad: {
        position: 'absolute',
		left: -window.width / 10,
		width: window.width / 2,
		height: '100%'
	},
	plus_sign: {
        zIndex: 1,
        // position: 'absolute',
        height: window.width / 13,
		width: window.width / 13,
        // left: window.width / 10.5,
		// overflow: 'hidden'
	},
    user_stat: {
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        // height: 10,
        // left: 50,
        top: window.height / 7,
        
    },
    profile_container: {
        width: '100%',
        height: window.height / 2.8,
        // top: 0,
        backgroundColor: '#424242',
        alignItems: 'center'
    },
    profile_container02: {
        // top: window.height / 20 - 100,
        alignItems: 'center'
    },
    dm_icon: {
        position: 'absolute',
        width: window.width / 12,
        height: window.width / 16,
        left: window.width / 2 - 50,
        top: window.height / 17
    },
    gear_icon: {
        position: 'absolute',
        width: window.width / 12,
        height: window.width / 11,
        left: window.width / 2 - 50,
        top: window.height / 9.5
    },
    profile_img: {
        // position: 'absolute',
        height: window.width / 5,
        width: window.width / 5,
        right: window.width / 20,
        borderRadius: 50,
        // top: window.height / 6
    },
    username_container: {
        position: 'absolute',
        bottom: window.height / 13,
        width: window.width / 2,
        
        // height: window.height / 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    username: {
        fontSize: window.width / 17,
        textAlign: 'center',
        right: 6,
        fontFamily: 'Louis',
        color: '#C2C2C2'
    },
    stats: {
        flexDirection: 'row',
        top: window.height / 60,
        // left: 0,
        // width: 
    },
    follow_line: {
        backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 50,
        width: '105%',
        marginTop: 7,
        marginBottom: 5

    },
    followers: {
        alignItems: 'center'
    },
    stats_middle: {
        width: 20
    },
    following: {
        alignItems: 'center'
    },
    stats_text: {
        // position: 'absolute',
        fontSize: window.width / 19,
        fontFamily: 'Louis',
        color: 'black',
        // width: 100

    },  
    profile_btns: {
        position: 'absolute',
        top: window.height / 3.6,
        flexDirection: 'row',
        
    },
    btns_middle: {
        width: 25
    },
    wallet_btn: {
        overflow: 'hidden',
        borderRadius: 5,
        alignItems: 'center',
		backgroundColor: '#8F8F8F',
        width: window.width / 3,
        height: window.height / 20,
        justifyContent: 'center',
        alignItems: 'center'

    },
    editprof_btn: {
        overflow: 'hidden',
        borderRadius: 5,
        alignItems: 'center',
		backgroundColor: '#8F8F8F',
        width: window.width / 2.3,
        height: window.height / 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wallet_text: {
        fontSize: window.height / 30,
        top: 1,        
        fontFamily: 'Louis',
        color: '#424242'
    },
    editprof_text: {
        fontSize: window.height / 30,
        fontFamily: 'Louis',
        left: 2,
        top: 1,
        color: '#424242'
    }
})