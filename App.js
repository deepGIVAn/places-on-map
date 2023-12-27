import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TabNavigation from "./app/navigations/TabNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headTab}></Text>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  headTab: {
    // backgroundColor: "lightgray",
    height: 40,
  },
});
