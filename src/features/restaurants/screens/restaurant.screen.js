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
import { RestaurantInfo } from "../components/restaurant-info.component";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.searchBarHolder}>
      <Searchbar placeholder="Search" style={styles.searchBar} />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchBarHolder: {
    flexDirection: "column",
    padding: 10,
    backgroundColor: "white",
  },
  searchBar: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  list: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: "white",
  },
});
