import React from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, Button, StatusBar, Image, Pressable, Dimensions } from 'react-native';
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
			<Pressable onPress={plus_press} activeOpacity={1} style={styles.postButton} >
				<Image 
				style={styles.plus_sign}
				source={plus_img}/>
				<LinearGradient 
				style={styles.postButton_grad} 
				colors={['#CFCFCF', '#777777']}
				start={{ x: 0, y: 1}}/>
			</Pressable>
		</View>
	  );
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
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
	}
});

export default Home