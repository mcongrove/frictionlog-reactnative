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
		backgroundColor: color.Grey800,
	},
	Heading: {
		marginVertical: 24,
		fontSize: 12,
		fontWeight: '700',
		color: color.Green500,
		textTransform: 'uppercase',
	},
});

export default ListHeading;
