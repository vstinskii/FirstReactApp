import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View,
  Platform, Alert, Image, Button,
  TouchableOpacity, Pressable,
  ScrollView, ActivityIndicator
} from 'react-native';

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
          <Text style={styles.headerText}>This is {Platform.OS === "android" ? "Android" : "IOS"} device</Text>

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
              source={{ uri: "https://vitalii-stinskii.com/images/photo.png" }}
              style={styles.uriImg}
            />
          </Pressable>

          <Button
            title="Press"
            onPress={onButtonPress}
          />
          {/* <StatusBar style="auto" /> */}
          <View style={styles.view1}>
            <Text>Some view text</Text>
          </View>
          <ActivityIndicator size={"large"} color={"green"} />
        </ScrollView>
      </SafeAreaView>
      <View style={styles.view2}></View>
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
    backgroundColor: Platform.OS === "android" ? "#ffffffe3" : "#fffedce3",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 12
  },
  view1: {
    height: 300,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(251, 243, 156, 1)"
  },
  view2: {

    flex: .02,
    backgroundColor: "green"
  }
});
