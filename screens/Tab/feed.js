import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Feed = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Feed</Text>
            

            <Button
                title="Open Details"
                onPress={() => navigation.navigate('Detalles')}
            />
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

export default Feed;