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
	message: string;
	style?: StyleProp<TextStyle>;
}

const ListRow: FC<Props> = ({
	message = "",
	style = null,
}) => {
	return (
		<View
			style={[style, styles.Wrapper]}
		>
			<Text
				style={styles.Message}
			>
				{message}
			</Text>
		</View>
	);
};

export const styles = StyleSheet.create({
	Wrapper: {
		backgroundColor: color.Grey800,
	},
	Message: {
		color: color.White,
	},
});

export default ListRow;
