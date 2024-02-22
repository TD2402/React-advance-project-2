import { useState } from "react";
import {
  Heading,
  Container,
  WrapItem,
  Wrap,
  Center,
  Box,
  Flex,
} from "@chakra-ui/react";
import { TextInput } from "../TextInput";
import { RecipeListPage } from "../../pages/RecipeListPage";
import { data } from "../../utils/data";

export const RecipeSearch = ({
  bgColor,
  data,
  clickFn,
  searchField,
  setSearchField,
}) => {
  const handleChange = (event) => setSearchField(event.target.value);

  //filter recepten
  const matchedRecipes = data.hits.filter((recipe) =>
    recipe.recipe.label.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <Wrap mx="auto">
      <WrapItem alignItems="center" alignContent={"center"}>
        <Heading p={2} margin={2} textAlign="center" bgColor>
          Search for recipe
        </Heading>
        <WrapItem>
          <TextInput
            bgColor
            changeFn={handleChange}
            w={500}
            mb={8}
            label="Search for recipe"
          ></TextInput>
        </WrapItem>
      </WrapItem>
      <WrapItem>
        <RecipeListPage
          recipes={searchField ? matchedRecipes : data.hits}
          clickFn={clickFn}
        ></RecipeListPage>
      </WrapItem>
    </Wrap>
  );
};
