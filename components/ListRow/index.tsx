import React, { FC } from 'react';
import {
	Image,
	StyleProp,
	StyleSheet,
	Text,
	TextStyle,
	View,
} from 'react-native';
import { color } from '../../styles';

interface CommitAuthor {
	login: string;
	avatar_url: string;
}

interface CommitCommitter {
	date: string;
}

interface CommitVerification {
	verified: boolean;
}

interface CommitDetail {
	message: string;
	verification: CommitVerification;
	committer: CommitCommitter;
}

interface Commit {
	sha: string;
	commit: CommitDetail;
	author: CommitAuthor;
}

interface Props {
	commit: Commit;
	style?: StyleProp<TextStyle>;
}

const ListRow: FC<Props> = ({
	commit = null,
	style = null,
}) => {
	const ts = new Date(commit?.commit.committer.date || '');

	return commit && (
		<View
			style={[style, styles.Wrapper]}
		>
			<Text
				style={styles.Message}
			>
				{commit.commit.message}
			</Text>
			<View
				style={styles.Metadata}
			>
				<View
					style={styles.Author}
				>
					<Image
						style={styles.Avatar}
						source={{
							uri: commit.author.avatar_url
						}}
					/>
					<Text
						style={styles.Name}
					>
						{commit.author.login}
					</Text>
				</View>

				<Text
					style={styles.SHA}
				>
					{commit.sha.substring(0, 7)}
				</Text>

				<Text
					style={styles.Time}
				>
					{ts.toLocaleString([], { 
						hour: 'numeric', 
						minute: '2-digit'
					})}
				</Text>
			</View>
		</View>
	);
};

export const styles = StyleSheet.create({
	Wrapper: {
		marginTop: 18,
		marginHorizontal: 24,
		padding: 18,
		borderRadius: 6,
		backgroundColor: color.Grey700,
	},
	Message: {
		marginBottom: 12,
		fontSize: 18,
		lineHeight: 24,
		fontWeight: '600',
		color: color.White,
	},
	Metadata: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	Author: {
		flexGrow: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	Avatar: {
		width: 24,
		height: 24,
		borderRadius: 12,
		marginRight: 6,
	},
	Name: {
		marginRight: 12,
		fontSize: 14,
		lineHeight: 14,
		fontWeight: '400',
		color: color.Grey500,
	},
	SHA: {
		marginRight: 12,
		fontSize: 14,
		lineHeight: 14,
		fontWeight: '400',
		color: color.Grey500,
	},
	Time: {
		fontSize: 14,
		lineHeight: 14,
		fontWeight: '400',
		color: color.Grey500,
	},
});

export default ListRow;
