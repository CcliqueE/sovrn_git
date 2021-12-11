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
	
    

    var username = '12345678912345'
    if (username.length >= 15) {
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
                    <Image 
                    source={profile_img} 
                    style={styles.profile_img}/>
                    <View style={styles.user_stat} >
                    <View style={styles.username_container} >
                        <Text style={styles.username}>{username}</Text>
                    </View>
                        <View style={styles.stats}>
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
                            <View style={styles.btns_middle} />
                            <Pressable onPress={editProfile_press} style={styles.editprof_btn}>
                                <Text style={styles.editprof_text}>Edit Profile</Text>
                            </Pressable>
                        </View>
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
        backgroundColor: '#535353',
    },
    truth_title: {
        top: window.height / 20 - 10,
        left: 1,
        fontSize: 37,
        fontFamily: 'LinLibertime',
        color: '#C2C2C2'
    },
    postButton: {
		position: 'absolute',
		top: 40,
		left: 15,
		width: 65,
        height: 65,
        backgroundColor: "#ffffff",
        shadowColor: "#000000",
        shadowOpacity: 1.0,
        shadowRadius: 2,
		borderRadius: 50,
		backgroundColor: '#828282',
		overflow: 'hidden'
	},
	postButton_grad: {
		right: 20,
		width: 170,
		height: '100%',
        justifyContent: 'center'
	},
	plus_sign: {
		height: 30,
		width: 30,
        left: 37.5,
		overflow: 'hidden'
	},
    user_stat: {
        justifyContent: 'center',
        alignItems: 'center',
        left: 50,
        top: 5,
        
    },
    profile_container: {
        width: '100%',
        height: window.height / 2.7,
        top: 0,
        backgroundColor: '#424242',
        alignItems: 'center'
    },
    profile_container02: {
        top: window.height / 20 - 100,
        alignItems: 'center'
    },
    gear_icon: {
        position: 'absolute',
        width: 25,
        height: 35,
        left: window.width / 2 - 45,
        top: window.height / 7.5
    },
    dm_icon: {
        position: 'absolute',
        width: 33,
        height: 25,
        left: window.width / 2 - 50,
        top: window.height / 12
    },
    profile_img: {
        position: 'absolute',
        height: 85,
        width: 85,
        right: window.width - 170,
        borderRadius: 50,
        top: 140
    },
    username_container: {
        width: 185,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    username: {
        fontSize: 27,
        top: 130,
        left: 0,
        textAlign: 'center',
        fontFamily: 'Louis',
        color: '#C2C2C2'
    },
    stats: {
        flexDirection: 'row',
        top: 140,
        left: 0
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
        fontSize: 20,
        fontFamily: 'Louis',
        color: 'black'

    },  
    profile_btns: {
        top: 165,
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
        fontSize: 27,
        top: 1,        
        fontFamily: 'Louis',
        color: '#424242'
    },
    editprof_text: {
        fontSize: 27,
        fontFamily: 'Louis',
        left: 2,
        top: 1,
        color: '#424242'
    }
})