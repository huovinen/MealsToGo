import React from "react";
import { Text, View, Platform, StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

const SearchContainer = styled.View`
  flex-direction: column;
  padding: ${(props) => props.theme.space[2]};
`;

const Search = styled(Searchbar)`
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const List = styled.View`
  flex-grow: 1;
  padding: ${(props) => props.theme.space[2]};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Search placeholder="Search" />
    </SearchContainer>
    <List>
      <RestaurantInfoCard />
    </List>
  </SafeArea>
);
