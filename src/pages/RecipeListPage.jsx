import { data } from "../utils/data";
import { RecipeCard } from "../components/ui/RecipeCard";
import { Box, Flex,  Container,Center, WrapItem, Heading, Wrap } from "@chakra-ui/react";
import { TextInput } from "../components/TextInput";
export const RecipeListPage = ({ clickFn, recipes }) => {
  return (
    <Wrap m={2} alignContent="center" textAlign="center">
      {recipes.map((item) => (
        <WrapItem key={item.recipe.label}>
          <RecipeCard
            clickFn={clickFn}
           
            recipe={item.recipe}
          ></RecipeCard>
        </WrapItem>
      ))}
    </Wrap>
  );
};
