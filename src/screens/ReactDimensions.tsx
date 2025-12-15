import { StyleSheet, Dimensions, View } from 'react-native'
import React from 'react'

// Three ways to set adaptive height and with:
// 1. Percentage
// 2. Dimensions
// 3. Libraries

console.log(Dimensions.get("screen"))

const PHONE_HIGHT = Dimensions.get("screen").height
const PHONE_WIDTH = Dimensions.get("screen").width

const ReactDimensions = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view1}> 
            </View>
        </View>
    )
}

export default ReactDimensions

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view1: {
        backgroundColor: "tomato",
        width: PHONE_WIDTH * 0.8,
        height: PHONE_HIGHT / 2,
        
    },
})