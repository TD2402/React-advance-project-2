import { Wrap, Heading, WrapItem } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  Image,
  Container,
  Flex,
  Box,
  Center,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import { Tag } from "../components/ui/Tag";

export const OneRecipePage = ({ recipe, clickFn }) => {
  const {
    label,
    image,
    dietLabels,
    cautions,
    mealType,
    dishType,
    healthLabels,
    totalTime,
    ingredientLines,
    totalNutrients,
    calories,
    PROCNT,
  } = recipe;

  const isVegetarian = healthLabels.includes("Vegetarian");
  const isVegan = healthLabels.includes("Vegan");
  return (
    <>
      <Container h="auto" bgColor="white" maxW="800px">
        <Heading size="md" color="orange" p={2} textAlign="center">
          {label}
        </Heading>
        <Image
          mx="auto"
          alignItems="center"
          borderRadius="xl"
          w={"400px"}
          h={"auto"}
          src={image}
        ></Image>
        <Wrap p={2} mx="auto" alignContent="center" justifyContent="center">
          <WrapItem>
            {dietLabels &&
              dietLabels.map((dietLabel, index) => (
                <Tag key={index} bgColor="blue.400">
                  {dietLabel}
                </Tag>
              ))}
          </WrapItem>
          <WrapItem mx="auto">
            {cautions &&
              cautions.map((allergen, index) => (
                <Tag key={index} bgColor="orange.400">
                  {allergen}
                </Tag>
              ))}
          </WrapItem>
          <WrapItem>
            <Tag bgColor="paars.400">{mealType}</Tag>
          </WrapItem>
          <WrapItem>
            <Tag bgColor="yellow.400">{dishType}</Tag>
          </WrapItem>
          <WrapItem>
            {isVegan && <Tag bgColor="green.200">Vegan</Tag>}
            {isVegetarian && <Tag bgColor="green.300">Vega</Tag>}
          </WrapItem>
          <WrapItem>
            <Tag bgColor="black"> {totalTime} minuten</Tag>
          </WrapItem>
        </Wrap>
        <Wrap>
          <WrapItem>
            <UnorderedList m={6}>
              <Heading color="orange" size="md" mb={4}>
                Ingredients:
              </Heading>
              {ingredientLines &&
                ingredientLines.map((ingredient, index) => (
                  <ListItem key={index}> {ingredient}</ListItem>
                ))}
            </UnorderedList>
          </WrapItem>
          <WrapItem mx="auto">
            <UnorderedList m={6}>
              <Heading color="orange" size="md" mb={4}>
                Nutrients:
              </Heading>
              <ListItem>Energy: {calories.toFixed(0)} kcal</ListItem>

              <ListItem>
                {totalNutrients && totalNutrients.PROCNT && (
                  <div>
                    {totalNutrients.PROCNT.label}:{""}
                    {totalNutrients.PROCNT.quantity.toFixed(0)}
                    {totalNutrients.PROCNT.unit}
                  </div>
                )}
              </ListItem>
              <ListItem>
                {totalNutrients && totalNutrients.FAT && (
                  <div>
                    {totalNutrients.FAT.label}:{""}
                    {totalNutrients.FAT.quantity.toFixed(0)}
                    {totalNutrients.FAT.unit}
                  </div>
                )}
              </ListItem>
              <ListItem>
                {totalNutrients && totalNutrients.CHOCDF && (
                  <div>
                    {totalNutrients.CHOCDF.label}:{""}
                    {totalNutrients.CHOCDF.quantity.toFixed(0)}
                    {totalNutrients.CHOCDF.unit}
                  </div>
                )}
              </ListItem>
              <ListItem>
                {totalNutrients && totalNutrients.CHOLE && (
                  <div>
                    {totalNutrients.CHOLE.label}:{""}
                    {totalNutrients.CHOLE.quantity.toFixed(0)}
                    {totalNutrients.CHOLE.unit}
                  </div>
                )}
              </ListItem>

              <ListItem>
                {totalNutrients && totalNutrients.NA && (
                  <div>
                    {totalNutrients.NA.label}:{""}
                    {totalNutrients.NA.quantity.toFixed(0)}
                    {totalNutrients.NA.unit}
                  </div>
                )}
              </ListItem>
            </UnorderedList>
          </WrapItem>
          <WrapItem>
            <Button bgColor="orange" m={2} onClick={() => clickFn()}>
              Return
            </Button>
            <WrapItem>
              <Button bgColor="orange" m={2} onClick={() => clickFn()}>
                More information about the Nutrients
              </Button>
            </WrapItem>
          </WrapItem>
        </Wrap>
      </Container>
    </>
  );
};
