import React, { useState } from "react";
import { View, StyleSheet, Text, Platform, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";
import { colours } from "../utils/colours";
import { Timing } from "./Timing";
import { useKeepAwake } from "expo-keep-awake";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
	1 * ONE_SECOND_IN_MS,
	1 * ONE_SECOND_IN_MS,
	1 * ONE_SECOND_IN_MS,
	1 * ONE_SECOND_IN_MS,
	1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ subject, clearSubject, onTimerEnd }) => {
	useKeepAwake();
	const [isStarted, setIsStarted] = useState(false);
	const [progress, setProgress] = useState(1);
	const [minutes, setMinutes] = useState(0.1);

	const onEnd = (reset) => {
		Vibration.vibrate(PATTERN);
		setIsStarted(false);
		setProgress(1);
		reset();
		onTimerEnd(subject);
	};

	return (
		<View style={styles.container}>
			<View style={styles.countdown}>
				<Countdown
					minutes={minutes}
					isPaused={!isStarted}
					onProgress={setProgress}
					onEnd={onEnd}
				/>
				<View style={{ paddingTop: spacing.xxl }}>
					<Text style={styles.title}>Focusing on:</Text>
					<Text style={styles.task}>{subject}</Text>
				</View>
			</View>
			<View style={{ paddingTop: spacing.sm }}>
				<ProgressBar
					progress={progress}
					color={colours.progressBar}
					style={{ height: spacing.sm }}
				/>
			</View>
			<View style={styles.timingWrapper}>
				<Timing onChangeTime={setMinutes} />
			</View>
			<View style={styles.buttonWrapper}>
				{!isStarted ? (
					<RoundedButton title="start" onPress={() => setIsStarted(true)} />
				) : (
					<RoundedButton title="pause" onPress={() => setIsStarted(false)} />
				)}
			</View>
			<View style={styles.clearSubjectWrapper}>
				<RoundedButton size={50} title="-" onPress={clearSubject} />
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
	timingWrapper: {
		flex: 0.1,
		flexDirection: "row",
		paddingTop: spacing.xxl,
	},
	buttonWrapper: {
		flex: 0.3,
		flexDirection: "row",
		padding: spacing.md,
		justifyContent: "center",
		alignItems: "center",
	},
	clearSubjectWrapper: {
		flexDirection: "row",
		justifyContent: "center",
	},
	title: {
		color: colours.white,
		fontWeight: "bold",
		textAlign: "center",
	},
	task: {
		color: colours.white,
		textAlign: "center",
	},
});
