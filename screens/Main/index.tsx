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

const tmp_data = [
	{ "sha": "7ced853d7dc4b0ea13cc65db40432291aafaf03f", "node_id": "MDY6Q29tbWl0MTQ2OTYzMzM6N2NlZDg1M2Q3ZGM0YjBlYTEzY2M2NWRiNDA0MzIyOTFhYWZhZjAzZg==", "commit": { "author": { "name": "Matthew Congrove", "email": "mattcongrove@gmail.com", "date": "2015-05-04T19:39:24Z" }, "committer": { "name": "Matthew Congrove", "email": "mattcongrove@gmail.com", "date": "2015-05-04T19:39:24Z" }, "message": "Updating to work with latest SDKs", "tree": { "sha": "033bb665aed1c05e1bd392a22bbaf3d510026d0a", "url": "https://api.github.com/repos/mcongrove/core/git/trees/033bb665aed1c05e1bd392a22bbaf3d510026d0a" }, "url": "https://api.github.com/repos/mcongrove/core/git/commits/7ced853d7dc4b0ea13cc65db40432291aafaf03f", "comment_count": 0, "verification": { "verified": false, "reason": "unsigned", "signature": null, "payload": null } }, "url": "https://api.github.com/repos/mcongrove/core/commits/7ced853d7dc4b0ea13cc65db40432291aafaf03f", "html_url": "https://github.com/mcongrove/core/commit/7ced853d7dc4b0ea13cc65db40432291aafaf03f", "comments_url": "https://api.github.com/repos/mcongrove/core/commits/7ced853d7dc4b0ea13cc65db40432291aafaf03f/comments", "author": { "login": "mcongrove", "id": 442433, "node_id": "MDQ6VXNlcjQ0MjQzMw==", "avatar_url": "https://avatars1.githubusercontent.com/u/442433?v=4", "gravatar_id": "", "url": "https://api.github.com/users/mcongrove", "html_url": "https://github.com/mcongrove", "followers_url": "https://api.github.com/users/mcongrove/followers", "following_url": "https://api.github.com/users/mcongrove/following{/other_user}", "gists_url": "https://api.github.com/users/mcongrove/gists{/gist_id}", "starred_url": "https://api.github.com/users/mcongrove/starred{/owner}{/repo}", "subscriptions_url": "https://api.github.com/users/mcongrove/subscriptions", "organizations_url": "https://api.github.com/users/mcongrove/orgs", "repos_url": "https://api.github.com/users/mcongrove/repos", "events_url": "https://api.github.com/users/mcongrove/events{/privacy}", "received_events_url": "https://api.github.com/users/mcongrove/received_events", "type": "User", "site_admin": false }, "committer": { "login": "mcongrove", "id": 442433, "node_id": "MDQ6VXNlcjQ0MjQzMw==", "avatar_url": "https://avatars1.githubusercontent.com/u/442433?v=4", "gravatar_id": "", "url": "https://api.github.com/users/mcongrove", "html_url": "https://github.com/mcongrove", "followers_url": "https://api.github.com/users/mcongrove/followers", "following_url": "https://api.github.com/users/mcongrove/following{/other_user}", "gists_url": "https://api.github.com/users/mcongrove/gists{/gist_id}", "starred_url": "https://api.github.com/users/mcongrove/starred{/owner}{/repo}", "subscriptions_url": "https://api.github.com/users/mcongrove/subscriptions", "organizations_url": "https://api.github.com/users/mcongrove/orgs", "repos_url": "https://api.github.com/users/mcongrove/repos", "events_url": "https://api.github.com/users/mcongrove/events{/privacy}", "received_events_url": "https://api.github.com/users/mcongrove/received_events", "type": "User", "site_admin": false }, "parents": [ { "sha": "74ca8903fc14ffdeeb33cf0b824701990f30ec9e", "url": "https://api.github.com/repos/mcongrove/core/commits/74ca8903fc14ffdeeb33cf0b824701990f30ec9e", "html_url": "https://github.com/mcongrove/core/commit/74ca8903fc14ffdeeb33cf0b824701990f30ec9e" } ] },
	{ "sha": "74ca8903fc14ffdeeb33cf0b824701990f30ec9e", "node_id": "MDY6Q29tbWl0MTQ2OTYzMzM6NzRjYTg5MDNmYzE0ZmZkZWViMzNjZjBiODI0NzAxOTkwZjMwZWM5ZQ==", "commit": { "author": { "name": "Rick Blalock", "email": "rickblalock@mac.com", "date": "2014-10-06T17:05:33Z" }, "committer": { "name": "Rick Blalock", "email": "rickblalock@mac.com", "date": "2014-10-06T17:05:33Z" }, "message": "Merge pull request #12 from asleson/core-issue-11-fix Update View Navigation for Android on Titanium 3.3.0GA", "tree": { "sha": "da2f4ef833fda4847ce6ed77821815a30e7a276f", "url": "https://api.github.com/repos/mcongrove/core/git/trees/da2f4ef833fda4847ce6ed77821815a30e7a276f" }, "url": "https://api.github.com/repos/mcongrove/core/git/commits/74ca8903fc14ffdeeb33cf0b824701990f30ec9e", "comment_count": 0, "verification": { "verified": false, "reason": "unsigned", "signature": null, "payload": null } }, "url": "https://api.github.com/repos/mcongrove/core/commits/74ca8903fc14ffdeeb33cf0b824701990f30ec9e", "html_url": "https://github.com/mcongrove/core/commit/74ca8903fc14ffdeeb33cf0b824701990f30ec9e", "comments_url": "https://api.github.com/repos/mcongrove/core/commits/74ca8903fc14ffdeeb33cf0b824701990f30ec9e/comments", "author": { "login": "rblalock", "id": 211819, "node_id": "MDQ6VXNlcjIxMTgxOQ==", "avatar_url": "https://avatars0.githubusercontent.com/u/211819?v=4", "gravatar_id": "", "url": "https://api.github.com/users/rblalock", "html_url": "https://github.com/rblalock", "followers_url": "https://api.github.com/users/rblalock/followers", "following_url": "https://api.github.com/users/rblalock/following{/other_user}", "gists_url": "https://api.github.com/users/rblalock/gists{/gist_id}", "starred_url": "https://api.github.com/users/rblalock/starred{/owner}{/repo}", "subscriptions_url": "https://api.github.com/users/rblalock/subscriptions", "organizations_url": "https://api.github.com/users/rblalock/orgs", "repos_url": "https://api.github.com/users/rblalock/repos", "events_url": "https://api.github.com/users/rblalock/events{/privacy}", "received_events_url": "https://api.github.com/users/rblalock/received_events", "type": "User", "site_admin": false }, "committer": { "login": "rblalock", "id": 211819, "node_id": "MDQ6VXNlcjIxMTgxOQ==", "avatar_url": "https://avatars0.githubusercontent.com/u/211819?v=4", "gravatar_id": "", "url": "https://api.github.com/users/rblalock", "html_url": "https://github.com/rblalock", "followers_url": "https://api.github.com/users/rblalock/followers", "following_url": "https://api.github.com/users/rblalock/following{/other_user}", "gists_url": "https://api.github.com/users/rblalock/gists{/gist_id}", "starred_url": "https://api.github.com/users/rblalock/starred{/owner}{/repo}", "subscriptions_url": "https://api.github.com/users/rblalock/subscriptions", "organizations_url": "https://api.github.com/users/rblalock/orgs", "repos_url": "https://api.github.com/users/rblalock/repos", "events_url": "https://api.github.com/users/rblalock/events{/privacy}", "received_events_url": "https://api.github.com/users/rblalock/received_events", "type": "User", "site_admin": false }, "parents": [ { "sha": "5c567441a5d0f60c56bb6943aec52f7f2a9057df", "url": "https://api.github.com/repos/mcongrove/core/commits/5c567441a5d0f60c56bb6943aec52f7f2a9057df", "html_url": "https://github.com/mcongrove/core/commit/5c567441a5d0f60c56bb6943aec52f7f2a9057df" }, { "sha": "5e36badcd7ec24694497eb94ad5ccfeaf7a3983e", "url": "https://api.github.com/repos/mcongrove/core/commits/5e36badcd7ec24694497eb94ad5ccfeaf7a3983e", "html_url": "https://github.com/mcongrove/core/commit/5e36badcd7ec24694497eb94ad5ccfeaf7a3983e" } ] }
];

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
					commit={tmp_data[0]}
					style={styles.ListRow}
				/>
				<ListRow
					commit={tmp_data[1]}
					style={styles.ListRow}
				/>
				<ListHeading
					title="December 4"
					style={styles.ListHeading}
				/>
				<ListRow
					commit={tmp_data[0]}
					style={styles.ListRow}
				/>
				<ListRow
					commit={tmp_data[1]}
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
		paddingRight: 36,
		paddingBottom: 24,
		paddingLeft: 24,
		borderBottomRightRadius: 48,
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
		width: '100%',
		paddingHorizontal: 24,
	},
	ListHeading: {

	},
	ListRow: {

	},
});
