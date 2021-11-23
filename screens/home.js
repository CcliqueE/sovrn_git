import React from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, Button, StatusBar, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const plus_img = require('../assets/img/plus_sign.png')


function Home({ navigation }) {

	const plus_press = () => {
		navigation.navigate('create_post')
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
	}
});

export default Home