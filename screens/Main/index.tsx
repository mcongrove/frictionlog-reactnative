import React, { useState, useEffect } from 'react';
import {
	StatusBar,
	StyleSheet,
	Text,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ListHeading from '../../components/ListHeading';
import ListRow from '../../components/ListRow';
import { color } from '../../styles';

export default function ScreenMain({ navigation }: { navigation: any }) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		navigation?.setOptions({
			headerShown: false
		});
	}, []);

	return loading ? (
		<></>
	) : (
		<SafeAreaProvider
			style={styles.Wrapper}
		>
			<StatusBar
				barStyle="light-content"
			/>
			<SafeAreaView
				style={styles.Heading}
				edges={['top', 'right', 'left']}
			>
				<Text
					style={styles.HeadingAccount}
				>
					mcongrove
				</Text>
				<Text
					style={styles.HeadingRepo}
					adjustsFontSizeToFit
					numberOfLines={1}
				>
					frictionlog-reactnative
				</Text>
			</SafeAreaView>
			<SafeAreaView
				style={styles.Content}
				edges={['right', 'bottom', 'left']}
			>
				<ListHeading
					title="December 5"
					style={styles.ListHeading}
				/>
				<ListRow
					message="Foo bar"
					style={styles.ListRow}
				/>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export const styles = StyleSheet.create({
	Wrapper: {
		backgroundColor: color.Grey800,
	},
	Heading: {
		backgroundColor: color.Grey900,
		paddingTop: 48,
		paddingRight: 34,
		paddingBottom: 24,
		paddingLeft: 24,
		borderBottomRightRadius: 48,
	},
	HeadingAccount: {
		marginBottom: 4,
		fontSize: 20,
		fontWeight: '600',
		color: color.Green500,
	},
	HeadingRepo: {
		color: color.White,
		fontSize: 60,
	},
	Content: {
		flex: 1,
		width: '100%',
		paddingHorizontal: 24,
	},
	ListHeading: {

	},
	ListRow: {

	},
});
