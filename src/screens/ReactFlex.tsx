import { StyleSheet, View } from 'react-native'
import React from 'react'

const ReactFlex = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
             {/* <View style={styles.nested_view1}/> */}
            
            </View>
            <View style={styles.view2}>
            </View>
            <View style={styles.view3}>
            </View>
        </View>
    )
}

export default ReactFlex

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",

        justifyContent: "center",
        alignItems: "center"
    },
    view1: {
        backgroundColor: "tomato",
        width: 100,
        height: 200,
        position: "absolute",
        top: 100,
        left: 20
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
    nested_view1: {
        backgroundColor: "white",
        width: 50,
        height: 50
    },
})