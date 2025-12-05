import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Image, Button, TouchableOpacity, Pressable, ScrollView } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const onButtonPress = () => Alert.alert("Button pressed")

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView

        contentContainerStyle={styles.main_scroll}

        horizontal={false}
        >
        <Text style={styles.headerText}>Hello World!!</Text>
        <Text style={styles.mainText} >Lorem Ipsum is simply dummy text of the
          <Text
            style={styles.clickText}
            onPress={() => Alert.alert("Text has been pressed")}
          > printing </Text>
          and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.</Text>

          <TouchableOpacity>
          <Image 
          source={require("./assets/icon.png")}
          style={styles.localImg}
          />
          </TouchableOpacity>
          
          <Pressable onPress={onButtonPress}>
          <Image 
          source={{uri: "https://vitalii-stinskii.com/images/photo.png"}}
          style={styles.uriImg}
          />
          </Pressable>
          
          <Button 
          title="Press"
          onPress={onButtonPress}
          />
        {/* <StatusBar style="auto" /> */}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3e3",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerText: {
    fontSize: 20, // <--- This sets the font size
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  mainText: {
    fontSize: 20,
    textAlign: "justify"
  },
  clickText: {
    color: "red",
    textDecorationLine: "underline"
  },
  localImg: {
    height: 300,
    width: 300
  },
  uriImg: {
    height: 350,
    width: 300
  },
  main_scroll: {
    backgroundColor: "#ffffffe3",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 12
  }
});
