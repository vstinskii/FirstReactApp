import { StyleSheet, Text, Button, View, Modal } from 'react-native';

// import AntDesign from '@expo/vector-icons/AntDesign';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ImageBackground } from 'react-native';


const ReactImageBackground = () => {
    
    return (
        <ImageBackground 
        source={require("../.././assets/apollo.jpg")}
        style={styles.container}>
        
        </ImageBackground>
    )
}

export default ReactImageBackground

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: "center",
        backgroundColor: "tomato",
        alignItems: "center"

    },
    
})
 