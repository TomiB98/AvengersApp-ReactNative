import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Comic({ name, image }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: image }}
                resizeMode="contain"
            />
            <Text style={styles.font}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: 250,
        marginRight: 2,
        padding: 5,
    },
    image: {
        borderRadius: 20,
        padding: 5,
        height: 300,
        width: '100%',
        // Sombras para Android
        elevation: 15,
        // Sombras para iOS
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 8 },
        shadowOpacity: 20,
        shadowRadius: 5,
    },
    font: {
        marginLeft: 12,
        padding: 5,
        color: 'black',
        fontWeight: '600',
        fontSize: 15,
    },
});