import { StyleSheet, Dimensions, View } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'

// Three ways to set adaptive height and with:
// 1. Percentage
// 2. Dimensions
// 3. Libraries

console.log(Dimensions.get("screen"))

const PHONE_HIGHT = Dimensions.get("screen").height
const PHONE_WIDTH = Dimensions.get("screen").width

const ReactUIScale = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view1}> 
            </View>
            <View style={styles.view2}> 
            </View>
        </View>
    )
}

export default ReactUIScale

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: "space-between"

    },
    view1: {
        backgroundColor: "tomato",
        width: PHONE_WIDTH * 0.8,
        height: PHONE_HIGHT / 2,
    },

    view2: {
        backgroundColor: "green",
        width: scale(280),
        height: verticalScale (120),
    },
})