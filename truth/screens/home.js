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
		position: 'absolute',
		top: 0,
		left: 0,
		width: window.width / 4.7,
        height: window.height / 9.5,
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
		height: 33,
		width: 33,
		top: window.height / 20,
		left: window.width / 8.5,
		overflow: 'hidden'
	}
});

export default Home