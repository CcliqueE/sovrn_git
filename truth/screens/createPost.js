import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image, ScrollView, FlatList, SafeAreaView, Dimensions } from 'react-native';
import {RNS3} from 'react-native-aws3'
import * as ImagePicker from 'expo-image-picker';
import { Video } from 'expo-av'
import * as MediaLibrary from 'expo-media-library'

const arrow = require('../assets/img/arrow-up.png')
const x_button = require('../assets/img/x-button.png')

const window = Dimensions.get('window')

const Library = ({ item }) => (
	<View >
		<Image 
		source={{ uri: item }}
		style={styles.media}/>
	</View>
)

export default function CreatePost({ navigation, route }) {
	
    const [media, setMedia] = useState([])
	const [show, setShow] = useState(false)
	const location = route.params.location

	const goBack = () => {
		navigation.navigate(location)
	}

	const media_grid = ({ item }) => {
		return (<Library item={item.src}/>)
	}

	const pickMedia = async () => {

			const { status } = await MediaLibrary.getPermissionsAsync()
			if (status !== 'granted') {
				alert('Camera Roll Permissions Needed.')
			}

			let media = await MediaLibrary.getAssetsAsync()

			const media_arr = []

			for (let i = 0; i < media.assets.length; i++) {
				media_arr.push({
					id: i + 1,
					src: media.assets[i].uri
				})
			}

			if (!media.cancelled) {
				setMedia(media_arr)
				setShow(true)
			}
			
			
		}
	
	const closeMedia = () => {
		setMedia([])
		setShow(false)
	}

    return (
        <View style={styles.container} >
			<Pressable onPress={goBack} style={styles.x_button_container} >
				<Image source={x_button} style={styles.x_button} />
			</Pressable>
			<View style={styles.btn_container} >
				<Pressable style={styles.open_library} onPress={pickMedia}>
					<Text>Open Library</Text>
					
				</Pressable>
				<Pressable style={styles.close_library} onPress={closeMedia} >
					<Text>Close Library</Text>
				</Pressable>
			</View>
			{show === true ? 
				<SafeAreaView style={styles.media_scroll} >
					<View style={styles.arrow_up}>
						<Image style={styles.arrow} source={arrow} />
					</View>
					<FlatList 
					numColumns={5}
					data={media}
					renderItem={media_grid}
					columnWrapperStyle={styles.media_container}
					/>
				</SafeAreaView>
			: <View/>}
		</View>
    )
}



const styles = StyleSheet.create({
    container: {
		height: '100%',
		// alignItems: 'center',
		// justifyContent: 'center',
		// flexDirection: 'row',
		backgroundColor: '#616161'
	},
	x_button_container: {
		// position: 'absolute',
		// backgroundColor: 'black',
		width: 50,
		height: 50,
		// position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		top: 45,
		left: 20,
	},
	x_button: {
		width: 30,
		height: 30,
	},
	btn_container: {
		top: 20
	},
	open_library: {
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'gray',
		top: 40,
		borderRadius: 10,
		width: 150,
		height: 50
    },
	close_library: {
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'gray',
		top: 40,
		borderRadius: 10,
		left: 240,
		width: 150,
		height: 50
	},
	arrow_up: {
		position: 'absolute',
		backgroundColor: 'black',
		width: '100%',
		height: 50,
		bottom: (window.height / 3)- 5,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		justifyContent: 'center',
		alignItems: 'center'
	},
	arrow: {
		height: 20,
		width: 33
	},
	media_scroll: {
		position: 'absolute',
		height: window.height / 3,
		top: window.height - (window.height / 3),
		backgroundColor: 'black',
		
	},
	media: {
		width: window.width / 5,
		height: 130,
	}
})