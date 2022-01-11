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

	const [show_results, setShow_results] = useState(false)
	const [search_results, setResults] = useState([])
	const [search_input, setText] = useState('')
	const [screen, setScreen] = useState('recommended')
	const [trending_color, setTrending_color] = useState('none')
	const [news_color, setNews_color] = useState('none')
	const [final_show, setFinal_show] = useState(false)

	const scroll_ref = useRef('scroll_ref')

	const trending_press = () => {
		setScreen('trending')
	}

	const news_press = () => {
		setScreen('news')
	}

	const trending_change = () => {
		setTrending_color('#4A4A4A')
		if(news_color !== 'none')
			setNews_color('#424242')
	}

	const news_change = () => {
		setNews_color('#4A4A4A')
		if(trending_color !== 'none')
			setTrending_color('#424242')
	}

	const two_func_one = ( i ) => {
		Keyboard.dismiss;
		on_input_press(i);
	}

	// const noShow = () => {
	// 	if(search_results.length === 0) {
	// 		// setShow_results(false)
	// 	}
	// }

	const onInput = async ( i ) => {
		setText(i)
		// console.log(i)
		// const input = i.toLowerCase()
		// console.log(search_results.length)
		// if(search_results.length === 0) {
		// 	setShow_results(false)
		// }
		if (i !== '') {
			try {
				const response = await fetch(
					'http://127.0.0.1:3000/discover', {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						username: 'one',
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
				// console.log(arr)
				// console.log(arr)
				setResults(arr)
				if(i.length !== 0 && final_show === false) {
					setFinal_show(true)
				}
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

	const final_Show = () => {
		if(final_show === true) {
			setFinal_show(false)
		}
	}

	const on_input_press = (i) => {
		if (show_results === false && i !== 'scroll') {
			setShow_results(true)
		} else if (show_results === true){
			setShow_results(false)
		}
		console.log(show_results)
	}
	
	const profilePress = (i) => {
		let bool = false
		if (search_input !== '' && search_results.length !== 0) {
			if (i === 0) {
				navigation.navigate('_user', {
					location: 'discover',
					_user: search_results[0]
				})
			} else if (i === 1) {
				navigation.navigate('_user', {
					location: 'discover',
					_user: search_results[1]
				})
			} else if (i === 2) {
				navigation.navigate('_user', {
					location: 'discover',
					_user: search_results[2]
				})
			} else if (i === 3) {
				navigation.navigate('_user', {
					location: 'discover',
					_user: search_results[3]
				})
			} else if (i === 4) {
				navigation.navigate('_user', {
					location: 'discover',
					_user: search_results[4]
				})
			}
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
			{search_input !== '' && search_results.length !== 0 && final_show !== false ?
			<SafeAreaView style={styles.search_results_container}>
				<ScrollView style={styles.search_results_scroll}>
					<View style={styles.search_results_scroll_view}>
						<View style={styles.search_results_top}/>
						<View style={styles.search_results}>
							<Pressable onPress={() => profilePress(0)} style={styles.search_results_individual_one_one}>
								<Text style={styles.search_results_individual_text}>{search_results[0]}</Text>
							</Pressable>
							<Pressable onPress={() => profilePress(1)} style={styles.search_results_individual_two}>
								<Text style={styles.search_results_individual_text}>{search_results[1]}</Text>
							</Pressable>
							<Pressable onPress={() => profilePress(2)} style={styles.search_results_individual_one}>
								<Text style={styles.search_results_individual_text}>{search_results[2]}</Text>
							</Pressable>
							<Pressable onPress={() => profilePress(3)} style={styles.search_results_individual_two}>
								<Text style={styles.search_results_individual_text}>{search_results[3]}</Text>
							</Pressable>
							<Pressable onPress={() => profilePress(4)} style={styles.search_results_individual_one}>
								<Text style={styles.search_results_individual_text}>{search_results[4]}</Text>
							</Pressable>
						</View>
						<Pressable style={styles.see_all_results}>
							<Text style={styles.see_all_results_text}>See All Results</Text>
						</Pressable>
					</View>
				</ScrollView>
			</SafeAreaView>
			: <View/>
			}
			<SafeAreaView style={{justifyContent: 'center', alignItems: 'center', position: 'absolute', zIndex: 1}}>
			<SafeAreaView style={{height: window.width / 4}}/>
			<View style={styles.search_container} >
				<View style={styles.search_bar} >
					<TextInput 
					selectionColor="#535353" 
					// defaultValue={search_input} 
					// onChange={i => onInput(i)}
					onPressIn={() => {on_input_press}}
					// onPressOut={() => {noShow}}
					onChangeText={i => onInput(i)} 
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
							width: window.width / 4,
							height: window.width / 13, 
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
							width: window.width / 4,
							height: window.width / 13, 
							justifyContent: 'center', 
							alignItems: 'center',
							borderRadius: 10}} 
						onPress={news_press}>
							<Text style={styles.tab_text} >News</Text>
						</Pressable>
				</View>
			</View>
			</SafeAreaView>
			
			<View style={styles.scroll_contianer} >
				<ScrollView 
				ref={scroll_ref} 
				scrollsToTop='true'
				showsVerticalScrollIndicator='false'
				onScrollBeginDrag={() => {Keyboard.dismiss(); final_Show}}
				// onPressIn={Keyboard.dismiss()}
				// onSubmitEditing={() => two_func_one('scroll')} 
				style={styles.scroll}>
					<SafeAreaView style={styles.tansparency}/>
					<View style={{height: window.width / 7.5}}/>
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
		backgroundColor: '#424242',
		alignItems: 'center',
	},
	search_container: {
		zIndex: 2,
		position: 'absolute',
		// top: window.height  / 100,
		height: window.width / 5.5,
		width: window.width / 1.06,
		borderRadius: window.width / 30,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#424242'
	},
	search_bar: {
		zIndex: 2,
		// position: 'absolute',
		overflow: 'hidden',
		justifyContent: 'center',
		bottom: window.height / 250,
		width: window.width - 30,
		// top: -100,
		height: window.width / 15,
		borderRadius: window.width / 40,
		backgroundColor: '#6A6A6A'
	},
	search_input: {
		left: window.width / 40,
		bottom: window.width / 550,
		fontSize: 17,
		fontFamily: 'Louis',
		color: 'black'
	},
	interest_tabs: {
		zIndex: 1,
		top: window.width / 60,
		flexDirection: 'row'
	},
	tab_text: {
		zIndex: 1,
		fontFamily: 'Louis'
	},
	middle: {
		width: window.width / 10
	},
	search_results_container: {
		top: window.width/ 10,
		position: 'absolute',
		alignItems: 'flex-end',
		// height: window.height,
		zIndex: 1
	},
	search_results_scroll: {
		// zIndex: 2,
		height: window.height / 3.55, 
		borderBottomLeftRadius: 20, 
		borderBottomRightRadius: 20,
		// alignItems: 'center'
	},
	search_results_scroll_view: {
		alignItems: 'center'
	},
	search_results_top: {
		position: 'absolute',
		height: window.height / 2,
		// bottom: window.height / 10,
		bottom: window.height / 2,
		width: '100%',
		backgroundColor: '#424242'
	},
	search_results: {
		// zIndex: 1,
		// position: 'absolute',
		// top: window.height / 12,
		backgroundColor: '#4B4B4B',
		width: window.width / 1.1,
		height: window.height / 1.65,
		top: window.height / 30,
		// bottom: window.height / 150,
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		overflow: 'hidden',
		// justifyContent: 'center',
		alignItems: 'center'
	},
	search_results_individual_one_one: {
		// zIndex: 1,
		height: window.height / 12,
		// top: 20,
		width: '100%',
		paddingLeft: window.width / 25,
		backgroundColor: '#424242',
		justifyContent: 'center',
		// alignItems: 'center',
		borderBottomRightRadius: 15,
		borderBottomLeftRadius: 15
	},
	search_results_individual_one: {
		// zIndex: 1,
		height: window.height / 12,
		width: '100%',
		paddingLeft: window.width / 25,
		backgroundColor: '#424242',
		justifyContent: 'center',
		borderRadius: 15
	},
	search_results_individual_two: {
		// zIndex: 1,
		height: window.height / 12,
		width: '100%',
		paddingLeft: window.width / 25,
		backgroundColor: '#4B4B4B',
		// shadowColor: 'black',
		// shadowOpacity: 1,
		// shadowRadius: 20,
		// shadowOffset: {height: 0},
		justifyContent: 'center',
		borderRadius: 15
	},
	see_all_results: {
		// position: 'absolute',
		width: window.width / 2.5,
		height: window.height / 20,
		backgroundColor: '#424242',
		alignItems: 'center',
		justifyContent: 'center',
		bottom: window.height / 12,
		borderRadius: 10
	},
	see_all_results_text: {

	},
	tansparency: {
		height: window.width / 8,
		// position: 'absolute',
		// backgroundColor: 'transparent'
		// zIndex: 1
		// bottom: 10
	},
	scroll_contianer: {
		// position: 'absolute',
		// top: -23,
		width: '100%',
		// top: window.width / 10
	},
	
	sample_block: {
		position: 'absolute',
		// zIndex: 2,
		height: 900,
		width: 415,
		backgroundColor: 'blue'
	},
	sample_text: {
		color: 'black'
	}
});
