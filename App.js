import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Bottom_Nav from './components/bottom_nav';
import CreatePost from './screens/createPost';
import Wallet from './screens/wallet'
import EditProfile from './screens/editprofile'
import Following from './screens/following'
import Followers from './screens/followers'
import DirectMsg from './screens/direct_msg';
import Settings from './screens/settings';

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
				<Stack.Group>
					<Stack.Screen name='settings' component={Settings}/>
				</Stack.Group>
				<Stack.Group>
					<Stack.Screen name='direct_msg' component={DirectMsg}/>
				</Stack.Group>
				<Stack.Group>
					<Stack.Screen name='wallet' component={Wallet}/>
				</Stack.Group>
				<Stack.Group>
					<Stack.Screen name='edit_profile' component={EditProfile}/>
				</Stack.Group>
				<Stack.Group>
					<Stack.Screen name='following' component={Following}/>
				</Stack.Group>
				<Stack.Group>
					<Stack.Screen name='followers' component={Followers}/>
				</Stack.Group>
				
			</Stack.Navigator>
		</NavigationContainer>
	)
}