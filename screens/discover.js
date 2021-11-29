import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, TextInput, ScrollView, Keyboard, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import { ScreenStackHeaderRightView } from 'react-native-screens';

import Recommended from '../components/recommended'
import Trending from '../components/trending'
import News from '../components/news'

export default function Discover({ navigation }) {

	const [search_input, setText] = useState('')
	const [screen, setScreen] = useState('recommended')

	const trending_press = () => {
		setScreen('trending')
	}

	const news_press = () => {
		setScreen('news')
	}

	const [loaded] = useFonts({
        'Louis': require('../assets/fonts/Louis_George_Cafe.ttf'),
        'LinLibertime': require('../assets/fonts/LinLibertime.ttf')
    })

	return (
		<View style={styles.container}>
    		<StatusBar barStyle="light-content" />
			<View style={styles.search_container} >
				<View style={styles.search_bar} >
					<TextInput selectionColor="#535353" defaultValue={search_input} onChangeText={search_input => setText(search_input)} style={styles.search_input} />
					
				</View>
				<View style={styles.interest_tabs} >
						<Pressable onPress={trending_press}>
							<Text style={styles.tab_text} >Trending</Text>
						</Pressable>
						<View style={styles.middle} />
						<Pressable onPress={news_press}>
							<Text style={styles.tab_text} >News</Text>
						</Pressable>
				</View>
			</View>
			<View style={styles.scroll_contianer} >
				<ScrollView onScrollBeginDrag={Keyboard.dismiss} onSubmitEditing={Keyboard.dismiss} style={styles.scroll} >
					<View style={styles.tansparency} ></View>

					{screen === 'recommended' ? <Recommended /> : <View/>}
					{screen === 'trending' ? <Trending/> : <View/>}
					{screen === 'news' ? <News/> : <View/>}
					
				</ScrollView>
			</View>
			
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#535353',
		alignItems: 'center',
	},
	search_container: {
		zIndex: 2,
		position: 'absolute',
		top: 45,
		height: 80,
		width: 370,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#535353'
	},
	search_bar: {
		overflow: 'hidden',
		justifyContent: 'center',
		top: -10,
		width: 361,
		height: 35,
		borderRadius: 13,
		backgroundColor: '#6A6A6A'
	},
	search_input: {
		left: 10,
		fontSize: 20,
		fontFamily: 'Louis',
		color: 'black'
	},
	interest_tabs: {
		top: 1,
		flexDirection: 'row'
	},
	tab_text: {
		fontFamily: 'Louis'
	},
	middle: {
		width: 100
	},
	tansparency: {
		height: 155
	},
	scroll_contianer: {
		top: -30,
		width: '100%'
	},
	
	sample_block: {
		zIndex: 1,
		height: 900,
		width: 415,
		backgroundColor: 'blue'
	},
	sample_text: {
		color: 'black'
	}
});
