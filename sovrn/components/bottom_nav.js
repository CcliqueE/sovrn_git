import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home'
import Discover from '../screens/discover'
import Notification from '../screens/notification';
import Profile from '../screens/profile'

const window = Dimensions.get('window')

const Tab = createBottomTabNavigator()

export default function Bottom_Nav() {

	return (
		<Tab.Navigator 
		screenOptions={{
			tabBarShowLabel: false,
			tabBarStyle: [styles.container]

		}} >
			<Tab.Screen name="home" component={Home} options={{ headerStyle: {height: 0}, animationEnabled: false,
			tabBarIcon: ({ focused }) => (
				<View style={styles.icon_flow}>
					{focused ? <Image 
					style={styles.home_icon}
					source={require('../assets/img/home_icon_light.png')}
					/> :
					<Image 
					style={styles.home_icon}
					source={require('../assets/img/home_icon.png')}
					/>}
				</View>
			)}} />
			<Tab.Screen name="discover" component={Discover} options={{ headerStyle: {height: 0}, animationEnabled: false,
			tabBarIcon: ({ focused }) => (
				<View style={styles.icon_flow}>
					{focused ? <Image 
					style={styles.discover_icon}
					source={require('../assets/img/look_glass_light.png')}
					/> :
					<Image 
					style={styles.discover_icon}
					source={require('../assets/img/looking_glass_4.png')}
					/>}
				</View>
			)}} />
			<Tab.Screen name="notification" component={Notification} options={{ animationEnabled: false,
			tabBarIcon: ({ focused }) => (
				<View style={styles.icon_flow}>
					{focused ? <Image 
					style={styles.noti_icon}
					source={require('../assets/img/notification_icon_light.png')}
					/> :
					<Image 
					style={styles.noti_icon}
					source={require('../assets/img/notification_icon_3.png')}
					/>}
				</View>
			)}} />
			<Tab.Screen name="profile" component={Profile} options={{ headerStyle: {height: 0}, animationEnabled: false,
			tabBarIcon: ({ focused }) => (
				<View style={styles.icon_flow}>
					{focused ? <Image 
					style={styles.profile_icon}
					source={require('../assets/img/profile_icon_light.png')}
					/> :
					<Image 
					style={styles.profile_icon}
					source={require('../assets/img/profile_icon.png')}
					/>}
				</View>
			)}} />
		</Tab.Navigator>
	)
}

const styles = StyleSheet.create({
    container: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: window.height / 10,
		backgroundColor: '#444444',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderTopWidth: 0
    },
	icon_flow: {
		justifyContent: 'center',
		alignItems: 'center',
		top: window.height / 140
	},
	home_icon: {
		width: window.width / 15,
		height: window.width / 15
	},
	discover_icon: {
		// left: 100,
		width: window.width / 15,
		height: window.width / 14
	},
	noti_icon: {
		width: window.width / 13,
		height: window.width / 15
	},
	profile_icon: {
		width: window.width / 15,
		height: window.width / 13
	}
  });
  