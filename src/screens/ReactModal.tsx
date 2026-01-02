import { StyleSheet, Text, Button, View, Modal } from 'react-native';

// import AntDesign from '@expo/vector-icons/AntDesign';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';


const ReactModal = () => {

    const [modalVisible, setModalVisible] = useState(false)

    const showModal = () => setModalVisible(true)
    const hideModal = () => setModalVisible(false)
    
    return (
        <View style={styles.container}>
        <Button title="Show modal"
        onPress={showModal}
        />

        <Modal visible={modalVisible} animationType='slide'>
            <Text style={{marginTop: 50, fontSize: 25}}>Here is the modal</Text>
            <Button 
            title="Hide modal" 
            
            onPress={hideModal}
        />
            <AntDesign name="close-circle" size={50} color="black" onPress={hideModal}/>
        </Modal>
        </View>
    )
}

export default ReactModal

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: "center",
        backgroundColor: "tomato",
        alignItems: "center"

    },
    
})
 