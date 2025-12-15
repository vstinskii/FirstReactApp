import {
  StyleSheet, Text, View,
  Platform, Alert, Image, Button,
  TouchableOpacity, Pressable,
  ScrollView, ActivityIndicator
} from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native'

const Menu = () => {

  const navigation = useNavigation<any>()
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Button title="React Native Basics"
          onPress={() => navigation.navigate("ReactNativeBasics")}
          />
          <Button title="React Flex"
          onPress={() => navigation.navigate("ReactFlex")}
          />
          <Button title="React Flex Wrap"
          onPress={() => navigation.navigate("ReactFlexWrap")}
          />

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>

  )
}

export default Menu

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
});