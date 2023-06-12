import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { colours } from "./src/utils/colours";
import { Focus } from "./src/features/Focus";
import { FocusHistory } from "./src/features/FocusHistory";
import { Timer } from "./src/features/Timer";

export default function App() {
	const [currentSubject, setCurrentSubject] = useState(null);
	const [history, setHistory] = useState([]);

	return (
		<SafeAreaView style={styles.container}>
			{!currentSubject ? (
				<>
					<Focus addSubject={setCurrentSubject} />
					<FocusHistory history={history} />
				</>
			) : (
				<Timer
					subject={currentSubject}
					onTimerEnd={(subject) => {
						setHistory([...history, subject]);
					}}
					clearSubject={() => setCurrentSubject(null)}
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
