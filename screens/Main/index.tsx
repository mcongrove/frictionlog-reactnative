import React, { useState, useEffect } from 'react';
import {
	Dimensions,
	Image,
	LayoutAnimation,
	Keyboard,
	Pressable,
	StatusBar,
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableWithoutFeedback,
	View
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { color } from '../../styles';

export enum RECURRENCE {
	ONCE,
	HOUR,
	DAY,
	WEEK,
	MONTH,
	YEAR,
};

export default function ScreenMain({ navigation }: { navigation: any }) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		navigation?.setOptions({
			headerShown: false
		});
	}, []);

	return (
		<SafeAreaProvider>
			<StatusBar
				barStyle="light-content"
			/>
			<SafeAreaView
				style={styles.Wrapper}
				edges={['top', 'right', 'left']}
			>
				<View
					style={styles.Content}
				>
					{/* Foo */}
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export const styles = StyleSheet.create({
	Wrapper: {
		flex: 1,
	},
	Content: {
		flex: 1,
		width: '100%',
	},
});
