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
    
    const settings_press = () => {
		navigation.navigate('settings')
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

    return (
        <View style={styles.container}>
            <View style={styles.profile_container}>
                <Text style={styles.truth_title} >truth</Text>
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
                <Text style={styles.username} >John Smith</Text>
                <View style={styles.stats}>
                    <Pressable onPress={followers_stats} >
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
                <View style={styles.profile_btns} >
                    <Pressable onPress={wallet_press} style={styles.wallet_btn}>
                        <LinearGradient 
                        style={styles.wallet_grad} 
                        colors={['#8F8F8F', '#616161']}
                        start={{ x: 0, y: 1}}>
                            <Text style={styles.wallet_text}>Wallet</Text>
                        </LinearGradient>
                    </Pressable>
                    <View style={styles.btns_middle} />
                    <Pressable onPress={editProfile_press} style={styles.editprof_btn}>
                        <LinearGradient 
                        style={styles.edit_grad} 
                        colors={['#8F8F8F', '#616161']}
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
    truth_title: {
        position: 'absolute',
        top: 38,
        left: 169,
        fontSize: 40,
        fontFamily: 'LinLibertime',
        color: 'black'
    },
    postButton: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: 92,
		height: 100,
        height: 100,
        backgroundColor: "#ffffff",
        shadowColor: "#000000",
        shadowOpacity: 1.0,
        shadowRadius: 2,
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
        height: 415,
        top: 0,
        backgroundColor: '#424242',
        alignItems: 'center'
    },
    gear_icon: {
        position: 'absolute',
        width: 37,
        height: 37,
        right: 65,
        top: 43
    },
    dm_icon: {
        position: 'absolute',
        width: 33,
        height: 25,
        left: 150,
        top: 51
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
        top: 115,
        fontFamily: 'Louis',
        color: '#C2C2C2'
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
        alignItems: 'center'
    },
    stats_middle: {
        width: 30
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
    btns_middle: {
        width: 23
    },
    wallet_grad: {
        width: 120,
        height: 43,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    edit_grad: {
        width: 165,
        height: 43,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wallet_btn: {
        overflow: 'hidden',
        borderRadius: 5,
        alignItems: 'center',
		backgroundColor: '#8F8F8F',

    },
    wallet_text: {
        fontSize: 30,
        top: 1,        
        fontFamily: 'Louis',
        color: '#B2B2B2'
    },
    editprof_btn: {
		overflow: 'hidden',
        borderRadius: 5,
		backgroundColor: '#8F8F8F',
    },
    editprof_text: {
        fontSize: 30,
        fontFamily: 'Louis',
        left: 2,
        top: 1,
        color: '#B2B2B2'
    }
})