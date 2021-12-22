import React, { useEffect, useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Keyboard, Pressable, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { useScrollToTop } from '@react-navigation/native';

import Recommended from '../components/recommended'
import Trending from '../components/trending'
import News from '../components/news'
import { set } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const window = Dimensions.get('window')

export default function Discover({ navigation }) {

	const [search_input, setText] = useState('')
	const [show_results, setShow_results] = useState(false)
	const [search_results, setResults] = useState([])
	const [screen, setScreen] = useState('recommended')
	const [trending_color, setTrending_color] = useState('none')
	const [news_color, setNews_color] = useState('none')
	const [users, setUsers] = useState([])

	const scroll_ref = useRef('scroll_ref')

	const trending_press = () => {
		setScreen('trending')
	}

	const news_press = () => {
		setScreen('news')
	}

	const trending_change = () => {
		setTrending_color('gray')
		if(news_color !== 'none')
			setNews_color('#535353')
	}

	const news_change = () => {
		setNews_color('gray')
		if(trending_color !== 'none')
			setTrending_color('#535353')
	}

	const two_func_one = ( i ) => {
		setText(i);
		onInput(i);
	}

	const onInput = async ( i ) => {
		// setText(i)
		// console.log(i)
		// const input = i.toLowerCase()
		// console.log(input)
		if (i !== '') {
			try {
				const response = await fetch(
					'http://localhost:3000/discover', {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						username: 'jackson',
						input: i.toLowerCase()
					})
				})
				const arr = []
				var json = await response.json()
				// console.log(json[0].length)
				if (parseInt(json[0].length) !== 0) {
					var length_one = parseInt(json[0].length) - 1
					// var length_one = 
				}
				if (parseInt(json[1].length) !== 0) {
					var length_two = parseInt(json[1].length) - 1
					// var length_two = 1
				}
				for (let i = 0; i <= (parseInt(length_one)); i++) {
					arr.push(json[0][i])
				}
				for (let i = 0; i <= (parseInt(length_two)); i++) {
					arr.push(json[0][i])
				}
				console.log(arr)
				// console.log(arr)
				setResults(arr)
			} 
			catch (error) {
			// handle error
			console.log(error);
			}
		}
		
		// console.log(await response.json())
		// .then((res) => {console.log(res)})
		// .catch((err) => console.log(err))
		// console.log(response)
		
	};

	// console.log(search_results[0][0])


	const on_input_press = () => {
		if (show_results === false) {
			setShow_results(true)
		} else {
			setShow_results(false)
		}
	}
	
	// console.log(search_input)

	const [loaded] = useFonts({
		'Louis': require('../assets/fonts/Louis_George_Cafe.ttf'),
		// 'LinLibertime': require('../assets/fonts/LinLibertime.ttf')
	})

	const reset_scroll = () => {
		// scroll_ref.scrollTo({x: 0, y: 0, animated: false})
	}

	if (!loaded) {
		return null;
	}
	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />
			<View style={styles.search_container} >
				<View style={styles.search_bar} >
					<TextInput 
					selectionColor="#535353" 
					// defaultValue={search_input} 
					// onChange={i => onInput(i)}
					onPressIn={on_input_press}
					onChangeText={i => two_func_one(i)} 
					style={styles.search_input} 
					placeholder='search'
					// value={search_input}
					// onSubmitEditing={onInput}
					/>
					
				</View>
				<View style={styles.interest_tabs} >
						<Pressable 
						onPressIn={trending_change} 
						onPressOut={reset_scroll} 
						
						// onPress={reset_scroll}
						style={{backgroundColor: trending_color, 
							width: 100,
							height: 30, 
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: 10}} 
						onPress={trending_press}>
							<Text style={styles.tab_text} >Trending</Text>
						</Pressable>
						<View style={styles.middle} />
						<Pressable 
						onPressIn={news_change} 
						onPressOut={news_change} 
						// onPress={reset_scroll}
						style={{backgroundColor: news_color, 
							height: 30, 
							width: 100, 
							justifyContent: 'center', 
							alignItems: 'center',
							borderRadius: 10}} 
						onPress={news_press}>
							<Text style={styles.tab_text} >News</Text>
						</Pressable>
				</View>
			</View>
			<SafeAreaView style={styles.search_results_container}>
				<View style={styles.search_results}>
					<Text>{search_results[0]}</Text>
					<Text>{search_results[1]}</Text>
					<Text>{search_results[2]}</Text>
					<Text>{search_results[3]}</Text>
					<Text>{search_results[4]}</Text>
				</View>
			</SafeAreaView>
			<View style={styles.scroll_contianer} >
				<ScrollView 
				ref={scroll_ref} 
				scrollsToTop='true'
				showsVerticalScrollIndicator='false'
				onScrollBeginDrag={Keyboard.dismiss} 
				onSubmitEditing={Keyboard.dismiss} 
				style={styles.scroll}>
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
		height: window.height / 11,
		width: window.width -24,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#535353'
	},
	search_bar: {
		overflow: 'hidden',
		justifyContent: 'center',
		bottom: window.height / 125,
		width: window.width - 30,
		height: window.height / 30,
		borderRadius: 13,
		backgroundColor: '#6A6A6A'
	},
	search_input: {
		left: 10,
		bottom: .5,
		fontSize: 17,
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
		width: 50
	},
	search_results_container: {
		position: 'absolute',
		alignItems: 'flex-end',
		// height: window.height,
		zIndex: 1
	},
	search_results: {
		// position: 'absolute',
		top: window.height / 10,
		backgroundColor: 'gray',
		width: window.width / 1.1,
		height: window.height / 2,
		borderRadius: 10
	},
	tansparency: {
		height: 155
	},
	scroll_contianer: {
		top: -23,
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
