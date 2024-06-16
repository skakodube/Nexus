import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Show,
  useColorModeValue,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformList from "./components/PlatformList";
import SortSelector from "./components/SortSelector";
import PlatformSelector from "./components/PlatformSelector";
import GameHeading from "./components/GameHeading";
import DisplaySelector from "./components/DisplaySelector";
import useGameQueryStore from "./store";

function App() {
  const color = useColorModeValue("black", "white");
  const hoverColor = useColorModeValue("gray.600", "gray.400");

  const [columnDisplay, setColumnDisplay] = useState(false);

  const resetGameQuery = useGameQueryStore((s) => s.resetGameQuery);

  return (
    <Grid
      paddingX={10}
      templateAreas={{
        base: `"nav" 
              "main"`,

        lg: `"nav nav" 
            "aside main"`,
      }}
      gridTemplateColumns={{ base: "1fr", lg: "220px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem my={10} area={"aside"}>
          <Box mb={5} onClick={() => resetGameQuery()}>
            <Button
              variant="link"
              fontSize={"2xl"}
              fontWeight={"bold"}
              style={{ textDecoration: "none" }}
              color={color}
              _hover={{ color: hoverColor }}
            >
              Home
            </Button>
          </Box>
          <Box mb={5}>
            <Heading mb={3} fontSize="2xl">
              Platforms
            </Heading>
            <PlatformList />
          </Box>
          <Box>
            <Heading mb={3} fontSize="2xl">
              Genres
            </Heading>
            <GenreList />
          </Box>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameHeading />
        <HStack mb={4} justifyContent="space-between" w={"100%"}>
          <HStack spacing={2}>
            <SortSelector />
            <PlatformSelector />
          </HStack>
          <DisplaySelector
            columnDisplay={columnDisplay}
            setColumnDisplay={(columnDisplay) =>
              setColumnDisplay(columnDisplay)
            }
          />
        </HStack>
        <GameGrid columnDisplay={columnDisplay} />
      </GridItem>
    </Grid>
  );
}

export default App;
