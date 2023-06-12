import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { spacing } from "../utils/sizes";
import { RoundedButton } from "../components/RoundedButton";

export const Focus = ({ addSubject }) => {
	const [subject, setSubject] = useState(null);

	return (
		<View>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					onChangeText={setSubject}
					label="What are we focusing on?"
				/>
				<View style={styles.button}>
					<RoundedButton
						title="+"
						size={50}
						onPress={() => addSubject(subject)}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		justifyContent: "center",
	},
	inputContainer: {
		padding: spacing.lg,
		justifyContent: "top",
		flexDirection: "row",
	},
	textInput: {
		flex: 1,
		marginRight: spacing.sm,
	},
});
