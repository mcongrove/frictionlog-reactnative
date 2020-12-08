import React, { FC } from 'react';
import {
	StyleProp,
	StyleSheet,
	Text,
	TextStyle,
	View,
} from 'react-native';
import { color } from '../../styles';

interface Props {
	title: string;
	style?: StyleProp<TextStyle>;
}

const ListHeading: FC<Props> = ({
	title = "",
	style = null,
}) => {
	return (
		<View
			style={[style, styles.Wrapper]}
		>
			<Text
				style={styles.Heading}
			>
				{title}
			</Text>
		</View>
	);
};

export const styles = StyleSheet.create({
	Wrapper: {
		marginTop: 18,
		marginHorizontal: 24,
		alignSelf: 'flex-start',
		backgroundColor: color.Green500,
		paddingVertical: 6,
		paddingHorizontal: 12,
		borderRadius: 6,
	},
	Heading: {
		flexGrow: 0,
		fontSize: 12,
		lineHeight: 14,
		fontWeight: '700',
		color: color.Grey800,
		textTransform: 'uppercase',
	},
});

export default ListHeading;
