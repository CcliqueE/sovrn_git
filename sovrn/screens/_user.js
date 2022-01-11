import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, Pressable, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context';

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
		navigation.navigate('direct_msg', {
            location: 'profile'
        })
	}

    const followers_stats = () => {
		navigation.navigate('followers', {
            location: 'profile'
        })
	}

    const following_stats = () => {
		navigation.navigate('following', {
            location: 'profile'
        })
	}

    const wallet_press = () => {
		navigation.navigate('wallet', {
            location: 'profile'
        })
	}

    const editProfile_press = () => {
		navigation.navigate('edit_profile', {
            location: 'profile'
        })
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
            <SafeAreaView style={styles.profile_container}>
                <SafeAreaView style={styles.postButton_container0}>
                    <View style={styles.postButton_container}>
                        <Pressable onPress={plus_press} style={styles.postButton} >
                            <Image 
                            style={styles.plus_sign}
                            source={plus_img}/>
                            <LinearGradient 
                            style={styles.postButton_grad}
                            colors={['#CFCFCF', '#777777']}
                            start={{ x: 0, y: 1}}/>
                        </Pressable>
                    </View>
                </SafeAreaView>
                <SafeAreaView style={styles.truth_title_container}>
                    <Text style={styles.truth_title} >sovrn</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.profile_container02}>
                    <SafeAreaView style={styles.gear_dm_container}>
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
                    </SafeAreaView>
                </SafeAreaView>
                {/* Post Button Shadow */}
                <View style={{position: 'absolute', left: window.width / 30}}>
                    <SafeAreaView style={{height: window.width / 6.25}}/>
                    <View style={styles.postButton_shadow}/>
                </View>
                <SafeAreaView style={styles.user_stat}>
                    <SafeAreaView style={{height: window.width / 4}}/>    
                    <View style={styles.user_stat2}>
                        <Image 
                        source={profile_img} 
                        style={styles.profile_img}/>
                        <View style={styles.stats}>
                            <View style={{alignItems: 'center', bottom: window.height / 40}}>
                                <View style={{}}>
                                    <Text style={styles.username}>{username}</Text>
                                </View>
                            <View style={{flexDirection: 'row'}}>
                            <Pressable style={styles.followers} onPress={followers_stats}>
                                    <Text style={styles.stats1_text}>Followers</Text>
                                    <View style={styles.follow_line}/>
                                    <Text style={styles.stats2_text}>120</Text>
                            </Pressable>
                            <View style={styles.stats_middle}/>
                            <Pressable style={styles.following} onPress={following_stats} > 
                                    <Text style={styles.stats1_text}>Following</Text>
                                    <View style={styles.follow_line}/>
                                    <Text style={styles.stats2_text}>70</Text>
                            </Pressable>
                            </View>
                            </View>
                        </View>
                    </View>
                <SafeAreaView style={styles.profile_btns} >
                    <SafeAreaView style={{height: window.width / 4.5}}/>
                    <View style={styles.profile_btns2}>
                    <Pressable onPress={wallet_press} style={styles.wallet_btn}>
                        <Text style={styles.wallet_text}>Wallet</Text>
                        <View style={styles.notification_pop}>
                            <LinearGradient 
                            style={styles.notification_pop_gradient} 
                            colors={['black', '#292929']} 
                            start={{x: 1, y: 0}}/>
                        </View>
                    </Pressable>
                    <View style={styles.btns_middle}/>
                    <Pressable onPress={editProfile_press} style={styles.editprof_btn}>
                        <Text style={styles.editprof_text}>Edit Profile</Text>
                    </Pressable>
                    </View>
                </SafeAreaView>
                </SafeAreaView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#535353',
    },
    truth_title_container: {
        position: 'absolute',
        top: 0,
        height: window.height / 12,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: window.width
    },
    truth_title: {
        position: 'absolute',
        // top: window.height / 20 - 10,
        fontSize: window.width / 10,
        fontFamily: 'LinLibertime',
        color: '#C2C2C2',
        textAlign: 'center'
    },
    postButton_container0: {
        position: 'absolute',
        zIndex: 2,
        width: window.width / 6,
        height: window.width / 10,
        justifyContent: 'flex-end',
        // overflow: 'hidden',
        // justifySelf: 'flex-start'
        // display: 'flex-start'
        // top: window.height / 23,
        top: 0,
        left: window.width / 30
    },  
    postButton_container: {
        // position: 'absolute',
        zIndex: 2,
        width: window.width / 6,
        height: window.width / 6,
        overflow: 'hidden',
        // justifySelf: 'flex-start'
        // display: 'flex-start'
        // top: window.height / 23,
        top: window.height / 14,
        // left: window.width / 30
        borderRadius: 50
    },  
    postButton: {
        zIndex: 3,
		position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
		// top: window.height / 22,
		// right: window.width / 1.25,
		width: window.width / 6,
        height: window.width / 6,
        backgroundColor: "#ffffff",
		borderRadius: 50,
		backgroundColor: '#828282',
		overflow: 'hidden'
	},
    postButton_shadow: {
        // zIndex: 3,
        // position: 'absolute',
        backgroundColor: 'black',
        borderRadius: 50,
        width: window.width / 6,
        height: window.width / 6,
        // top: window.height / 20,
        top: -window.width / 10,
        // right: window.width / 1.25,
        // left: window.width / 30,
        shadowOpacity: 1,
        shadowColor: '#252525',
        shadowRadius: 3,
        shadowOffset: {height: 0}
    },
	postButton_grad: {
        // zIndex: 1,
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
    profile_container: {
        width: '100%',
        height: window.height / 2.9,
        // top: 0,
        // bottom: window.height / 15,
        // position: 'absolute',
        backgroundColor: '#424242',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    user_stat: {
        // overflow: 'hidden',
        // flexDirection: 'row',
        position: 'absolute',
        // height: window.height / 10,
        // top: window.height / 100,
        top: window.width / 6.5,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // height: 10,
        // left: 50,
        // bottom: window.height / 10,
        // zIndex: 3
        
    },
    user_stat2: {
        bottom: window.width / 4.5,
        zIndex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        
    },
    profile_container02: {
        // top: window.height / 20 - 100,
        // alignItems: 'center',
        // bottom: window.height / 4
        // backgroundColor: 'white',
        // width: 10,
        // height: 10,
        zIndex: 3
    },
    gear_dm_container: {
        // backgroundColor: 'black',
        position: 'absolute',
        // width: window.width / 2,
        height: window.height / 16,
        // backgroundColor: 'black',
        // bottom: window.height / 3.2,
        top: -window.height / 21,
        left: window.width / 2 - window.width / 7,
        justifyContent: 'flex-end',
    },
    dm_icon: {
        position: 'absolute',
        width: window.width / 12,
        height: window.width / 16,
        // left: window.width / 2 - 50,
        // top: window.height / 250
    },
    gear_icon: {
        position: 'absolute',
        width: window.width / 12,
        height: window.width / 11,
        // left: window.width / 2 - 50,
        top: window.height / 20,
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
        // position: 'absolute', 
        // // bottom: window.width / 8,
        // // top: -window.height / 25,
        // bottom: window.height / 20,
        width: window.width / 2,
        position: 'absolute',
        // height: window.height / 5,
        // top: wi,
        // top: -window.width / 9,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // height: window.height / 500,
        // height: window.height / 15,
        // justifyContent: 'flex-end',
        // alignItems: 'center',
        // justifyContent: 'center'
        // textAlign: 'center'
    },
    username: {
        // position: 'absolute',
        fontSize: window.width / 17,
        // textAlignVertical: 'top',
        // height: window.height/ 10,
        // right:  window.width / 70,
        // bottom: window.height / 10,

        fontFamily: 'Louis',
        color: '#C2C2C2',
        // marginBottom: window.width / 40
    },
    username2: {
        // bottom: window.width / 8,2
        // flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    stats: {
        flexDirection: 'row',
        top: window.height / 50,
        // left: 0,
        // width: 
    },
    follow_line: {
        backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 50,
        width: '105%',
        marginBottom: window.width / 100,
        marginTop: window.width / 100
        // top: window.width / 60,
        // bottom: window.width / 60

    },
    followers: {
        // marginBottom: window.width / 60,
        // bottom: window.height / 20,
        alignItems: 'center',
        // height: 100,
        // width: '100%',
        // backgroundColor: 'black'
    },
    stats_middle: {
        width: window.width / 20
    },
    following: {
        alignItems: 'center'
    },
    stats1_text: {
        // position: 'absolute',
        // marginBottom: window.height / 100,
        // marginTop: window.width / 15,
        fontSize: window.width / 19,
        // width: 100,
        fontFamily: 'Louis',
        color: 'black',
        // width: 100

    },
    stats2_text: {
        // position: 'absolute',
        // marginBottom: window.height / 100,
        // marginTop: window.height / 100,
        fontSize: window.width / 19,
        // width: 100,
        fontFamily: 'Louis',
        color: 'black',
        // width: 100

    },  
    profile_btns: {
        position: 'absolute',
        top: window.height / 10.5,
        // zIndex: 2,
        // top: 0,
        // flexDirection: 'row',
        justifyContent: 'flex-end',
        // alignItems: 'flex-end',s
        // height: 300,
        // backgroundColor: 'black'
        
    },
    profile_btns2: {
        // position: 'absolute',
        // top: 0,
        // zIndex: 2,
        // bottom: -window.height / 15,
        bottom: window.width / 9,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // alignItems: 'flex-end',
        // backgroundColor: 'black'
        
    },

    btns_middle: {
        width: window.width / 14
    },
    wallet_btn: {
        // overflow: 'hidden',
        borderRadius: 5,
        alignItems: 'center',
		backgroundColor: '#8F8F8F',
        width: window.width / 3,
        height: window.height / 20,
        justifyContent: 'center',
        // alignItems: 'center',
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset: {height: 0},
        shadowColor: 'black'
    },
    notification_pop: {
        zIndex: 1,
        position: 'absolute',
        overflow: 'hidden',
        width: window.width / 20,
        height: window.width / 20,
        left: -7,
        top: -7,
        borderRadius: 50,
        backgroundColor: '#222222',
        
    },
    notification_pop_gradient: {
        width: 30,
        height: '100%',
        // borderRadius: 50,
        // shadowColor: 'black',
        // shadowOpacity: 1,
        // shadowRadius: 10
        // right: 35
    },
    editprof_btn: {
        // position: 'absolute',
        // overflow: 'hidden',
        borderRadius: 5,
        // alignItems: 'center',
		backgroundColor: '#8F8F8F',
        width: window.width / 2.3,
        height: window.height / 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset: {height: 0},
        shadowColor: 'black'
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