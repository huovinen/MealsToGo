import React from "react";
import { Platform, StatusBar, SafeAreaView, FlatList } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantCard } from "../components/restaurant-info-card-styles";
import { SafeArea } from "../../../utility/safe-area.component";

const SearchContainer = styled.View`
  flex-direction: column;
  padding: ${(props) => props.theme.space[2]};
`;

const Search = styled(Searchbar)`
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Search placeholder="Search" />
    </SearchContainer>
    <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
      ]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 16 }}
    />
  </SafeArea>
);
