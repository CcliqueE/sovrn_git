import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Bottom_Nav from './components/bottom_nav';
import CreatePost from './screens/createPost';

const Stack = createNativeStackNavigator();


export default function App() {

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Group screenOptions={{headerShown: false}} >
					<Stack.Screen name='bottom_nav' component={Bottom_Nav}/>
				</Stack.Group>
				<Stack.Group>
					<Stack.Screen name='create_post' component={CreatePost}/>
				</Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
	)
}