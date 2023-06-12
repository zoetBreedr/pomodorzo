import { View, Text, StyleSheet, FlatList } from "react-native";
import { colours } from "../utils/colours";
import { spacing, fontSizes } from "../utils/sizes";

export const FocusHistory = ({ history }) => {
	if (!history || !history.length) return null;

	const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Things we've focused on</Text>
			<FlatList data={history} renderItem={renderItem} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: spacing.md,
		flex: 1,
	},
	title: {
		color: colours.white,
		fontSize: fontSizes.md,
		fontWeight: "bold",
	},
	item: {
		color: colours.white,
		fontSize: fontSizes.md,
		paddingTop: spacing.sm,
	},
});
