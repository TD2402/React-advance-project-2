import { RecipeCard } from "./components/ui/RecipeCard";
import { OneRecipePage } from "./pages/OneRecipePage";
import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipeSearch } from "./components/ui/RecipeSearch";
import { data } from "./utils/data";
import { Flex,Container, Text, Center, Box } from "@chakra-ui/react";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchField, setSearchField] = useState("");

  return (
    <Flex className="App" bgColor="green.200" h="auto">
      {selectedItem ? (
        <OneRecipePage
          clickFn={setSelectedItem}
          recipe={selectedItem}
          data={data}
        ></OneRecipePage>
      ) : (
        
         
            <RecipeSearch
              mx={2}
              bgColor="green.200"
              clickFn={setSelectedItem}
              searchField={searchField}
              data={data}
              setSearchField={setSearchField}
            ></RecipeSearch>
    
     
      )}
    </Flex>
  );
};
