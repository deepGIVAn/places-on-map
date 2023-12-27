import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import colors from "../../shared/colors";

export default function Header() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        justifyContent: "space-between",
      }}
    >
      <Image
        source={require("./../../../assets/logo.png")}
        style={styles.logo}
      />
      {/* <View> */}
      <TextInput placeholder="Search" style={styles.searchBar} />
      {/* </View> */}
      <Image
        source={require("./../../../assets/placeholder.jpg")}
        style={styles.userImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  searchBar: {
    borderWidth: 2,
    borderColor: colors.black,
    padding: 4,
    borderRadius: 50,
    paddingRight: 10,
    paddingLeft: 10,
    width: "65%",
    //  width: Dimensions.get('screen').width * 0.65,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
