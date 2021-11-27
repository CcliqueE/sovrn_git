import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, TextInput, ScrollView, Keyboard, Pressable } from 'react-native';
import { useFonts } from 'expo-font';

export default function Discover() {

	const [search_input, setText] = useState('')

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
						<Pressable>
							<Text>Trending</Text>
						</Pressable>
						<View style={styles.middle} />
						<Pressable>
							<Text>News</Text>
						</Pressable>
				</View>
			</View>
			<View style={styles.scroll_contianer} >
				<ScrollView onScrollBeginDrag={Keyboard.dismiss} style={styles.scroll} >
					<View style={styles.tansparency} ></View>

					<View style={styles.sample_block} ></View>
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
		top: 50,
		height: 70,
		width: 370,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#535353'
	},
	search_bar: {
		overflow: 'hidden',
		justifyContent: 'center',
		top: -6,
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
	middle: {
		width: 100
	},
	tansparency: {
		height: 160
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
