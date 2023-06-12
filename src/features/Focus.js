import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { colours } from '../utils/colours';

export const Focus = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Focusss features</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: colours.white,
    }
})