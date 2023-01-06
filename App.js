import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Searchbar } from "react-native-paper";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarHolder}>
        <Searchbar placeholder="Search" style={styles.searchBar} />
      </View>
      <View style={styles.list}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchBarHolder: {
    flexDirection: "column",
    padding: 10,
    backgroundColor: "green",
  },
  searchBar: {
    flexGrow: 1,
  },
  list: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: "blue",
  },
});
