import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { default as ScreenMain } from './screens/Main';

export default function App() {
	const RootStack = createStackNavigator();

	return (
		<NavigationContainer>
			<RootStack.Navigator mode="modal">
				<RootStack.Screen
					name="Main"
					component={ScreenMain}
				/>
			</RootStack.Navigator>
		</NavigationContainer>
	);
}
