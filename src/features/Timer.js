import { StyleSheet, View, Text } from "react-native";
import { Countdown } from "../components/Countdown";
import { spacing } from "../utils/sizes";
import { RoundedButton } from "../components/RoundedButton";
import { useState } from "react";

export const Timer = ({ subject }) => {
	const [isStarted, setIsStarted] = useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.countdown}>
				<Countdown
					isPaused={!isStarted}
					onProgress={() => {}}
					onTimerEnd={() => {}}
				/>
			</View>
			<View style={styles.buttonWrapper}>
				{!isStarted ? (
					<RoundedButton title="Start" onPress={() => setIsStarted(true)} />
				) : (
					<RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	countdown: {
		flex: 0.5,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonWrapper: {
		flex: 0.3,
		flexDirection: "row",
		padding: spacing.md,
		justifyContent: "center",
		alignItems: "center",
	},
});
