import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ReactFlexWrap = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
            </View>
            <View style={styles.view2}>
            </View>
            <View style={styles.view3}>
            </View>
            <View style={styles.view4}>
            </View>
            <View style={styles.view5}>
            </View>
        </View>
    )
}

export default ReactFlexWrap

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",

        justifyContent: "center",
        alignContent: "flex-end",

        flexWrap: "wrap"
    },
    view1: {
        backgroundColor: "tomato",
        width: 100,
        height: 100
    },
    view2: {
        backgroundColor: "gold",
        width: 100,
        height: 100
    },
    view3: {
        backgroundColor: "blue",
        width: 100,
        height: 100
    },
    view4: {
        backgroundColor: "grey",
        width: 100,
        height: 100
    },
    view5: {
        backgroundColor: "green",
        width: 100,
        height: 100
    },
})