import * as React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers';

export default function CharacterCard({ image, name, id }) {
    
    const navigation = useNavigation();

    const [bangersLoaded] = useFonts({Bangers_400Regular})

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('Detail', { id })}
        >
            <Image
                style={styles.image}
                source={image}
                resizeMode="contain"
            />
            <Text style={styles.font}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 0, 0, 0.8)',
        alignItems: 'center',
        marginBottom: 2,
        borderRadius: 10,
        // padding: 5,
        // borderWidth: 1,
        // borderColor: 'red',
        // borderRadius: 5,
        // backgroundColor: 'rgba(255, 0, 0, 0.5)',
    },
    image: {
        borderBottomWidth: 7,
        borderTopWidth: 3,
        borderColor: 'rgba(84,84,84, 1)',
        borderRadius: 150,
        backgroundColor: 'black',
        height: 300,
        width: '100%',
    },
    font: {
        fontFamily: 'Bangers_400Regular', 
        textShadowColor: 'rgba(7, 0, 0, 1)', // Color del borde del texto
        textShadowOffset: { width: 5, height: 2 }, // Desplazamiento del borde del texto
        textShadowRadius: 3,
        padding: 5,
        color: 'yellow',
        // fontWeight: 'bold',
        fontSize: 30,
        marginTop: -25,
    },
});