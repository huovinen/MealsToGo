import React, { useContext } from "react";
import { Platform, StatusBar, SafeAreaView, FlatList } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantCard } from "../components/restaurant-info-card-styles";
import { SafeArea } from "../../../utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

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

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Search placeholder="Search" />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfoCard restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
