import { data } from "../utils/data";
import {WrapItem,Heading, UnorderedList,ListItem} from "@chakra-ui/react"
export const nutrients =({Nutrients, recipe, clickFn}) => { 
      const {
  
        totalNutrients,
     
      } = recipe;

    return (
      <WrapItem onClick={() => clickFn(Nutrients)}>
        <Heading color="orange" size="md" mb={2}>
          Total Nutrients:
        </Heading>
        <UnorderedList m={6}>
          {totalNutrients &&
            Object.entries(totalNutrients).map(([key, value]) => (
              <ListItem key={key}>
                {value.label}: {value.quantity.toFixed(0)}
                {value.unit}
              </ListItem>
            ))}
        </UnorderedList>
      </WrapItem>
    );


      }