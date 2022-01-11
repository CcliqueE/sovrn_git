import React from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, Button, StatusBar, Image, Pressable, Dimensions, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const plus_img = require('../assets/img/plus_sign.png')

const window = Dimensions.get('window')

function Home({ navigation }) {

	const plus_press = () => {
		navigation.navigate('create_post', {
			location: 'home'
		})
	}

	return (
		<View style={styles.container}>
			<StatusBar barStyle='dark-content' />
			<SafeAreaView />
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
			<SafeAreaView style={{position: 'absolute', left: window.width / 30}}>
				{/* <SafeAreaView/> */}
				<View style={styles.postButton_shadow}/>
			</SafeAreaView>
		</View>
	  );
}


const styles = StyleSheet.create({
	container: {
		// flex: 1,
		backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
		postButton_container0: {
			position: 'absolute',
			zIndex: 2,
			width: window.width / 6,
			// height: window.width / 3.5,
			justifyContent: 'flex-end',
			// overflow: 'hidden',
			// justifySelf: 'flex-start'
			// display: 'flex-start'
			// top: window.height / 23,
			// top: window.width / 14,
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
			// top: window.height / 20,
			// left: window.width / 30
			borderRadius: 50
		},  
		postButton: {
			zIndex: 3,
			// position: 'absolute',
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
			position: 'absolute',
			backgroundColor: 'black',
			borderRadius: 50,
			width: window.width / 6,
			height: window.width / 6,
			// top: window.height / 14,
			// top: -window.width / 10,
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
});

export default Home