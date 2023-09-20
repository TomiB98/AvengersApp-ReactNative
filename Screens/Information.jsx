import * as React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

export default function Information({ image, name, description }) {
   
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: image }}
                resizeMode="contain"
            />
            <Text style={styles.title}>{name}</Text>
            {description ? 
            <Text style={styles.description}>{description}</Text>
            : null }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
    },
    image: {
        borderRadius: 5,
        height: 150,
        width: 150,
    },
    title: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 15
    },
    description: {
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        padding: 2,
        borderColor: 'red',
        fontSize: 15
    },
});