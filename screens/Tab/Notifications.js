import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Notifications = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Notifications</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Notifications;