import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
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

          <Image 
          source={require("./assets/icon.png")}
          style={styles.localImg}
          />
          <Image 
          source={{uri: "https://vitalii-stinskii.com/images/photo.png"}}
          style={styles.uriImg}
          />

        {/* <StatusBar style="auto" /> */}
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    height: 280,
    width: 480
  },
  uriImg: {
    height: 200,
    width: 150
  }
});
