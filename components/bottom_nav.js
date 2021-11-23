import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home'
import Discover from '../screens/discover'
import Notification from '../screens/notification';
import Profile from '../screens/profile'

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
			<Tab.Screen name="discover" component={Discover} options={{ animationEnabled: false,
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
		height: 80,
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
		top: 7
	},
	home_icon: {
		width: 25,
		height: 25
	},
	discover_icon: {
		width: 25,
		height: 27
	},
	noti_icon: {
		width: 28,
		height: 25
	},
	profile_icon: {
		width: 25,
		height: 28
	}
  });
  