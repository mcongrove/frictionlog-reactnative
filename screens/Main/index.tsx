import React, { useEffect } from 'react';
import {
	SectionList,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import useGitHub from '../../hooks/useGitHub';
import ListHeading from '../../components/ListHeading';
import ListRow from '../../components/ListRow';
import { color } from '../../styles';

export default function ScreenMain({ navigation }: { navigation: any }) {
	const safeAreaInsets = useSafeAreaInsets();
	const { loading, error, data, nextUrl } = useGitHub();

	useEffect(() => {
		navigation?.setOptions({
			headerShown: false
		});
	}, []);

	return (
		<SafeAreaProvider
			style={styles.Wrapper}
		>
			<StatusBar
				barStyle="light-content"
			/>
			{error ? (
				<SafeAreaView
					style={[styles.Content, styles.Error]}
					edges={['top', 'right', 'bottom', 'left']}
				>
					<Text style={styles.ErrorHeading}>
						An error has occurred.
					</Text>
				</SafeAreaView>
			) : loading ? (
				<SafeAreaView
					style={[styles.Content, styles.Loading]}
					edges={['top', 'right', 'bottom', 'left']}
				>
					<Text style={styles.LoadingHeading}>
						Loading...
					</Text>
				</SafeAreaView>
			): (
				<>
					<SafeAreaView
						style={styles.Heading}
						edges={['top', 'right', 'left']}
					>
						<Text
							style={styles.HeadingAccount}
						>
							rblalock
						</Text>
						<Text
							style={styles.HeadingRepo}
							adjustsFontSizeToFit
							numberOfLines={1}
						>
							pbtechhackathon2020
						</Text>
					</SafeAreaView>
					<SafeAreaView
						style={styles.Content}
						edges={['right', 'left']}
					>
						<SectionList
							sections={data}
							keyExtractor={(item, index) => item.sha + index}
							renderItem={({ item }) => (
								<ListRow
									commit={item}
									style={styles.ListRow}
								/>
							)}
							renderSectionHeader={({ section: { title } }) => (
								<ListHeading
									title={title}
									style={styles.ListHeading}
								/>
							)}
							ListFooterComponent={() => (
								// Padding for bottom of list;
								// use safe area inset if it's more than 18px, otherwise use 18px for a little room
								<View style={{ height: safeAreaInsets.bottom > 18 ? safeAreaInsets.bottom : 18 }} />
							)}
							// onEndReached={() => {
							// 	We could use the nextUrl to paginate here
							// }}
							// onRefresh={() => {
							// 	We could use refetch the data from the API here
							// }}
						/>
					</SafeAreaView>
				</>
			)}
		</SafeAreaProvider>
	);
};

export const styles = StyleSheet.create({
	Wrapper: {
		flex: 1,
		backgroundColor: color.Grey800,
	},
	Heading: {
		backgroundColor: color.Grey900,
		paddingTop: 48,
		paddingRight: 36,
		paddingBottom: 24,
		paddingLeft: 24,
		borderBottomRightRadius: 30,
	},
	HeadingAccount: {
		marginBottom: 4,
		fontSize: 18,
		fontWeight: '600',
		color: color.Green500,
	},
	HeadingRepo: {
		color: color.White,
		fontSize: 60,
	},
	Content: {
		flex: 1,
	},
	ListHeading: {
		// Not necessary for now
	},
	ListRow: {
		// Not necessary for now
	},
	Loading: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	LoadingHeading: {
		color: color.White,
		fontSize: 18,
	},
	Error: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	ErrorHeading: {
		color: color.White,
		fontSize: 18,
	},
});
