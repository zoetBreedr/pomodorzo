import { StyleSheet, View, Text } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Countdown } from "../components/Countdown";
import { spacing, fontSizes } from "../utils/sizes";
import { colours } from "../utils/colours";
import { RoundedButton } from "../components/RoundedButton";
import { useState } from "react";

export const Timer = ({ subject }) => {
	const [isStarted, setIsStarted] = useState(false);
	const [progress, setProgress] = useState(1);

	return (
		<View style={styles.container}>
			<View style={styles.countdown}>
				<Countdown
					isPaused={!isStarted}
					onProgress={(progress) => {
						setProgress(progress);
					}}
					onTimerEnd={() => {}}
				/>
				<View style={{ paddingTop: spacing.xxl }}></View>
				<Text style={styles.title}>Focusing on:</Text>
				<Text style={styles.task}>{subject}</Text>
			</View>
			<View style={{ paddingTop: spacing.sm }}>
				<ProgressBar
					color={colours.lightBlue}
					progress={progress}
					style={{ height: spacing.sm }}
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
	title: {
		color: colours.white,
		fontWeight: "bold",
		textAlign: "center",
		fontSize: fontSizes.lg,
	},
	task: {
		color: colours.white,
		textAlign: "center",
		fontSize: fontSizes.md,
	},
	buttonWrapper: {
		flex: 0.3,
		flexDirection: "row",
		padding: spacing.md,
		justifyContent: "center",
		alignItems: "center",
	},
});
