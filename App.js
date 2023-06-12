import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { colours } from "./src/utils/colours";
import { Focus } from "./src/features/Focus";
import { Timer } from "./src/features/Timer";

export default function App() {
	const [currentSubject, setCurrentSubject] = useState(null);

	return (
		<SafeAreaView style={styles.container}>
			{!currentSubject ? (
				<Focus addSubject={setCurrentSubject} />
			) : (
				<Timer
					subject={currentSubject}
					onTimerEnd={() => {}}
					clearSubject={() => {}}
				/>
			)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colours.darkBlue,
	},
});
