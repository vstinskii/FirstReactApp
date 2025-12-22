import { StyleSheet, Text, Button, View } from 'react-native'
import React, { useState } from 'react'


const ReactHooks = () => {

    const [state1, setState1] = useState(20)

    const IncreaseState = () => setState1(prevState => prevState + 1)
    const DecreaseState = () => setState1(prevState => prevState - 1)

    return (
        <View style={styles.container}>
            <Button title= "Increase"
            onPress={IncreaseState} />
            <Text style={{fontSize: 50}}>{state1}</Text>
            <Button title= "Decrease"
            onPress={DecreaseState} />
        </View>
    )
}

export default ReactHooks

const styles = StyleSheet.create({
    container: {
        flex: 1,

        // justifyContent: "flex-start",
        alignItems: "center"

    },
    
})
 