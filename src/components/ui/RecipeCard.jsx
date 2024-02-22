import { Center, Wrap, Heading, Container, WrapItem } from "@chakra-ui/react";
import { Card, CardBody, Image, Flex, Box } from "@chakra-ui/react";
import { Tag } from "./Tag";
import { data } from "../../utils/data";
export const RecipeCard = ({ recipe, clickFn }) => {
  const {
    label,
    image,
    dietLabels,
    cautions,
    mealType,
    dishType,
    healthLabels,
  } = recipe;

  const isVegetarian = healthLabels.includes("Vegetarian");
  const isVegan = healthLabels.includes("Vegan");

  // You can play around with the console log, but ultimately remove it once you are done

  return (
   
    <Container
      h="auto"
      w="20vw"
      onClick={() => clickFn(recipe)}
      _hover={{ transform: "scale(1.05)" }}
      cursor="pointer"
      m={2}
    >
      <Card>
        <CardBody bgColor="white" borderRadius="xl">
          <Flex flexDir="column" p={1}>
            <Heading size="md" color="orange" p={2}>
              {label}
            </Heading>
            <Image
              textAlign={"center"}
              borderRadius="xl"
              w={"15vw"}
              h={"auto"}
              src={image}
            ></Image>
            <Wrap p={1}>
              <WrapItem>
                {dietLabels &&
                  dietLabels.map((dietLabel, index) => (
                    <Tag key={index} bgColor="blue.400">
                      {dietLabel}
                    </Tag>
                  ))}
              </WrapItem>
              <WrapItem>
                {cautions &&
                  cautions.map((allergen, index) => (
                    <Tag key={index} bgColor="red.400">
                      {allergen}
                    </Tag>
                  ))}
              </WrapItem>
              <WrapItem>
                <Tag bgColor="yellow.400">{mealType}</Tag>
              </WrapItem>
              <WrapItem>
                <Tag bgColor="yellow.400">{dishType}</Tag>
              </WrapItem>
              <WrapItem>
                {isVegan && <Tag bgColor="green.200">Vegan</Tag>}
                {isVegetarian && <Tag bgColor="green.300">Vega</Tag>}
              </WrapItem>
            </Wrap>
          </Flex>
        </CardBody>
      </Card>
    </Container>

  );
};
