import React from 'react' 
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
        <Text style={styles.title}> Menu Warung Kita</Text>
        </View>
    )
}

const styles =StyleSheet.create({
    header: {        
        height: 80,
        paddingTop: 18,
        backgroundColor: 'khaki',
        borderColor: 'black',
        borderWidth: 2,
        //borderStyle: 'dashed',
        //borderRadius: 15,
    },
    title: {
        textAlign: 'center',
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: ''
    }

});