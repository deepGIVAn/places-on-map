// rnf

import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Home/Header";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // flex: 1,
    // backgroundColor: "red",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
